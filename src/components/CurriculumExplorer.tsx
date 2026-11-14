import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Search } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ALL_TOPICS } from '../data/skdIndex';
import { CATEGORY_META } from '../data/skdMeta';
import { TestCategory, TopicContent } from '../types/skd';

interface CurriculumExplorerProps {
  onSelectTopic: (topic: TopicContent) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ onSelectTopic }) => {
  const { categoryStats, getTopicProgress } = useProgress();
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | TestCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_TOPICS.filter((topic) => {
      const matchesCat = selectedFilter === 'ALL' || topic.category === selectedFilter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.subtitle.toLowerCase().includes(q) ||
        topic.kemenpanFocus.toLowerCase().includes(q)
      );
    });
  }, [selectedFilter, searchQuery]);

  const categories = [TestCategory.TWK, TestCategory.TIU, TestCategory.TKP];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <p className="text-xs font-bold text-slate-500">
            Kurikulum Terstruktur · 15 Modul Resmi SKD 2026
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 text-balance">
            Pilih Subtes & Materi SKD KemenPAN-RB
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Setiap kartu menampilkan progress baca dan akurasi latihan Anda secara real-time.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi (mis. Pancasila, Deret)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-900 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* 3 Category Overview Cards with Generated Cartoon Illustrations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const meta = CATEGORY_META[cat];
          const stat = categoryStats[cat];
          const isSelected = selectedFilter === cat;
          const imgFailed = Boolean(brokenImages[cat]);

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(isSelected ? 'ALL' : cat)}
              className={`cartoon-card text-left overflow-hidden flex flex-col transition-transform cursor-pointer ${
                isSelected
                  ? 'ring-4 ring-amber-400 -translate-y-0.5'
                  : 'hover:-translate-y-0.5'
              }`}
            >
              <div className={`h-40 w-full border-b-2 border-slate-900 overflow-hidden ${meta.accentSoft}`}>
                {!imgFailed ? (
                  <img
                    src={meta.illustrationPath}
                    alt={`Ilustrasi kartun materi ${meta.fullName}`}
                    referrerPolicy="no-referrer"
                    onError={() => setBrokenImages((prev) => ({ ...prev, [cat]: true }))}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <BookOpen className={`w-10 h-10 ${meta.accentText}`} />
                    <span className="font-display text-lg font-bold text-slate-900 mt-1">
                      {meta.shortName}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-white">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className={meta.accentText}>
                      {meta.shortName} · {meta.totalQuestionsInCAT} Soal CAT
                    </span>
                    <span className="font-mono-nums">Ambang Batas {meta.passingGrade}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {meta.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {meta.officialGoal}
                  </p>
                </div>

                {/* Real-time Category Progress */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 font-mono-nums">
                    <span>
                      {stat.topicsRead}/{stat.topicsTotal} Materi · {stat.questionsAnswered}/{stat.questionsTotal} Soal
                    </span>
                    <span>{stat.accuracyPct}% Akurasi</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full border border-slate-900 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${meta.accentBg}`}
                      style={{
                        width: `${Math.round(
                          ((stat.topicsRead / Math.max(1, stat.topicsTotal)) * 0.5 +
                            (stat.questionsAnswered / Math.max(1, stat.questionsTotal)) * 0.5) *
                            100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Segmented Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className="inline-flex flex-wrap p-1 bg-slate-100 border-2 border-slate-900 rounded-xl gap-1"
          role="tablist"
          aria-label="Filter Kategori SKD"
        >
          {(
            [
              { id: 'ALL', label: `Semua Materi (${ALL_TOPICS.length})` },
              { id: TestCategory.TWK, label: 'TWK (5)' },
              { id: TestCategory.TIU, label: 'TIU (4)' },
              { id: TestCategory.TKP, label: 'TKP (6)' },
            ] as const
          ).map((tab) => {
            const active = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'bg-amber-400 text-slate-900 border-2 border-slate-900'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-semibold text-slate-500 font-mono-nums">
          Menampilkan {filteredTopics.length} modul pembelajaran
        </span>
      </div>

      {/* Topic Cards Grid */}
      {filteredTopics.length === 0 ? (
        <div className="cartoon-card bg-white p-10 text-center space-y-3">
          <p className="font-display text-xl font-bold text-slate-900">
            Materi tidak ditemukan
          </p>
          <p className="text-sm text-slate-600">
            Coba kata kunci lain atau ubah filter kategori ke Semua Materi.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('ALL');
            }}
            className="cartoon-btn bg-amber-400 text-slate-900 text-sm font-bold px-4 py-2 rounded-xl cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => {
            const meta = CATEGORY_META[topic.category];
            const tp = getTopicProgress(topic.id);
            const completionPct = Math.round(
              ((tp.isRead ? 0.5 : 0) +
                (tp.answeredCount / Math.max(1, tp.totalQuestions)) * 0.5) *
                100
            );

            return (
              <div
                key={topic.id}
                className="cartoon-card bg-white p-5 flex flex-col justify-between gap-4 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-2.5">
                  {/* Quiet inline metadata (Zero-Pill Rule) */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className={meta.accentText}>
                      {topic.code} · {topic.estimatedMinutes} mnt · {topic.questions.length} Soal
                    </span>
                    {tp.isRead && (
                      <span className="inline-flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Dibaca
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">
                    {topic.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {topic.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 font-mono-nums">
                      <span>Progress: {completionPct}%</span>
                      <span>
                        Latihan: {tp.answeredCount}/{tp.totalQuestions}
                        {tp.answeredCount > 0 ? ` (${tp.accuracyPct}%)` : ''}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full border border-slate-900 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${meta.accentBg}`}
                        style={{ width: `${completionPct}%` }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTopic(topic)}
                    className="cartoon-btn w-full bg-amber-300 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Pelajari & Latihan Soal
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
