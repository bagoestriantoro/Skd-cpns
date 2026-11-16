import React, { useState } from 'react';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { ActiveRoute, Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RealTimeStatsView } from './components/RealTimeStatsView';
import { TopicStudyView } from './components/TopicStudyView';
import { TryoutSimulator } from './components/TryoutSimulator';
import { ProgressProvider } from './context/ProgressContext';
import { ALL_TOPICS } from './data/skdIndex';
import { SKD_EXAM_OVERVIEW } from './data/skdMeta';
import { TopicContent } from './types/skd';

function FokusCpnsAppContent() {
  const [activeRoute, setActiveRoute] = useState<ActiveRoute>('beranda');
  const [selectedTopic, setSelectedTopic] = useState<TopicContent | null>(null);

  const handleNavigate = (route: ActiveRoute) => {
    setSelectedTopic(null);
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopic = (topic: TopicContent) => {
    setSelectedTopic(topic);
    setActiveRoute('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickStart = () => {
    handleSelectTopic(ALL_TOPICS[0]);
  };

  const handleSelectNextTopic = () => {
    if (!selectedTopic) return;
    const idx = ALL_TOPICS.findIndex((t) => t.id === selectedTopic.id);
    const next = ALL_TOPICS[(idx + 1) % ALL_TOPICS.length];
    handleSelectTopic(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-slate-900">
      <Header
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onQuickStart={handleQuickStart}
      />

      <main className="flex-1">
        {selectedTopic ? (
          <TopicStudyView
            topic={selectedTopic}
            onBack={() => {
              setSelectedTopic(null);
              setActiveRoute('materi');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectNextTopic={handleSelectNextTopic}
          />
        ) : activeRoute === 'beranda' ? (
          <>
            <HeroSection
              onExploreMaterials={() => handleNavigate('materi')}
              onStartTryout={() => handleNavigate('tryout')}
              onViewStats={() => handleNavigate('statistik')}
            />
            <CurriculumExplorer onSelectTopic={handleSelectTopic} />
          </>
        ) : activeRoute === 'materi' ? (
          <CurriculumExplorer onSelectTopic={handleSelectTopic} />
        ) : activeRoute === 'tryout' ? (
          <TryoutSimulator />
        ) : (
          <RealTimeStatsView onSelectTopic={handleSelectTopic} />
        )}
      </main>

      <footer className="border-t-2 border-slate-900 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="font-semibold text-slate-900">
            Fokus CPNS · Persiapan SKD CPNS 2026
          </div>
          <div className="text-center sm:text-right">
            Acuan Kurikulum: {SKD_EXAM_OVERVIEW.regulationReference}
          </div>
        </div>
      </footer>
    </div>
  );
}

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center p-6">
          <div className="cartoon-card bg-white p-8 max-w-md text-center space-y-4">
            <h1 className="font-display text-2xl font-bold text-slate-900">
              Terjadi Gangguan Tampilan
            </h1>
            <p className="text-sm text-slate-600">
              Silakan muat ulang halaman untuk melanjutkan belajar di Fokus CPNS.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="cartoon-btn bg-amber-400 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-xl cursor-pointer"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <AppErrorBoundary>
      <ProgressProvider>
        <FokusCpnsAppContent />
      </ProgressProvider>
    </AppErrorBoundary>
  );
}
