import React from 'react';
import { Play, Instagram, Music, Disc3, ShieldCheck, ArrowRight } from 'lucide-react';
import { artist } from '../data/config';

interface HeroProps {
  onExploreMusic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMusic }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e0c18] via-[#09090b] to-[#09090b]"
      aria-label="Artist Hero Presentation"
    >
      {/* Official artist background image supplied by DJ TOTO TM */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(9,9,11,0.96) 0%, rgba(9,9,11,0.72) 42%, rgba(9,9,11,0.42) 72%, rgba(9,9,11,0.72) 100%), linear-gradient(180deg, rgba(9,9,11,0.25) 0%, rgba(9,9,11,0.55) 78%, #09090b 100%), url("/assets/artist/hero-background.jpg")'
        }}
        aria-hidden="true"
      />

      {/* Background Ambient Glow & Fine Grid (Purely CSS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-indigo-900/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full" />
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Authentic Official Artist Badge */}
          <div
            id="hero-official-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-inner"
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Official Artist Digital Home
          </div>

          {/* Dominant Visual Identity: DJ TOTO TM */}
          <h1
            id="hero-artist-name"
            className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-white mb-4 leading-[1.05]"
          >
            DJ TOTO TM
          </h1>

          {/* Primary Subheading: DJ • MUSIC PRODUCER */}
          <div
            id="hero-primary-role"
            className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 mb-4 tracking-wide"
          >
            {artist.title}
          </div>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg text-zinc-300 max-w-2xl mb-8 leading-relaxed font-normal"
          >
            {artist.supportingText}
          </p>

          {/* Animated Visual Equalizer Bars (Pure UI visual animation, zero Web Audio API sound generation) */}
          <div
            id="hero-visual-equalizer"
            className="flex items-end gap-1.5 h-9 mb-9 px-4 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm"
            aria-hidden="true"
          >
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live Frequency
            </span>
            <div className="w-1 bg-purple-500/80 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
            <div className="w-1 bg-purple-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-6" />
            <div className="w-1 bg-violet-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-4" />
            <div className="w-1 bg-cyan-400 rounded-full animate-[pulse_1.3s_ease-in-out_infinite] h-7" />
            <div className="w-1 bg-indigo-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-5" />
            <div className="w-1 bg-purple-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-8" />
            <div className="w-1 bg-violet-300 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-4" />
            <div className="w-1 bg-cyan-300 rounded-full animate-[pulse_1.0s_ease-in-out_infinite] h-6" />
          </div>

          {/* Buttons: LISTEN TO MY MUSIC & FOLLOW ON INSTAGRAM */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="hero-listen-music-button"
              type="button"
              onClick={onExploreMusic}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-xl shadow-purple-900/30 hover:shadow-purple-700/40 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <Play className="w-5 h-5 fill-current" />
              Listen to My Music
            </button>

            <a
              id="hero-instagram-button"
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold tracking-wide bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 hover:border-zinc-600 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              Follow on Instagram
            </a>
          </div>

          {/* Quick roles pills */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2">
            {artist.roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-md text-xs font-medium bg-zinc-900/80 border border-zinc-800 text-zinc-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Authentic Artist Photo Frame / Sophisticated Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            id="hero-photo-container"
            className="relative w-full max-w-md aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-purple-500/30 via-zinc-800/50 to-zinc-900/80 shadow-2xl shadow-purple-950/40 group"
          >
            <div className="w-full h-full rounded-[14px] bg-[#121216] border border-zinc-800/80 overflow-hidden relative flex flex-col items-center justify-center p-8 text-center">
              {artist.heroPhoto ? (
                <img
                  src={artist.heroPhoto}
                  alt="DJ TOTO TM Official Artist Portrait"
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Intentional, dignified dark placeholder adhering strictly to Section 8 & 29 placeholder policy */
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-inner relative group-hover:scale-105 transition-transform duration-300">
                    <Disc3 className="w-10 h-10 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-md pointer-events-none" />
                  </div>

                  <span className="font-syne font-bold text-lg text-white tracking-widest uppercase mb-2">
                    DJ TOTO TM
                  </span>

                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 my-2" />

                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase max-w-[200px] leading-relaxed">
                    Official Artist Photo Coming Soon
                  </p>

                  <p className="text-[11px] text-zinc-500 mt-4 max-w-[220px]">
                    Authentic visual assets provided directly by DJ TOTO TM will appear here.
                  </p>
                </div>
              )}

              {/* Corner accent decors */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-purple-500/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-purple-500/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-purple-500/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-purple-500/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
