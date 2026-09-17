import React from 'react';
import { Sliders, Layers, Cpu, Eye, Music2 } from 'lucide-react';
import { musicProductionPillars } from '../data/config';

export const MusicProductionSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'remix-prod': <Sliders className="w-6 h-6 text-purple-400" />,
    'marathi-music': <Music2 className="w-6 h-6 text-cyan-400" />,
    'beat-production': <Cpu className="w-6 h-6 text-violet-400" />,
    'audio-visuals': <Eye className="w-6 h-6 text-indigo-400" />
  };

  return (
    <section
      id="production"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c10] relative border-t border-zinc-900"
      aria-labelledby="production-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40">
            Creative Craft
          </span>
          <h2
            id="production-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            MUSIC PRODUCTION
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Core artistic specializations shaping DJ TOTO TM's sonic and audiovisual identity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicProductionPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-[#121217] border border-zinc-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[pillar.id]}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 font-bold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
