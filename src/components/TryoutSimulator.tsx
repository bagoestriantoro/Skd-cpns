import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { buildMiniTryoutQuestions } from '../data/skdIndex';
import { CATEGORY_META } from '../data/skdMeta';
import { Question, TestCategory, TryoutAttempt } from '../types/skd';
import { FiguralPanel } from './FiguralGraphic';

const TRYOUT_DURATION_SECONDS = 15 * 60; // 15 menit untuk 15 soal mini CAT
const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

type TryoutPhase = 'intro' | 'running' | 'result';

export const TryoutSimulator: React.FC = () => {
  const { recordAnswer, recordTryoutAttempt } = useProgress();

  const [phase, setPhase] = useState<TryoutPhase>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(TRYOUT_DURATION_SECONDS);
  const [confirmFinish, setConfirmFinish] = useState(false);
  const [lastAttempt, setLastAttempt] = useState<TryoutAttempt | null>(null);
  const [reviewIdx, setReviewIdx] = useState<number | null>(0);

  const startTryout = () => {
    const qs = buildMiniTryoutQuestions();
    setQuestions(qs);
    setAnswers({});
    setCurrentIdx(0);
    setSecondsLeft(TRYOUT_DURATION_SECONDS);
    setConfirmFinish(false);
    setLastAttempt(null);
    setPhase('running');
  };

  const finishTryout = () => {
    let twkCorrect = 0;
    let tiuCorrect = 0;
    let tkpRaw = 0;

    questions.forEach((q) => {
      const selected = answers[q.id];
      if (typeof selected !== 'number') return;

      recordAnswer(q, selected);

      if (q.category === TestCategory.TWK && selected === q.correctIndex) {
        twkCorrect += 1;
      } else if (q.category === TestCategory.TIU && selected === q.correctIndex) {
        tiuCorrect += 1;
      } else if (q.category === TestCategory.TKP && q.optionScores) {
        tkpRaw += q.optionScores[selected] ?? 1;
      }
    });

    // Konversi proporsional dari Mini CAT (5 soal/subtes) ke skala CAT BKN resmi (30 TWK, 35 TIU, 45 TKP)
    const twkScore = Math.round((twkCorrect / 5) * CATEGORY_META[TestCategory.TWK].maxScore);
    const tiuScore = Math.round((tiuCorrect / 5) * CATEGORY_META[TestCategory.TIU].maxScore);
    const tkpScore = Math.round((tkpRaw / 25) * CATEGORY_META[TestCategory.TKP].maxScore);
    const totalScore = twkScore + tiuScore + tkpScore;

    const passedAll =
      twkScore >= CATEGORY_META[TestCategory.TWK].passingGrade &&
      tiuScore >= CATEGORY_META[TestCategory.TIU].passingGrade &&
      tkpScore >= CATEGORY_META[TestCategory.TKP].passingGrade;

    const attempt: TryoutAttempt = {
      id: `to-${Date.now()}`,
      completedAt: Date.now(),
      durationSeconds: TRYOUT_DURATION_SECONDS - secondsLeft,
      twkScore,
      tiuScore,
      tkpScore,
      totalScore,
      passedAll,
      twkCorrect,
      tiuCorrect,
      tkpRawScore: tkpRaw,
    };

    recordTryoutAttempt(attempt);
    setLastAttempt(attempt);
    setReviewIdx(0);
    setPhase('result');
  };

  useEffect(() => {
    if (phase !== 'running') return;
    if (secondsLeft <= 0) {
      finishTryout();
      return;
    }
    const t = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  const formatClock = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  if (phase === 'intro') {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="cartoon-card bg-white p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-bold text-blue-700">
              Simulasi CAT BKN · Evaluasi Ambang Batas KemenPAN-RB
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Tryout Mini SKD CPNS 2026
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Uji kecepatan dan ketepatan Anda mengerjakan soal gabungan TWK, TIU, dan TKP
              dalam satu sesi berbatas waktu ala CAT BKN. Hasil langsung dikonversi ke skala
              nilai ambang batas resmi dan tercatat di statistik real-time Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-rose-50 border-2 border-slate-900 rounded-2xl p-4 space-y-1">
              <p className="text-xs font-bold text-rose-700">TWK · 5 Soal</p>
              <p className="font-display text-xl font-bold text-slate-900 font-mono-nums">
                Ambang Batas 65
              </p>
              <p className="text-xs text-slate-600">Benar +5, Salah 0 (Skala 150)</p>
            </div>
            <div className="bg-blue-50 border-2 border-slate-900 rounded-2xl p-4 space-y-1">
              <p className="text-xs font-bold text-blue-700">TIU · 5 Soal</p>
              <p className="font-display text-xl font-bold text-slate-900 font-mono-nums">
                Ambang Batas 80
              </p>
              <p className="text-xs text-slate-600">Benar +5, Salah 0 (Skala 175)</p>
            </div>
            <div className="bg-emerald-50 border-2 border-slate-900 rounded-2xl p-4 space-y-1">
              <p className="text-xs font-bold text-emerald-700">TKP · 5 Soal</p>
              <p className="font-display text-xl font-bold text-slate-900 font-mono-nums">
                Ambang Batas 166
              </p>
              <p className="text-xs text-slate-600">Skala Poin 1–5 (Skala 225)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-slate-100">
            <div className="text-xs sm:text-sm font-semibold text-slate-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-900" />
              Durasi Simulasi: 15 Menit untuk 15 Soal Acak HOTS
            </div>
            <button
              type="button"
              onClick={startTryout}
              className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm sm:text-base px-6 py-3 rounded-2xl inline-flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4" />
              Mulai Tryout Sekarang
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (phase === 'running') {
    const q = questions[currentIdx];
    const answeredCount = Object.keys(answers).length;
    const catMeta = CATEGORY_META[q.category];

    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Top CAT Bar */}
        <div className="cartoon-card-sm bg-white p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-bold text-slate-900">
            <span className={catMeta.accentText}>{catMeta.shortName}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-nums">
              Soal {currentIdx + 1} / {questions.length}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-nums text-slate-600">
              Terjawab {answeredCount}/{questions.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`px-3.5 py-1.5 rounded-xl border-2 border-slate-900 font-mono-nums text-sm font-bold inline-flex items-center gap-2 ${
                secondsLeft <= 120 ? 'bg-rose-100 text-rose-900' : 'bg-amber-100 text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4" />
              {formatClock(secondsLeft)}
            </div>

            {!confirmFinish ? (
              <button
                type="button"
                onClick={() => setConfirmFinish(true)}
                className="cartoon-btn bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-4 py-1.5 rounded-xl cursor-pointer"
              >
                Selesai Ujian
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={finishTryout}
                  className="cartoon-btn bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer"
                >
                  Ya, Kumpulkan
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmFinish(false)}
                  className="cartoon-btn bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer"
                >
                  Batal
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question Stage */}
          <div className="lg:col-span-8 cartoon-card bg-white p-5 sm:p-7 space-y-6">
            <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
              {q.questionText}
            </p>

            {q.figuralVisual && (
              <div className="bg-[#F8FAFC] border-2 border-slate-900 rounded-2xl p-4 space-y-4">
                {q.figuralVisual.promptPanels.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3">
                    {q.figuralVisual.promptPanels.map((panel, pIdx) => (
                      <FiguralPanel
                        key={pIdx}
                        glyphs={panel}
                        size={74}
                        label={
                          q.figuralVisual?.mode === 'analogy'
                            ? ['A', 'B', 'C'][pIdx]
                            : `${pIdx + 1}`
                        }
                      />
                    ))}
                    <FiguralPanel glyphs={[]} size={74} isQuestionMark label="?" />
                  </div>
                )}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200">
                  {q.figuralVisual.optionPanels.map((panel, oIdx) => (
                    <FiguralPanel
                      key={oIdx}
                      glyphs={panel}
                      size={74}
                      label={`Opsi ${OPTION_LETTERS[oIdx]}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const selected = answers[q.id] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                    className={`w-full text-left p-4 rounded-2xl border-2 flex items-start gap-3.5 transition-all cursor-pointer ${
                      selected
                        ? 'bg-amber-100 border-slate-900 shadow-[3px_3px_0px_#0F172A]'
                        : 'bg-white hover:bg-slate-50 border-slate-300'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center font-mono-nums text-sm font-bold shrink-0 ${
                        selected
                          ? 'bg-amber-400 text-slate-900 border-slate-900'
                          : 'bg-slate-100 text-slate-700 border-slate-400'
                      }`}
                    >
                      {OPTION_LETTERS[idx]}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-900 pt-0.5 leading-relaxed">
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t-2 border-slate-100 flex items-center justify-between">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                className="cartoon-btn bg-white text-slate-900 text-sm font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>

              {currentIdx < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))}
                  className="cartoon-btn bg-amber-400 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Berikutnya
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={finishTryout}
                  className="cartoon-btn bg-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl cursor-pointer"
                >
                  Selesai & Hitung Skor
                </button>
              )}
            </div>
          </div>

          {/* Right CAT Number Grid */}
          <div className="lg:col-span-4 cartoon-card bg-white p-5 space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900">
              Navigasi Nomor CAT
            </h2>
            <div className="grid grid-cols-5 gap-2.5">
              {questions.map((item, idx) => {
                const isAnswered = typeof answers[item.id] === 'number';
                const isCurrent = idx === currentIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-10 rounded-xl border-2 font-mono-nums text-sm font-bold cursor-pointer transition-transform ${
                      isAnswered
                        ? 'bg-emerald-500 text-white border-slate-900'
                        : 'bg-white text-slate-800 border-slate-400'
                    } ${isCurrent ? 'ring-2 ring-amber-400 ring-offset-2 scale-105' : ''}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
              <p>Nomor 1–5: Tes Wawasan Kebangsaan (TWK)</p>
              <p>Nomor 6–10: Tes Intelegensia Umum (TIU)</p>
              <p>Nomor 11–15: Tes Karakteristik Pribadi (TKP)</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Result & Full Review Phase
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {lastAttempt && (
        <div className="cartoon-card bg-white p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-600">
                <Trophy className="w-4 h-4 text-amber-600" />
                Hasil Evaluasi Tryout Mini CAT (Konversi Skala 550 BKN)
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Total Proyeksi Skor: <span className="font-mono-nums">{lastAttempt.totalScore} / 550</span>
              </h1>
              <p className="text-sm font-semibold flex items-center gap-2">
                {lastAttempt.passedAll ? (
                  <span className="text-emerald-700 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Status: Memenuhi Seluruh Nilai Ambang Batas KemenPAN-RB!
                  </span>
                ) : (
                  <span className="text-rose-700 inline-flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    Status: Belum Memenuhi Seluruh Ambang Batas — Pelajari Pembahasan di Bawah
                  </span>
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={startTryout}
              className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Ulangi Tryout Baru
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(
              [
                {
                  cat: TestCategory.TWK,
                  score: lastAttempt.twkScore,
                  raw: `${lastAttempt.twkCorrect}/5 Benar`,
                },
                {
                  cat: TestCategory.TIU,
                  score: lastAttempt.tiuScore,
                  raw: `${lastAttempt.tiuCorrect}/5 Benar`,
                },
                {
                  cat: TestCategory.TKP,
                  score: lastAttempt.tkpScore,
                  raw: `${lastAttempt.tkpRawScore}/25 Poin Mentah`,
                },
              ] as const
            ).map((item) => {
              const meta = CATEGORY_META[item.cat];
              const passed = item.score >= meta.passingGrade;
              return (
                <div
                  key={item.cat}
                  className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className={meta.accentText}>{meta.shortName}</span>
                    <span className={passed ? 'text-emerald-700' : 'text-rose-700'}>
                      {passed ? 'Lulus PG' : 'Di Bawah PG'}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-bold text-slate-900 font-mono-nums">
                    {item.score}{' '}
                    <span className="text-sm font-normal text-slate-500">
                      / {meta.maxScore} (PG {meta.passingGrade})
                    </span>
                  </p>
                  <p className="text-xs text-slate-600 font-mono-nums">{item.raw}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Detailed Question-by-Question Review */}
      <div className="cartoon-card bg-white p-6 sm:p-8 space-y-5">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Pembahasan Lengkap Semua Soal Tryout
        </h2>

        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const selected = answers[q.id];
            const isOptimal =
              q.category === TestCategory.TKP
                ? selected === q.correctIndex
                : selected === q.correctIndex;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setReviewIdx(idx)}
                className={`w-10 h-10 rounded-xl border-2 font-mono-nums text-sm font-bold cursor-pointer ${
                  isOptimal
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-700'
                    : 'bg-rose-100 text-rose-900 border-rose-700'
                } ${reviewIdx === idx ? 'ring-2 ring-slate-900 ring-offset-2' : ''}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {reviewIdx !== null && questions[reviewIdx] && (
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-600">
              <span>
                Soal {reviewIdx + 1} · {questions[reviewIdx].category}
              </span>
              <span className="font-mono-nums">
                Jawaban Anda:{' '}
                {typeof answers[questions[reviewIdx].id] === 'number'
                  ? OPTION_LETTERS[answers[questions[reviewIdx].id]]
                  : 'Kosong'}{' '}
                · Jawaban Terbaik: {OPTION_LETTERS[questions[reviewIdx].correctIndex]}
              </span>
            </div>

            <p className="text-base font-semibold text-slate-900 leading-relaxed">
              {questions[reviewIdx].questionText}
            </p>

            <div className="space-y-2">
              {questions[reviewIdx].options.map((opt, oIdx) => {
                const isUserChoice = answers[questions[reviewIdx].id] === oIdx;
                const isBest = questions[reviewIdx].correctIndex === oIdx;
                const tkpPts = questions[reviewIdx].optionScores?.[oIdx];

                return (
                  <div
                    key={oIdx}
                    className={`p-3 rounded-xl border text-sm flex items-start justify-between gap-3 ${
                      isBest
                        ? 'bg-emerald-50 border-emerald-700 font-semibold text-slate-900'
                        : isUserChoice
                        ? 'bg-rose-50 border-rose-600 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>
                      <strong className="font-mono-nums mr-2">{OPTION_LETTERS[oIdx]}.</strong>
                      {opt}
                    </span>
                    <span className="shrink-0 text-xs font-bold font-mono-nums">
                      {questions[reviewIdx].category === TestCategory.TKP && tkpPts ? (
                        `${tkpPts} Poin`
                      ) : isBest ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isUserChoice ? (
                        <XCircle className="w-4 h-4 text-rose-600" />
                      ) : null}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-4 space-y-2">
              <p className="text-sm font-bold text-emerald-800">
                {questions[reviewIdx].explanation.correctSummary}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {questions[reviewIdx].explanation.deepAnalysis}
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-700 pt-1">
                {questions[reviewIdx].explanation.distractorAnalysis.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
