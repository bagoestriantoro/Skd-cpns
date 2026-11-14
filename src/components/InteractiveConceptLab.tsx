import React, { useState } from 'react';
import { ChevronRight, Eye, RotateCw, RefreshCw, Sparkles } from 'lucide-react';
import { FiguralShapeType, TopicContent } from '../types/skd';
import { FiguralPanel } from './FiguralGraphic';

interface InteractiveConceptLabProps {
  topic: TopicContent;
}

export const InteractiveConceptLab: React.FC<InteractiveConceptLabProps> = ({ topic }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // State for Figural live geometry sandbox
  const [figShape, setFigShape] = useState<FiguralShapeType>('arrow');
  const [figRotation, setFigRotation] = useState(0);
  const [figFill, setFigFill] = useState<'outline' | 'solid' | 'accent'>('accent');
  const [figDots, setFigDots] = useState(1);

  const currentItem = topic.labItems[activeIdx];

  const handleNextItem = () => {
    setActiveIdx((prev) => (prev + 1) % topic.labItems.length);
    setRevealed(false);
  };

  return (
    <div className="cartoon-card bg-[#F8FAFC] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-bold text-slate-500">
            Lab Interaktif · {topic.code}
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
            {topic.labTitle}
          </h3>
        </div>
        <span className="text-xs font-mono-nums font-bold text-slate-600">
          Kasus {activeIdx + 1} / {topic.labItems.length}
        </span>
      </div>

      {/* Special Interactive SVG Transformer Stage for TIU Figural */}
      {topic.labType === 'figural-transform' && (
        <div className="mb-5 bg-white border-2 border-slate-900 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 items-center">
          <div className="flex flex-col items-center gap-2">
            <FiguralPanel
              size={110}
              glyphs={[
                {
                  shape: figShape,
                  rotation: figRotation,
                  fill: figFill,
                  dotCount: figDots,
                },
              ]}
              label={`Rotasi ${figRotation}° · ${figDots} Titik`}
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-800">
              Eksperimen Transformasi Geometri Figural:
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFigRotation((r) => (r + 90) % 360)}
                className="cartoon-btn bg-amber-300 text-slate-900 text-xs font-bold px-3 py-2 rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                Putar +90°
              </button>
              <button
                type="button"
                onClick={() =>
                  setFigShape((s) =>
                    s === 'arrow'
                      ? 'triangle'
                      : s === 'triangle'
                      ? 'pentagon'
                      : s === 'pentagon'
                      ? 'hexagon'
                      : 'arrow'
                  )
                }
                className="cartoon-btn bg-blue-100 text-slate-900 text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                Ganti Bangun ({figShape})
              </button>
              <button
                type="button"
                onClick={() =>
                  setFigFill((f) =>
                    f === 'accent' ? 'solid' : f === 'solid' ? 'outline' : 'accent'
                  )
                }
                className="cartoon-btn bg-emerald-100 text-slate-900 text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                Ubah Isi ({figFill})
              </button>
              <button
                type="button"
                onClick={() => setFigDots((d) => (d >= 5 ? 1 : d + 1))}
                className="cartoon-btn bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                +1 Titik ({figDots})
              </button>
              <button
                type="button"
                onClick={() => {
                  setFigShape('arrow');
                  setFigRotation(0);
                  setFigFill('accent');
                  setFigDots(1);
                }}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-2 inline-flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Prompt-Reveal Card */}
      <div className="bg-white border-2 border-slate-900 rounded-xl p-4 sm:p-5 space-y-3">
        <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
          {currentItem.prompt}
        </p>
        <p className="text-xs text-slate-600">
          Petunjuk berpikir: {currentItem.hint}
        </p>

        {revealed ? (
          <div className="mt-3 p-3.5 rounded-xl bg-amber-50 border-2 border-slate-900 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
              <Sparkles className="w-3.5 h-3.5" />
              Analisis Konsep
            </div>
            <p className="text-sm font-bold text-slate-900">{currentItem.answer}</p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentItem.reason}
            </p>
          </div>
        ) : null}

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setRevealed((prev) => !prev)}
            className="cartoon-btn bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl inline-flex items-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            {revealed ? 'Sembunyikan Analisis' : 'Lihat Kunci & Penjelasan'}
          </button>

          <button
            type="button"
            onClick={handleNextItem}
            className="cartoon-btn bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
          >
            Kasus Berikutnya
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
