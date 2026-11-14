import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type ActiveRoute = 'beranda' | 'materi' | 'tryout' | 'statistik';

interface HeaderProps {
  activeRoute: ActiveRoute;
  onNavigate: (route: ActiveRoute) => void;
  onQuickStart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  onNavigate,
  onQuickStart,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: ActiveRoute; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'materi', label: 'Materi SKD' },
    { id: 'tryout', label: 'Tryout Mini' },
    { id: 'statistik', label: 'Statistik' },
  ];

  const handleNav = (id: ActiveRoute) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-sm border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title, single text element */}
        <button
          type="button"
          onClick={() => handleNav('beranda')}
          className="font-display text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
        >
          Fokus CPNS
        </button>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-1 text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded ${
                  isActive
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-amber-400 rounded-full border border-slate-900"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onQuickStart}
            className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm px-4 py-2 rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
          >
            Mulai Belajar
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl border-2 border-slate-900 bg-white text-slate-900 cursor-pointer"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-slate-900 bg-white px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-100 text-slate-900 border-2 border-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
