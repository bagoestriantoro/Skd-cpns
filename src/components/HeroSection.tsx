import React, { useState } from 'react';
import { ArrowRight, BookOpenCheck, Flame, Target, Timer } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { HERO_MASCOT_PATH, SKD_EXAM_OVERVIEW } from '../data/skdMeta';

interface HeroSectionProps {
  onExploreMaterials: () => void;
  onStartTryout: () => void;
  onViewStats: () => void;
}

function formatStudyTime(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  if (mins >= 60) {
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}j ${remMins}m`;
  }
  return `${mins}m ${String(secs).padStart(2, '0')}d`;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMaterials,
  onStartTryout,
  onViewStats,
}) => {
  const {
    readTopicsCount,
    totalTopics,
    answeredCount,
    totalQuestions,
    overallAccuracyPct,
    projectedTotalSKD,
    progress,
  } = useProgress();

  const [imgError, setImgError] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 space-y-8">
      {/* 2-Column Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Core Proposition */}
        <div className="lg:col-span-7 cartoon-card bg-white p-6 sm:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm font-bold text-blue-700">
              SKD CPNS 2026 · Kisi-Kisi KemenPAN-RB Terbaru (TWK · TIU · TKP)
            </p>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 leading-[1.12] text-balance">
              Kuasai Semua Materi SKD CPNS 2026 dengan Cara Seru dan Terukur
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Pelajari 15 sub-materi resmi TWK, TIU, dan TKP secara lengkap dan mendalam.
              Setiap topik dilengkapi lab konsep interaktif, latihan soal HOTS beserta
              pembahasan rinci, dan pemantauan skor real-time terhadap passing grade BKN.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreMaterials}
                className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl inline-flex items-center gap-2 cursor-pointer"
              >
                Mulai Belajar Materi
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onStartTryout}
                className="cartoon-btn bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl cursor-pointer"
              >
                Coba Tryout Mini CAT
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
              <span>{SKD_EXAM_OVERVIEW.totalQuestions} Soal Standar CAT</span>
              <span aria-hidden="true">·</span>
              <span>Waktu Ujian {SKD_EXAM_OVERVIEW.totalMinutes} Menit</span>
              <span aria-hidden="true">·</span>
              <span>Ambang Batas TWK 65 / TIU 80 / TKP 166</span>
            </div>
          </div>
        </div>

        {/* Right Column: Cartoon Mascot Illustration */}
        <div className="lg:col-span-5 cartoon-card bg-amber-50 overflow-hidden flex flex-col">
          <div className="relative flex-1 min-h-[260px] bg-[#FFF8E7] flex items-center justify-center p-4">
            {!imgError ? (
              <img
                src={HERO_MASCOT_PATH}
                alt="Ilustrasi kartun pejuang CPNS sedang belajar materi SKD 2026"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full max-h-[340px] object-contain rounded-xl"
              />
            ) : (
              <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-amber-100 to-blue-50 rounded-xl">
                <BookOpenCheck className="w-12 h-12 text-slate-900" />
                <p className="font-display text-xl font-bold text-slate-900">
                  Fokus CPNS 2026
                </p>
                <p className="text-sm text-slate-600">
                  Pendamping Belajar SKD Lengkap: TWK, TIU & TKP
                </p>
              </div>
            )}
          </div>
          <div className="border-t-2 border-slate-900 bg-white px-5 py-3.5 flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-700">
              Sesi Belajar Aktif Hari Ini
            </span>
            <span className="font-mono-nums text-sm font-bold text-slate-900 inline-flex items-center gap-1.5">
              <Timer className="w-4 h-4 text-blue-600" />
              {formatStudyTime(progress.studySeconds)}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Real-Time Progress KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          type="button"
          onClick={onExploreMaterials}
          className="cartoon-card-sm bg-white p-4 sm:p-5 text-left hover:bg-amber-50/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
            <span>Materi Dipelajari</span>
            <BookOpenCheck className="w-4 h-4 text-blue-600" />
          </div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 font-mono-nums">
            {readTopicsCount} / {totalTopics}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Sub-materi kisi-kisi KemenPAN-RB
          </p>
        </button>

        <button
          type="button"
          onClick={onViewStats}
          className="cartoon-card-sm bg-white p-4 sm:p-5 text-left hover:bg-amber-50/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
            <span>Latihan Soal HOTS</span>
            <Target className="w-4 h-4 text-rose-600" />
          </div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 font-mono-nums">
            {answeredCount} / {totalQuestions}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Akurasi real-time: {answeredCount > 0 ? `${overallAccuracyPct}%` : '0%'}
          </p>
        </button>

        <button
          type="button"
          onClick={onViewStats}
          className="cartoon-card-sm bg-white p-4 sm:p-5 text-left hover:bg-amber-50/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
            <span>Proyeksi Skor CAT</span>
            <Flame className="w-4 h-4 text-amber-600" />
          </div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 font-mono-nums">
            {projectedTotalSKD} / 550
          </p>
          <p className="text-xs text-slate-600 mt-1">
            {answeredCount > 0
              ? 'Dihitung otomatis dari akurasi Anda'
              : 'Kerjakan soal untuk mulai proyeksi'}
          </p>
        </button>

        <button
          type="button"
          onClick={onViewStats}
          className="cartoon-card-sm bg-white p-4 sm:p-5 text-left hover:bg-amber-50/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
            <span>Konsistensi Belajar</span>
            <Timer className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 font-mono-nums">
            {progress.streakDays} Hari
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Total durasi: {formatStudyTime(progress.studySeconds)}
          </p>
        </button>
      </div>
    </section>
  );
};
