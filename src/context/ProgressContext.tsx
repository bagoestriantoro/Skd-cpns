import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ALL_QUESTIONS, ALL_TOPICS } from '../data/skdIndex';
import { CATEGORY_META } from '../data/skdMeta';
import {
  AnsweredRecord,
  Question,
  TestCategory,
  TryoutAttempt,
  UserProgress,
} from '../types/skd';

const STORAGE_KEY = 'fokus_cpns_progress_v1';

function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function createInitialProgress(): UserProgress {
  return {
    readTopics: [],
    answeredQuestions: {},
    tryoutHistory: [],
    studySeconds: 0,
    streakDays: 1,
    lastActiveDate: getTodayDateString(),
  };
}

function loadStoredProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialProgress();
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    const today = getTodayDateString();
    const lastDate = parsed.lastActiveDate || today;
    let streak = typeof parsed.streakDays === 'number' ? parsed.streakDays : 1;

    if (lastDate !== today) {
      const prev = new Date(lastDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        streak += 1;
      } else if (diffDays > 1) {
        streak = 1;
      }
    }

    return {
      readTopics: Array.isArray(parsed.readTopics) ? parsed.readTopics : [],
      answeredQuestions:
        parsed.answeredQuestions && typeof parsed.answeredQuestions === 'object'
          ? parsed.answeredQuestions
          : {},
      tryoutHistory: Array.isArray(parsed.tryoutHistory) ? parsed.tryoutHistory : [],
      studySeconds: typeof parsed.studySeconds === 'number' ? parsed.studySeconds : 0,
      streakDays: streak,
      lastActiveDate: today,
    };
  } catch {
    return createInitialProgress();
  }
}

export interface CategoryProgressSummary {
  category: TestCategory;
  topicsTotal: number;
  topicsRead: number;
  questionsTotal: number;
  questionsAnswered: number;
  earnedPoints: number;
  maxPossiblePoints: number;
  accuracyPct: number;
  projectedCATScore: number;
  passingGrade: number;
  maxCATScore: number;
  meetsPassingGrade: boolean;
}

export interface TopicProgressSummary {
  isRead: boolean;
  answeredCount: number;
  totalQuestions: number;
  earnedPoints: number;
  maxPossiblePoints: number;
  accuracyPct: number;
}

interface ProgressContextValue {
  progress: UserProgress;
  totalTopics: number;
  readTopicsCount: number;
  totalQuestions: number;
  answeredCount: number;
  overallMasteryPct: number;
  overallAccuracyPct: number;
  projectedTotalSKD: number;
  categoryStats: Record<TestCategory, CategoryProgressSummary>;
  getTopicProgress: (topicId: string) => TopicProgressSummary;
  markTopicRead: (topicId: string, read?: boolean) => void;
  recordAnswer: (question: Question, selectedIndex: number) => AnsweredRecord;
  recordTryoutAttempt: (attempt: TryoutAttempt) => void;
  resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => loadStoredProgress());

  // Persist changes to localStorage immediately
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [progress]);

  // Real-time study session timer (ticks every 1s while tab is visible)
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setProgress((prev) => ({
          ...prev,
          studySeconds: prev.studySeconds + 1,
          lastActiveDate: getTodayDateString(),
        }));
      }
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const markTopicRead = (topicId: string, read = true) => {
    setProgress((prev) => {
      const exists = prev.readTopics.includes(topicId);
      if (read && exists) return prev;
      if (!read && !exists) return prev;
      const nextRead = read
        ? [...prev.readTopics, topicId]
        : prev.readTopics.filter((id) => id !== topicId);
      return { ...prev, readTopics: nextRead };
    });
  };

  const recordAnswer = (question: Question, selectedIndex: number): AnsweredRecord => {
    let earnedScore = 0;
    const maxScore = 5;
    let isOptimal = false;

    if (question.category === TestCategory.TKP && question.optionScores) {
      earnedScore = question.optionScores[selectedIndex] ?? 1;
      isOptimal = earnedScore === 5;
    } else {
      isOptimal = selectedIndex === question.correctIndex;
      earnedScore = isOptimal ? 5 : 0;
    }

    const record: AnsweredRecord = {
      questionId: question.id,
      topicId: question.topicId,
      category: question.category,
      selectedIndex,
      earnedScore,
      maxScore,
      isOptimal,
      timestamp: Date.now(),
    };

    setProgress((prev) => ({
      ...prev,
      answeredQuestions: {
        ...prev.answeredQuestions,
        [question.id]: record,
      },
    }));

    return record;
  };

  const recordTryoutAttempt = (attempt: TryoutAttempt) => {
    setProgress((prev) => ({
      ...prev,
      tryoutHistory: [attempt, ...prev.tryoutHistory].slice(0, 20),
    }));
  };

  const resetAllProgress = () => {
    const fresh = createInitialProgress();
    setProgress(fresh);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch {
      // ignore
    }
  };

  const computed = useMemo(() => {
    const categories = [TestCategory.TWK, TestCategory.TIU, TestCategory.TKP];
    const categoryStats = {} as Record<TestCategory, CategoryProgressSummary>;

    let totalEarned = 0;
    let totalMaxPossible = 0;

    for (const cat of categories) {
      const meta = CATEGORY_META[cat];
      const topics = ALL_TOPICS.filter((t) => t.category === cat);
      const questions = ALL_QUESTIONS.filter((q) => q.category === cat);
      const topicsRead = topics.filter((t) => progress.readTopics.includes(t.id)).length;

      let earned = 0;
      let maxPossible = 0;
      let answered = 0;

      for (const q of questions) {
        const rec = progress.answeredQuestions[q.id];
        if (rec) {
          answered += 1;
          earned += rec.earnedScore;
          maxPossible += rec.maxScore;
        }
      }

      totalEarned += earned;
      totalMaxPossible += maxPossible;

      const accuracyPct = maxPossible > 0 ? Math.round((earned / maxPossible) * 100) : 0;
      const projectedCATScore =
        maxPossible > 0 ? Math.round((earned / maxPossible) * meta.maxScore) : 0;

      categoryStats[cat] = {
        category: cat,
        topicsTotal: topics.length,
        topicsRead,
        questionsTotal: questions.length,
        questionsAnswered: answered,
        earnedPoints: earned,
        maxPossiblePoints: maxPossible,
        accuracyPct,
        projectedCATScore,
        passingGrade: meta.passingGrade,
        maxCATScore: meta.maxScore,
        meetsPassingGrade: answered > 0 && projectedCATScore >= meta.passingGrade,
      };
    }

    const totalTopics = ALL_TOPICS.length;
    const readTopicsCount = progress.readTopics.filter((id) =>
      ALL_TOPICS.some((t) => t.id === id)
    ).length;
    const totalQuestions = ALL_QUESTIONS.length;
    const answeredCount = ALL_QUESTIONS.filter((q) => Boolean(progress.answeredQuestions[q.id])).length;

    const overallAccuracyPct =
      totalMaxPossible > 0 ? Math.round((totalEarned / totalMaxPossible) * 100) : 0;

    const readWeight = totalTopics > 0 ? readTopicsCount / totalTopics : 0;
    const quizWeight = totalQuestions > 0 ? answeredCount / totalQuestions : 0;
    const overallMasteryPct = Math.round(((readWeight + quizWeight) / 2) * 100);

    const projectedTotalSKD =
      categoryStats[TestCategory.TWK].projectedCATScore +
      categoryStats[TestCategory.TIU].projectedCATScore +
      categoryStats[TestCategory.TKP].projectedCATScore;

    return {
      totalTopics,
      readTopicsCount,
      totalQuestions,
      answeredCount,
      overallMasteryPct,
      overallAccuracyPct,
      projectedTotalSKD,
      categoryStats,
    };
  }, [progress]);

  const getTopicProgress = (topicId: string): TopicProgressSummary => {
    const topic = ALL_TOPICS.find((t) => t.id === topicId);
    const questions = topic?.questions ?? [];
    let answeredCount = 0;
    let earnedPoints = 0;
    let maxPossiblePoints = 0;

    for (const q of questions) {
      const rec = progress.answeredQuestions[q.id];
      if (rec) {
        answeredCount += 1;
        earnedPoints += rec.earnedScore;
        maxPossiblePoints += rec.maxScore;
      }
    }

    return {
      isRead: progress.readTopics.includes(topicId),
      answeredCount,
      totalQuestions: questions.length,
      earnedPoints,
      maxPossiblePoints,
      accuracyPct: maxPossiblePoints > 0 ? Math.round((earnedPoints / maxPossiblePoints) * 100) : 0,
    };
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        ...computed,
        getTopicProgress,
        markTopicRead,
        recordAnswer,
        recordTryoutAttempt,
        resetAllProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
