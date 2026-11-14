import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { Question, TestCategory } from '../types/skd';
import { FiguralPanel } from './FiguralGraphic';

interface InteractiveQuizProps {
  questions: Question[];
  topicTitle: string;
  onBackToMaterial: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  questions,
  topicTitle,
  onBackToMaterial,
}) => {
  const { progress, recordAnswer } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [retryingIds, setRetryingIds] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentIndex];
  const existingRecord = progress.answeredQuestions[currentQuestion.id];
  const isRetrying = Boolean(retryingIds[currentQuestion.id]);
  const activeRecord = isRetrying ? undefined : existingRecord;

  const handleSelectOption = (optionIdx: number) => {
    if (activeRecord) return;
    recordAnswer(currentQuestion, optionIdx);
    setRetryingIds((prev) => ({ ...prev, [currentQuestion.id]: false }));
  };

  const handleRetryQuestion = () => {
    setRetryingIds((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const answeredInTopic = questions.filter((q) => Boolean(progress.answeredQuestions[q.id])).length;
  const totalEarnedTopic = questions.reduce(
    (sum, q) => sum + (progress.answeredQuestions[q.id]?.earnedScore ?? 0),
    0
  );
  const maxPossibleTopic = questions.length * 5;

  const isTKP = currentQuestion.category === TestCategory.TKP;

  return (
    <div className="space-y-6">
      {/* Real-Time Topic Quiz Progress Strip */}
      <div className="cartoon-card-sm bg-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {questions.map((q, idx) => {
            const rec = progress.answeredQuestions[q.id];
            const isCurrent = idx === currentIndex;
            let btnClass = 'bg-slate-100 text-slate-700 border-slate-300';

            if (rec) {
              if (rec.isOptimal) {
                btnClass = 'bg-emerald-100 text-emerald-900 border-emerald-700';
              } else if (rec.earnedScore > 0) {
                btnClass = 'bg-amber-100 text-amber-900 border-amber-700';
              } else {
                btnClass = 'bg-rose-100 text-rose-900 border-rose-700';
              }
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`w-10 h-10 rounded-xl border-2 font-mono-nums text-sm font-bold transition-transform cursor-pointer ${btnClass} ${
                  isCurrent ? 'ring-2 ring-slate-900 ring-offset-2 scale-105' : ''
                }`}
                aria-label={`Soal nomor ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700">
          <span className="font-mono-nums">
            Terjawab: {answeredInTopic}/{questions.length}
          </span>
          <span aria-hidden="true" className="text-slate-300">|</span>
          <span className="font-mono-nums text-slate-900 font-bold">
            Skor Topik: {totalEarnedTopic}/{maxPossibleTopic}
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="cartoon-card bg-white p-5 sm:p-7 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-100 pb-4">
          <div className="text-xs font-bold text-slate-500">
            <span>{topicTitle}</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span className="font-mono-nums">
              Soal {currentIndex + 1} dari {questions.length}
            </span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>{isTKP ? 'Skala Poin 1–5' : 'Benar +5 / Salah 0'}</span>
          </div>

          {activeRecord && (
            <button
              type="button"
              onClick={handleRetryQuestion}
              className="text-xs font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Ulangi Soal Ini
            </button>
          )}
        </div>

        {/* Question Prompt */}
        <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
          {currentQuestion.questionText}
        </p>

        {/* Figural SVG Prompt Panels if applicable */}
        {currentQuestion.figuralVisual && (
          <div className="bg-[#F8FAFC] border-2 border-slate-900 rounded-2xl p-4 sm:p-5 space-y-4">
            {currentQuestion.figuralVisual.promptPanels.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-600">
                  {currentQuestion.figuralVisual.mode === 'analogy'
                    ? 'Pola Analogi (A : B :: C : ?)'
                    : 'Urutan Pola Serial (1 → 2 → 3 → 4 → ?)'}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {currentQuestion.figuralVisual.promptPanels.map((panel, pIdx) => (
                    <React.Fragment key={pIdx}>
                      <FiguralPanel
                        glyphs={panel}
                        label={
                          currentQuestion.figuralVisual?.mode === 'analogy'
                            ? ['A', 'B', 'C'][pIdx]
                            : `Langkah ${pIdx + 1}`
                        }
                      />
                      {currentQuestion.figuralVisual?.mode === 'analogy' && pIdx === 0 && (
                        <span className="font-display text-xl font-bold text-slate-700">:</span>
                      )}
                      {currentQuestion.figuralVisual?.mode === 'analogy' && pIdx === 1 && (
                        <span className="font-display text-xl font-bold text-slate-700">::</span>
                      )}
                      {currentQuestion.figuralVisual?.mode === 'analogy' && pIdx === 2 && (
                        <span className="font-display text-xl font-bold text-slate-700">:</span>
                      )}
                      {currentQuestion.figuralVisual?.mode === 'series' && (
                        <span className="font-display text-lg font-bold text-slate-500">→</span>
                      )}
                    </React.Fragment>
                  ))}
                  <FiguralPanel glyphs={[]} isQuestionMark label="?" />
                </div>
              </div>
            )}

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-600">Pilihan Gambar:</p>
              <div className="flex flex-wrap gap-3">
                {currentQuestion.figuralVisual.optionPanels.map((optGlyphs, oIdx) => (
                  <FiguralPanel
                    key={oIdx}
                    glyphs={optGlyphs}
                    label={`Opsi ${OPTION_LETTERS[oIdx]}`}
                    size={80}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((optText, idx) => {
            const isSelected = activeRecord?.selectedIndex === idx;
            const isCorrect = idx === currentQuestion.correctIndex;
            const tkpScore = currentQuestion.optionScores?.[idx];

            let optionStyle =
              'bg-white hover:bg-amber-50 border-slate-900 text-slate-900 shadow-[2px_2px_0px_#0F172A]';
            let badgeStyle = 'bg-slate-100 text-slate-900 border-slate-900';

            if (activeRecord) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-50 border-emerald-700 text-slate-900';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-900';
              } else if (isSelected && !isCorrect) {
                optionStyle = isTKP
                  ? 'bg-amber-50 border-amber-700 text-slate-900'
                  : 'bg-rose-50 border-rose-700 text-slate-900';
                badgeStyle = isTKP
                  ? 'bg-amber-400 text-slate-900 border-slate-900'
                  : 'bg-rose-600 text-white border-rose-900';
              } else {
                optionStyle = 'bg-slate-50/70 border-slate-300 text-slate-600';
                badgeStyle = 'bg-slate-100 text-slate-500 border-slate-300';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={Boolean(activeRecord)}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${optionStyle} ${
                  !activeRecord ? 'cursor-pointer active:translate-y-0.5' : 'cursor-default'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center font-mono-nums text-sm font-bold shrink-0 ${badgeStyle}`}
                >
                  {OPTION_LETTERS[idx]}
                </span>
                <span className="flex-1 text-sm sm:text-base font-medium leading-relaxed pt-0.5">
                  {optText}
                </span>

                {activeRecord && (
                  <span className="shrink-0 flex items-center gap-1.5 text-xs font-bold pt-1">
                    {isTKP && typeof tkpScore === 'number' ? (
                      <span
                        className={`font-mono-nums px-2 py-0.5 rounded-md border ${
                          tkpScore === 5
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-600'
                            : tkpScore >= 3
                            ? 'bg-amber-100 text-amber-900 border-amber-600'
                            : 'bg-slate-100 text-slate-700 border-slate-400'
                        }`}
                      >
                        {tkpScore} Poin
                      </span>
                    ) : isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        Benar (+5)
                      </span>
                    ) : isSelected ? (
                      <span className="inline-flex items-center gap-1 text-rose-700">
                        <XCircle className="w-4 h-4" />
                        Kurang Tepat
                      </span>
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Explanation Panel (appears immediately after answering) */}
        {activeRecord && (
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-5 space-y-4 shadow-[3px_3px_0px_#0F172A]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {activeRecord.isOptimal ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                )}
                <h4 className="font-display text-lg font-bold text-slate-900">
                  Pembahasan Mendalam
                </h4>
              </div>
              <span className="font-mono-nums text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-white">
                Diperoleh: +{activeRecord.earnedScore} / 5 Poin
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-emerald-800">
                {currentQuestion.explanation.correctSummary}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentQuestion.explanation.deepAnalysis}
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-4 space-y-2">
              <p className="text-xs font-bold text-slate-600">
                {isTKP ? 'Rincian Nilai Setiap Opsi (Skala 5–1):' : 'Analisis Opsi A–E:'}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {currentQuestion.explanation.distractorAnalysis.map((line, i) => (
                  <li key={i} className="leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border-2 border-slate-900 rounded-xl p-3.5 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                Trik Cepat: {currentQuestion.explanation.quickTip}
              </p>
            </div>
          </div>
        )}

        {/* Quiz Footer Navigation */}
        <div className="pt-3 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            className="cartoon-btn bg-white text-slate-900 text-sm font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Sebelumnya
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              Soal Berikutnya
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToMaterial}
              className="cartoon-btn bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl cursor-pointer"
            >
              Selesai & Kembali ke Materi
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
