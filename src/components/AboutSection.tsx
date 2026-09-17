import React from 'react';
import { Headphones, Radio, Flame, Video, CheckCircle2 } from 'lucide-react';
import { artist, artistWorkAreas } from '../data/config';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'dj': <Headphones className="w-6 h-6 text-purple-400" />,
    'music-producer': <Radio className="w-6 h-6 text-cyan-400" />,
    'marathi-remix': <Flame className="w-6 h-6 text-amber-400" />,
    'audio-visual': <Video className="w-6 h-6 text-violet-400" />
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] relative border-t border-zinc-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-400 mb-3 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40">
            Artist Profile
          </span>
          <h2
            id="about-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            ABOUT DJ TOTO TM
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Official artist profile encompassing live performance, original productions, Marathi DJ remixes, and synchronized audiovisual design.
          </p>
        </div>

        {/* 4 Core Work Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistWorkAreas.map((area) => (
            <div
              key={area.id}
              className="p-8 rounded-2xl bg-[#121216] border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[area.id]}
              </div>

              <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">
                {area.role}
              </span>

              <h3 className="font-syne font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                {area.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authentic Statement Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-syne font-bold text-lg text-white">
                Official Content Verification
              </h4>
              <p className="text-sm text-zinc-400 mt-1">
                All music, media, and contact details featured on this website are directly authorized by DJ TOTO TM.
              </p>
            </div>
          </div>

          <a
            href="#music"
            className="shrink-0 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold transition-colors border border-zinc-700"
          >
            Explore Releases →
          </a>
        </div>
      </div>
    </section>
  );
};
