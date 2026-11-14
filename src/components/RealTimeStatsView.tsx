import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  RotateCcw,
  Target,
  TrendingUp,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ALL_TOPICS } from '../data/skdIndex';
import { CATEGORY_META } from '../data/skdMeta';
import { TestCategory, TopicContent } from '../types/skd';

interface RealTimeStatsViewProps {
  onSelectTopic: (topic: TopicContent) => void;
}

function formatDuration(sec: number): string {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const rem = sec % 60;
  if (hrs > 0) return `${hrs} jam ${mins} menit ${rem} detik`;
  return `${mins} menit ${String(rem).padStart(2, '0')} detik`;
}

export const RealTimeStatsView: React.FC<RealTimeStatsViewProps> = ({ onSelectTopic }) => {
  const {
    progress,
    totalTopics,
    readTopicsCount,
    totalQuestions,
    answeredCount,
    overallMasteryPct,
    overallAccuracyPct,
    projectedTotalSKD,
    categoryStats,
    getTopicProgress,
    resetAllProgress,
  } = useProgress();

  const [confirmReset, setConfirmReset] = useState(false);

  const categories = [TestCategory.TWK, TestCategory.TIU, TestCategory.TKP];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Reset Control */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1.5">
          <p className="text-xs font-bold text-blue-700">
            Pembaruan Otomatis Setiap Detik · Tersimpan di Perangkat Anda
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Statistik Progress Belajar Real-Time
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Pantau penguasaan 15 materi SKD dan kesiapan proyeksi nilai terhadap ambang batas KemenPAN-RB.
          </p>
        </div>

        <div>
          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="cartoon-btn bg-white hover:bg-rose-50 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Progress
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-rose-50 border-2 border-slate-900 rounded-xl px-3 py-1.5">
              <span className="text-xs font-bold text-rose-900">Yakin hapus semua progress?</span>
              <button
                type="button"
                onClick={() => {
                  resetAllProgress();
                  setConfirmReset(false);
                }}
                className="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer"
              >
                Ya, Reset
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="bg-white border border-slate-300 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer"
              >
                Batal
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Top 4 Real-Time Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="cartoon-card bg-white p-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Penguasaan Kurikulum</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <p className="font-display text-3xl font-bold text-slate-900 font-mono-nums">
            {overallMasteryPct}%
          </p>
          <p className="text-xs text-slate-600 font-mono-nums">
            {readTopicsCount}/{totalTopics} Materi · {answeredCount}/{totalQuestions} Soal
          </p>
        </div>

        <div className="cartoon-card bg-white p-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Akurasi Jawaban</span>
            <Target className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="font-display text-3xl font-bold text-slate-900 font-mono-nums">
            {overallAccuracyPct}%
          </p>
          <p className="text-xs text-slate-600">
            Rata-rata ketepatan seluruh soal dikerjakan
          </p>
        </div>

        <div className="cartoon-card bg-white p-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Proyeksi Skor CAT Total</span>
            <Flame className="w-4 h-4 text-amber-600" />
          </div>
          <p className="font-display text-3xl font-bold text-slate-900 font-mono-nums">
            {projectedTotalSKD} / 550
          </p>
          <p className="text-xs text-slate-600">
            Minimal ambang batas gabungan: 311
          </p>
        </div>

        <div className="cartoon-card bg-white p-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Waktu Belajar Aktif</span>
            <Clock className="w-4 h-4 text-rose-600" />
          </div>
          <p className="font-display text-xl sm:text-2xl font-bold text-slate-900 font-mono-nums pt-1">
            {formatDuration(progress.studySeconds)}
          </p>
          <p className="text-xs text-slate-600">
            Berjalan real-time · Streak {progress.streakDays} hari
          </p>
        </div>
      </div>

      {/* Category Passing Grade Readiness Bars */}
      <div className="cartoon-card bg-white p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Kesiapan Ambang Batas KemenPAN-RB per Subtes
          </h2>
          <p className="text-sm text-slate-600">
            Garis putus-putus menandakan Nilai Ambang Batas (Passing Grade) resmi SKD CPNS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            const stat = categoryStats[cat];
            const scorePct = Math.round((stat.projectedCATScore / meta.maxScore) * 100);
            const pgPct = Math.round((meta.passingGrade / meta.maxScore) * 100);

            return (
              <div
                key={cat}
                className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-5 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${meta.accentText}`}>{meta.shortName}</span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold ${
                      stat.meetsPassingGrade ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    {stat.meetsPassingGrade ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Memenuhi Batas
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4" />
                        Perlu Latihan
                      </>
                    )}
                  </span>
                </div>

                <div>
                  <p className="font-display text-3xl font-bold text-slate-900 font-mono-nums">
                    {stat.projectedCATScore}{' '}
                    <span className="text-sm font-normal text-slate-500">/ {meta.maxScore}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-mono-nums mt-0.5">
                    Ambang Batas Resmi: {meta.passingGrade} · Akurasi {stat.accuracyPct}%
                  </p>
                </div>

                {/* Progress Bar with Passing Grade Marker */}
                <div className="relative h-5 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${meta.accentBg}`}
                    style={{ width: `${scorePct}%` }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-[3px] bg-slate-900"
                    style={{ left: `${pgPct}%` }}
                    title={`Passing Grade ${meta.passingGrade}`}
                  />
                </div>

                <div className="flex justify-between text-xs font-semibold text-slate-600 font-mono-nums">
                  <span>Materi: {stat.topicsRead}/{stat.topicsTotal}</span>
                  <span>Soal: {stat.questionsAnswered}/{stat.questionsTotal}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed 15 Subtopic Progress Table */}
      <div className="cartoon-card bg-white p-6 sm:p-8 space-y-5">
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Rincian Penguasaan 15 Sub-Materi SKD
          </h2>
          <p className="text-sm text-slate-600">
            Klik modul mana saja untuk memperdalam materi atau mengulang latihan soal.
          </p>
        </div>

        <div className="overflow-x-auto border-2 border-slate-900 rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-900 text-xs font-bold text-slate-900">
                <th className="p-3.5">Sub-Materi</th>
                <th className="p-3.5">Status Baca</th>
                <th className="p-3.5">Soal Selesai</th>
                <th className="p-3.5">Akurasi</th>
                <th className="p-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {ALL_TOPICS.map((topic) => {
                const tp = getTopicProgress(topic.id);
                const meta = CATEGORY_META[topic.category];
                return (
                  <tr key={topic.id} className="bg-white hover:bg-amber-50/40">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900">{topic.title}</div>
                      <div className={`text-xs font-semibold ${meta.accentText}`}>
                        {topic.code} · {meta.shortName}
                      </div>
                    </td>
                    <td className="p-3.5">
                      {tp.isRead ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4" />
                          Selesai
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500">Belum Dibaca</span>
                      )}
                    </td>
                    <td className="p-3.5 font-mono-nums text-slate-800 font-semibold">
                      {tp.answeredCount} / {tp.totalQuestions}
                    </td>
                    <td className="p-3.5 font-mono-nums font-bold text-slate-900">
                      {tp.answeredCount > 0 ? `${tp.accuracyPct}%` : '—'}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => onSelectTopic(topic)}
                        className="cartoon-btn bg-amber-300 hover:bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
                      >
                        Buka
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tryout History */}
      <div className="cartoon-card bg-white p-6 sm:p-8 space-y-4">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Riwayat Tryout Mini CAT
        </h2>
        {progress.tryoutHistory.length === 0 ? (
          <p className="text-sm text-slate-600">
            Belum ada riwayat Tryout Mini. Kerjakan menu Tryout Mini untuk melihat grafik riwayat nilai CAT Anda di sini.
          </p>
        ) : (
          <div className="overflow-x-auto border-2 border-slate-900 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-900 text-xs font-bold text-slate-900">
                  <th className="p-3.5">Tanggal</th>
                  <th className="p-3.5">TWK (PG 65)</th>
                  <th className="p-3.5">TIU (PG 80)</th>
                  <th className="p-3.5">TKP (PG 166)</th>
                  <th className="p-3.5">Total / 550</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-mono-nums">
                {progress.tryoutHistory.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td className="p-3.5 font-sans text-slate-700">
                      {new Date(item.completedAt).toLocaleString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="p-3.5 font-bold text-slate-900">{item.twkScore}</td>
                    <td className="p-3.5 font-bold text-slate-900">{item.tiuScore}</td>
                    <td className="p-3.5 font-bold text-slate-900">{item.tkpScore}</td>
                    <td className="p-3.5 font-bold text-slate-900">{item.totalScore}</td>
                    <td className="p-3.5 font-sans">
                      {item.passedAll ? (
                        <span className="text-xs font-bold text-emerald-700">Memenuhi PG</span>
                      ) : (
                        <span className="text-xs font-bold text-rose-700">Belum Lulus PG</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
