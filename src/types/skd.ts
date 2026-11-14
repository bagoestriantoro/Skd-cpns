export enum TestCategory {
  TWK = 'TWK',
  TIU = 'TIU',
  TKP = 'TKP',
}

export type FiguralShapeType =
  | 'triangle'
  | 'square'
  | 'pentagon'
  | 'hexagon'
  | 'circle'
  | 'diamond'
  | 'star'
  | 'arrow'
  | 'cross';

export interface FiguralGlyph {
  shape: FiguralShapeType;
  rotation?: number; // degrees
  fill?: 'solid' | 'outline' | 'striped' | 'accent';
  dotCount?: number;
  innerShape?: FiguralShapeType;
  scale?: number;
  xOffset?: number;
  yOffset?: number;
}

export interface FiguralQuestionVisual {
  mode: 'analogy' | 'odd_one_out' | 'series';
  /** Panels shown in the question prompt (e.g. A : B :: C : ? or 4-step series) */
  promptPanels: FiguralGlyph[][];
  /** 5 option panels corresponding to options A-E */
  optionPanels: FiguralGlyph[][];
}

export interface QuestionExplanation {
  correctSummary: string;
  deepAnalysis: string;
  distractorAnalysis: string[]; // For TWK/TIU: why wrong options fail; For TKP: score breakdown 5..1
  quickTip: string;
}

export interface Question {
  id: string;
  topicId: string;
  category: TestCategory;
  questionText: string;
  options: string[];
  /** Index 0..4 for TWK/TIU. For TKP, the index with score 5 */
  correctIndex: number;
  /** Only for TKP: array of 5 scores (1-5) matching options[0..4] */
  optionScores?: [number, number, number, number, number];
  /** Optional SVG figural data for TIU Kemampuan Figural */
  figuralVisual?: FiguralQuestionVisual;
  explanation: QuestionExplanation;
}

export interface StudySection {
  id: string;
  heading: string;
  summary: string;
  keyPoints: string[];
  comparisonRows?: {
    label: string;
    detail: string;
    example: string;
  }[];
  commonTrap: string;
  quickFormulaOrRule: string;
}

export interface InteractiveLabItem {
  prompt: string;
  hint: string;
  answer: string;
  reason: string;
}

export interface TopicContent {
  id: string;
  category: TestCategory;
  code: string;
  title: string;
  subtitle: string;
  kemenpanFocus: string;
  estimatedMinutes: number;
  labType: 'pasal-flip' | 'silogisme-logic' | 'deret-stepper' | 'figural-transform' | 'tkp-dilemma';
  labTitle: string;
  labItems: InteractiveLabItem[];
  sections: StudySection[];
  questions: Question[];
}

export interface AnsweredRecord {
  questionId: string;
  topicId: string;
  category: TestCategory;
  selectedIndex: number;
  earnedScore: number;
  maxScore: number;
  isOptimal: boolean;
  timestamp: number;
}

export interface TryoutAttempt {
  id: string;
  completedAt: number;
  durationSeconds: number;
  twkScore: number;
  tiuScore: number;
  tkpScore: number;
  totalScore: number;
  passedAll: boolean;
  twkCorrect: number;
  tiuCorrect: number;
  tkpRawScore: number;
}

export interface UserProgress {
  readTopics: string[];
  answeredQuestions: Record<string, AnsweredRecord>;
  tryoutHistory: TryoutAttempt[];
  studySeconds: number;
  streakDays: number;
  lastActiveDate: string;
}

export interface CategoryMeta {
  id: TestCategory;
  shortName: string;
  fullName: string;
  totalQuestionsInCAT: number;
  passingGrade: number;
  maxScore: number;
  scoringRule: string;
  officialGoal: string;
  accentBg: string;
  accentSoft: string;
  accentText: string;
  accentBorder: string;
  illustrationPath: string;
}
