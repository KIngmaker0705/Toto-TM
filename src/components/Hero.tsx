import React from 'react';
import { ArrowDown, Instagram, Youtube } from 'lucide-react';
import { artist } from '../data/config';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.78)), url("${import.meta.env.BASE_URL}assets/artist/hero-background.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base tracking-[0.35em] uppercase text-cyan-300 mb-5">
              DJ • MUSIC PRODUCER • REMIX ARTIST
            </p>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              DJ TOTO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                TM
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-white/70 leading-relaxed">
              Marathi DJ Remix Artist, Music Producer & Music and Audio Visual Creator.
            </p>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://www.youtube.com/@djtototm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DJ TOTO TM on YouTube"
                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:text-cyan-300 hover:border-cyan-300/50 transition-all"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.instagram.com/its_shashi_tm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DJ TOTO TM on Instagram"
                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:text-violet-300 hover:border-violet-300/50 transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Scroll indicator */}
            <a
              href="#music"
              className="inline-flex items-center gap-2 mt-12 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
            >
              Explore
              <ArrowDown size={15} className="animate-bounce" />
            </a>
          </div>

          {/* Artist image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-[70%] aspect-square rounded-full bg-violet-500/20 blur-[100px]" />

            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/40">
              <img
                src={artist.heroPhoto}
                alt="DJ TOTO TM"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
                  DJ TOTO TM
                </p>
                <p className="text-white text-lg font-semibold">
                  Music • Energy • Visuals
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero };
