import { TWK_TOPICS } from './twkTopics';
import { TIU_TOPICS } from './tiuTopics';
import { TKP_TOPICS } from './tkpTopics';
import { Question, TestCategory, TopicContent } from '../types/skd';

export const ALL_TOPICS: TopicContent[] = [...TWK_TOPICS, ...TIU_TOPICS, ...TKP_TOPICS];

export const ALL_QUESTIONS: Question[] = ALL_TOPICS.flatMap((t) => t.questions);

export function getTopicById(topicId: string): TopicContent | undefined {
  return ALL_TOPICS.find((t) => t.id === topicId);
}

export function getTopicsByCategory(category: TestCategory): TopicContent[] {
  return ALL_TOPICS.filter((t) => t.category === category);
}

/**
 * Generates a balanced 15-question Mini Tryout SKD CAT (5 TWK + 5 TIU + 5 TKP)
 * picking deterministically or shuffled from all official subtopics.
 */
export function buildMiniTryoutQuestions(): Question[] {
  const twk = TWK_TOPICS.map((t) => t.questions[Math.floor(Math.random() * t.questions.length)]);
  const tiu = TIU_TOPICS.flatMap((t, idx) =>
    idx === 0 ? [t.questions[0], t.questions[1]] : [t.questions[Math.floor(Math.random() * t.questions.length)]]
  ).slice(0, 5);
  const tkp = TKP_TOPICS.slice(0, 5).map(
    (t) => t.questions[Math.floor(Math.random() * t.questions.length)]
  );
  return [...twk, ...tiu, ...tkp];
}
