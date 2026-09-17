import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { artist, instagramPosts } from '../data/config';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] relative border-t border-zinc-900"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-800/50 text-pink-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Instagram className="w-4 h-4 text-pink-400" />
            Social Presence
          </div>

          <h2
            id="instagram-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            FOLLOW THE JOURNEY
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Stay connected with DJ TOTO TM on Instagram for behind-the-scenes updates, studio clips, and performance announcements.
          </p>

          <a
            id="instagram-follow-btn"
            href={artist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-sm font-bold tracking-wide transition-all shadow-xl shadow-pink-950/40 hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            FOLLOW @its_shashi_tm
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Visual Instagram Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl bg-[#121217] border border-zinc-800 overflow-hidden flex flex-col items-center justify-center text-center p-6 hover:border-pink-500/40 transition-all shadow-md hover:-translate-y-1"
            >
              {post.src ? (
                <img
                  src={post.src}
                  alt={`Instagram post by ${artist.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                /* Authentic Dignified Placeholder */
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-300">
                    @its_shashi_tm
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase mt-1">
                    Post 0{index + 1}
                  </span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                <Instagram className="w-6 h-6 text-pink-400" />
                <span className="text-xs font-semibold text-white">
                  View on Instagram
                </span>
                <span className="text-[10px] font-mono text-pink-300">
                  @its_shashi_tm →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
