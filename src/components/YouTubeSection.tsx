import React, { useState } from 'react';
import { Youtube, ExternalLink, Play, Disc } from 'lucide-react';
import { artist, youtubeVideos } from '../data/config';

export const YouTubeSection: React.FC = () => {
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);

  return (
    <section
      id="youtube"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] relative border-t border-zinc-900"
      aria-labelledby="youtube-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Youtube className="w-4 h-4 text-red-500 fill-current" />
            Official Channel
          </div>

          <h2
            id="youtube-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            WATCH DJ TOTO TM
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Watch full official music releases, remixes, and audiovisual content on the official YouTube channel.
          </p>

          <a
            id="youtube-channel-link-btn"
            href={artist.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-red-900/30 hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4 fill-current" />
            Subscribe @djtototm
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.map((video) => {
            const isEmbedActive = activeEmbedId === video.id;

            return (
              <div
                key={video.id}
                className="flex flex-col rounded-2xl bg-[#121216] border border-zinc-800 overflow-hidden shadow-xl hover:border-zinc-700 transition-all group"
              >
                {/* Embed or Thumbnail Aspect Ratio Frame */}
                <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                  {isEmbedActive ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
                      title={`${video.title} Official Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    /* Lazy-load container with YouTube thumbnail and click-to-play */
                    <div className="relative w-full h-full flex items-center justify-center bg-zinc-900 group/thumb">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={`${video.title} Official Video Thumbnail`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback if network blocked
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />

                      {/* Play Button Trigger */}
                      <button
                        type="button"
                        onClick={() => setActiveEmbedId(video.id)}
                        className="absolute w-14 h-14 rounded-full bg-red-600/95 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-950/80 transform group-hover/thumb:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-red-400"
                        aria-label={`Play ${video.title} video`}
                      >
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </button>

                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-300">
                        YouTube HD
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-red-400 block mb-1">
                      Official YouTube Release
                    </span>
                    <h3 className="font-syne font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Artist: {artist.name}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveEmbedId(video.id)}
                      className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-red-500" />
                      {isEmbedActive ? 'Playing in Player' : 'Play Here'}
                    </button>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                    >
                      Watch on YouTube
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
