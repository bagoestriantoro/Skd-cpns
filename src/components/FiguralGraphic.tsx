import React from 'react';
import { FiguralGlyph, FiguralShapeType } from '../types/skd';

interface FiguralPanelProps {
  glyphs: FiguralGlyph[];
  size?: number;
  label?: string;
  isQuestionMark?: boolean;
}

function renderShapePath(shape: FiguralShapeType, r: number): React.ReactNode {
  switch (shape) {
    case 'triangle': {
      const pts = [
        `0,${-r}`,
        `${(r * 0.866).toFixed(1)},${(r * 0.5).toFixed(1)}`,
        `${(-r * 0.866).toFixed(1)},${(r * 0.5).toFixed(1)}`,
      ].join(' ');
      return <polygon points={pts} />;
    }
    case 'square': {
      const s = r * 0.78;
      return <rect x={-s} y={-s} width={s * 2} height={s * 2} rx={2} />;
    }
    case 'diamond': {
      const pts = `0,${-r} ${r * 0.82},0 0,${r} ${-r * 0.82},0`;
      return <polygon points={pts} />;
    }
    case 'pentagon': {
      const pts = Array.from({ length: 5 }, (_, i) => {
        const angle = (-90 + i * 72) * (Math.PI / 180);
        return `${(Math.cos(angle) * r).toFixed(1)},${(Math.sin(angle) * r).toFixed(1)}`;
      }).join(' ');
      return <polygon points={pts} />;
    }
    case 'hexagon': {
      const pts = Array.from({ length: 6 }, (_, i) => {
        const angle = (-90 + i * 60) * (Math.PI / 180);
        return `${(Math.cos(angle) * r).toFixed(1)},${(Math.sin(angle) * r).toFixed(1)}`;
      }).join(' ');
      return <polygon points={pts} />;
    }
    case 'circle':
      return <circle cx={0} cy={0} r={r * 0.85} />;
    case 'star': {
      const pts = Array.from({ length: 10 }, (_, i) => {
        const radius = i % 2 === 0 ? r : r * 0.44;
        const angle = (-90 + i * 36) * (Math.PI / 180);
        return `${(Math.cos(angle) * radius).toFixed(1)},${(Math.sin(angle) * radius).toFixed(1)}`;
      }).join(' ');
      return <polygon points={pts} />;
    }
    case 'arrow': {
      const pts = `0,${-r} ${r * 0.75},${-r * 0.1} ${r * 0.28},${-r * 0.1} ${r * 0.28},${r * 0.9} ${-r * 0.28},${r * 0.9} ${-r * 0.28},${-r * 0.1} ${-r * 0.75},${-r * 0.1}`;
      return <polygon points={pts} />;
    }
    case 'cross': {
      const a = r * 0.28;
      const b = r * 0.88;
      const pts = `${-a},${-b} ${a},${-b} ${a},${-a} ${b},${-a} ${b},${a} ${a},${a} ${a},${b} ${-a},${b} ${-a},${a} ${-b},${a} ${-b},${-a} ${-a},${-a}`;
      return <polygon points={pts} />;
    }
  }
}

export const FiguralPanel: React.FC<FiguralPanelProps> = ({
  glyphs,
  size = 86,
  label,
  isQuestionMark = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="bg-white border-2 border-slate-900 rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#0F172A]"
        style={{ width: size, height: size }}
      >
        {isQuestionMark ? (
          <span className="font-display text-3xl font-bold text-blue-600">?</span>
        ) : (
          <svg
            viewBox="-50 -50 100 100"
            className="w-full h-full p-1.5"
            aria-label={label || 'Panel figural'}
          >
            {glyphs.map((glyph, idx) => {
              const fillColor =
                glyph.fill === 'solid'
                  ? '#0F172A'
                  : glyph.fill === 'accent'
                  ? '#2563EB'
                  : '#FFFFFF';
              const strokeColor = '#0F172A';
              const rot = glyph.rotation ?? 0;
              const scale = glyph.scale ?? 1;
              const xOff = glyph.xOffset ?? 0;
              const yOff = glyph.yOffset ?? 0;

              const dotCount = glyph.dotCount ?? 0;

              return (
                <g
                  key={idx}
                  transform={`translate(${xOff}, ${yOff}) rotate(${rot}) scale(${scale})`}
                >
                  <g
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={3.2}
                    strokeLinejoin="round"
                  >
                    {renderShapePath(glyph.shape, 28)}
                  </g>

                  {glyph.innerShape && (
                    <g
                      fill={glyph.fill === 'solid' ? '#FFFFFF' : '#F59E0B'}
                      stroke={strokeColor}
                      strokeWidth={2.5}
                      strokeLinejoin="round"
                    >
                      {renderShapePath(glyph.innerShape, 12)}
                    </g>
                  )}

                  {dotCount > 0 && (
                    <g transform={`rotate(${-rot})`}>
                      {Array.from({ length: dotCount }, (_, dIdx) => {
                        const spacing = 11;
                        const startX = -((dotCount - 1) * spacing) / 2;
                        return (
                          <circle
                            key={dIdx}
                            cx={startX + dIdx * spacing}
                            cy={39}
                            r={3.5}
                            fill="#F59E0B"
                            stroke="#0F172A"
                            strokeWidth={1.6}
                          />
                        );
                      })}
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        )}
      </div>
      {label && (
        <span className="text-xs font-bold text-slate-700 font-mono-nums">{label}</span>
      )}
    </div>
  );
};
