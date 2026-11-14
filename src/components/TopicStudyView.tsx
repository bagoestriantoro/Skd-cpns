import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Lightbulb,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CATEGORY_META } from '../data/skdMeta';
import { TopicContent } from '../types/skd';
import { InteractiveConceptLab } from './InteractiveConceptLab';
import { InteractiveQuiz } from './InteractiveQuiz';

interface TopicStudyViewProps {
  topic: TopicContent;
  onBack: () => void;
  onSelectNextTopic?: () => void;
}

export const TopicStudyView: React.FC<TopicStudyViewProps> = ({
  topic,
  onBack,
  onSelectNextTopic,
}) => {
  const { getTopicProgress, markTopicRead } = useProgress();
  const [activeTab, setActiveTab] = useState<'materi' | 'latihan'>('materi');

  const meta = CATEGORY_META[topic.category];
  const topicProg = getTopicProgress(topic.id);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="cartoon-btn bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold px-4 py-2 rounded-xl inline-flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Daftar Materi SKD
        </button>

        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-600">
          <span>{meta.fullName}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-nums">{topic.estimatedMinutes} menit belajar</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono-nums text-slate-900 font-bold">
            {topicProg.answeredCount}/{topicProg.totalQuestions} Soal Dikerjakan
          </span>
        </div>
      </div>

      {/* Topic Header Banner */}
      <div className="cartoon-card bg-white p-6 sm:p-8 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          <div className="space-y-2.5 max-w-3xl">
            <p className={`text-xs font-bold ${meta.accentText}`}>
              {topic.code} · Kisi-Kisi Resmi KemenPAN-RB 2026
            </p>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 text-balance">
              {topic.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {topic.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => markTopicRead(topic.id, !topicProg.isRead)}
              className={`cartoon-btn px-4 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 cursor-pointer ${
                topicProg.isRead
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white hover:bg-emerald-50 text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {topicProg.isRead ? 'Materi Selesai Dibaca' : 'Tandai Selesai Dibaca'}
            </button>
          </div>
        </div>

        {/* Official KemenPAN-RB Focus Callout */}
        <div className={`${meta.accentSoft} border-2 border-slate-900 rounded-xl p-4 flex items-start gap-3`}>
          <Compass className={`w-5 h-5 shrink-0 mt-0.5 ${meta.accentText}`} />
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-900">
              Kompetensi yang Diukur KemenPAN-RB:
            </p>
            <p className="text-sm text-slate-800 leading-relaxed">{topic.kemenpanFocus}</p>
          </div>
        </div>

        {/* Mode Switcher Tabs: Materi Lengkap vs Latihan Soal Interaktif */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-slate-100">
          <div className="inline-flex p-1 bg-slate-100 border-2 border-slate-900 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('materi')}
              className={`px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'materi'
                  ? 'bg-amber-400 text-slate-900 border-2 border-slate-900'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Penjelasan Materi & Lab
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('latihan')}
              className={`px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'latihan'
                  ? 'bg-amber-400 text-slate-900 border-2 border-slate-900'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <ClipboardCheck className="w-4 h-4" />
              Latihan Soal ({topic.questions.length} Soal)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Akurasi Topik:</span>
            <span className="font-mono-nums text-sm font-bold text-slate-900">
              {topicProg.answeredCount > 0 ? `${topicProg.accuracyPct}%` : 'Belum diuji'}
            </span>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'materi' ? (
        <div className="space-y-6">
          {/* Interactive Concept Sandbox */}
          <InteractiveConceptLab topic={topic} />

          {/* Structured Detailed Sections */}
          {topic.sections.map((section, sIdx) => (
            <article key={section.id} className="cartoon-card bg-white p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 font-mono-nums">
                  Bagian 0{sIdx + 1}
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {section.summary}
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold text-slate-900">Poin Utama Materi:</h3>
                <ul className="space-y-2.5">
                  {section.keyPoints.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-800 leading-relaxed"
                    >
                      <span className="w-6 h-6 rounded-lg bg-amber-300 border-2 border-slate-900 font-mono-nums text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional Comparison Table */}
              {section.comparisonRows && section.comparisonRows.length > 0 && (
                <div className="overflow-x-auto border-2 border-slate-900 rounded-xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b-2 border-slate-900 text-xs font-bold text-slate-900">
                        <th className="p-3.5">Konsep / Istilah</th>
                        <th className="p-3.5">Penjelasan Kisi-Kisi</th>
                        <th className="p-3.5">Contoh Penerapan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {section.comparisonRows.map((row, rIdx) => (
                        <tr key={rIdx} className="bg-white">
                          <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                            {row.label}
                          </td>
                          <td className="p-3.5 text-slate-700 leading-relaxed">{row.detail}</td>
                          <td className="p-3.5 text-slate-700 leading-relaxed">{row.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Quick Formula & Common Trap Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-amber-50 border-2 border-slate-900 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Lightbulb className="w-4 h-4" />
                    Rumus & Trik Cepat
                  </div>
                  <p className="text-sm font-medium text-slate-900 leading-relaxed">
                    {section.quickFormulaOrRule}
                  </p>
                </div>

                <div className="bg-rose-50 border-2 border-slate-900 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
                    <AlertTriangle className="w-4 h-4" />
                    Jebakan yang Harus Dihindari
                  </div>
                  <p className="text-sm font-medium text-slate-900 leading-relaxed">
                    {section.commonTrap}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* Bottom Action CTA into Quiz */}
          <div className="cartoon-card bg-amber-100 p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Siap Menguji Pemahaman {topic.title}?
              </h3>
              <p className="text-sm text-slate-700">
                Kerjakan {topic.questions.length} soal HOTS interaktif lengkap dengan pembahasan mendalam dan skor real-time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  markTopicRead(topic.id, true);
                  setActiveTab('latihan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <ClipboardCheck className="w-4 h-4" />
                Tandai Selesai & Mulai Latihan Soal
              </button>
              {onSelectNextTopic && (
                <button
                  type="button"
                  onClick={onSelectNextTopic}
                  className="cartoon-btn bg-white text-slate-900 font-bold text-sm px-4 py-3 rounded-xl cursor-pointer"
                >
                  Materi Berikutnya
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <InteractiveQuiz
          questions={topic.questions}
          topicTitle={`${topic.code}: ${topic.title}`}
          onBackToMaterial={() => setActiveTab('materi')}
        />
      )}
    </section>
  );
};
