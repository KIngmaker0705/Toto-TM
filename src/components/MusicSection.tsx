import React, { useRef } from 'react';
import { Play, Pause, ExternalLink, Disc3, Volume2, Upload, AlertCircle, Sparkles } from 'lucide-react';
import { releases } from '../data/config';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Release } from '../types';

export const MusicSection: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
    hasFinished,
    audioError,
    loadCustomFile
  } = useAudioPlayer();

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = Math.floor(secs % 60);
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  const handleFileChange = (trackId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadCustomFile(trackId, file);
    }
  };

  return (
    <section
      id="music"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090b] via-[#0f0d1a] to-[#09090b] relative border-t border-zinc-800"
      aria-labelledby="music-section-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-400 mb-3 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/50">
            Official Releases
          </span>
          <h2
            id="music-section-heading"
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight"
          >
            MUSIC
          </h2>
          <p className="mt-4 text-base sm:text-xl text-zinc-300 max-w-2xl font-medium">
            Listen to a preview. Discover the full track on YouTube.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Global Notice / Error State if file is pending */}
        {audioError && (
          <div
            id="music-audio-error-banner"
            className="mb-8 p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200 text-sm flex items-start gap-3 max-w-2xl mx-auto"
          >
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-amber-100">Audio Preview Notice</p>
              <p className="mt-0.5 text-xs text-amber-200/90 leading-relaxed">
                {audioError}
              </p>
            </div>
          </div>
        )}

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((track) => {
            const isThisTrack = currentTrack?.id === track.id;
            const isThisPlaying = isThisTrack && isPlaying;
            const trackProgress = isThisTrack ? (currentTime / duration) * 100 : 0;
            const trackFinished = isThisTrack && hasFinished;

            return (
              <div
                key={track.id}
                id={`track-card-${track.id}`}
                className={`flex flex-col rounded-2xl bg-[#121216] border transition-all duration-300 overflow-hidden group shadow-xl ${
                  isThisTrack
                    ? 'border-purple-500/80 ring-1 ring-purple-500/40 shadow-purple-950/50'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Artwork Area (Honoring Section 11 Placeholder Policy) */}
                <div className="relative aspect-square w-full bg-[#18181f] overflow-hidden flex items-center justify-center p-6 border-b border-zinc-800/80">
                  {track.artwork ? (
                    <img
                      src={track.artwork}
                      alt={`${track.title} cover artwork`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Dignified Dark Cover Art Placeholder */
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center p-6 relative">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center text-purple-400 mb-4 transition-transform duration-300 ${
                          isThisPlaying ? 'scale-110 text-cyan-400' : 'group-hover:scale-105'
                        }`}
                      >
                        <Disc3
                          className={`w-10 h-10 ${
                            isThisPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                          }`}
                        />
                      </div>

                      <span className="font-syne font-bold text-sm tracking-wider uppercase text-zinc-200">
                        {track.title}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mt-1">
                        OFFICIAL COVER ART COMING SOON
                      </span>

                      {/* Corner Accents */}
                      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-zinc-700/80 pointer-events-none" />
                      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-zinc-700/80 pointer-events-none" />
                      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-zinc-700/80 pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-zinc-700/80 pointer-events-none" />
                    </div>
                  )}

                  {/* 60-Second Preview Label Tag (Section 32) */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono font-semibold tracking-wider text-purple-300 uppercase">
                    SONIC PREVIEW — 01:00
                  </div>

                  {/* Play Overlay Button on Card Artwork */}
                  <button
                    id={`artwork-play-btn-${track.id}`}
                    type="button"
                    onClick={() => togglePlay(track)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center focus:opacity-100 focus:outline-none"
                    aria-label={isThisPlaying ? `Pause preview of ${track.title}` : `Play preview of ${track.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-xl shadow-purple-950/60 transform group-hover:scale-105 transition-transform">
                      {isThisPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Track Title */}
                    <h3
                      id={`track-title-${track.id}`}
                      className="font-syne font-bold text-2xl text-white tracking-wide group-hover:text-purple-300 transition-colors"
                    >
                      {track.title}
                    </h3>

                    {/* Artist Name */}
                    <p className="text-sm font-medium text-zinc-400 mt-0.5">
                      {track.artist}
                    </p>

                    {/* Animated Waveform Visualizer (Pure UI Animation) */}
                    <div
                      id={`track-waveform-${track.id}`}
                      className="my-4 h-8 flex items-center gap-1 px-3 rounded-lg bg-zinc-900/60 border border-zinc-800"
                      aria-hidden="true"
                    >
                      {[12, 24, 18, 28, 14, 22, 30, 16, 26, 12, 20, 28, 14, 24, 18, 10, 22, 16, 26, 14, 20, 28].map(
                        (h, idx) => (
                          <div
                            key={idx}
                            className={`flex-1 rounded-full transition-all duration-300 ${
                              isThisPlaying
                                ? 'bg-gradient-to-t from-purple-500 to-cyan-400'
                                : 'bg-zinc-700/60'
                            }`}
                            style={{
                              height: isThisPlaying
                                ? `${Math.max(6, (h * (idx % 3 === 0 ? 1.1 : 0.85)) % 32)}px`
                                : `${h * 0.45}px`,
                              animation: isThisPlaying
                                ? `pulse ${0.4 + (idx % 5) * 0.15}s ease-in-out infinite alternate`
                                : 'none'
                            }}
                          />
                        )
                      )}
                    </div>

                    {/* Preview Progress Bar */}
                    <div className="space-y-1.5 mb-5">
                      <div
                        className="relative h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden cursor-pointer"
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const clickX = e.clientX - rect.left;
                          const pct = clickX / rect.width;
                          if (isThisTrack) {
                            seek(pct * duration);
                          } else {
                            togglePlay(track);
                          }
                        }}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all"
                          style={{ width: `${trackProgress}%` }}
                        />
                      </div>

                      {/* Time Indicators */}
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>{isThisTrack ? formatTime(currentTime) : '00:00'}</span>
                        <span className="text-zinc-500">
                          {isThisTrack ? formatTime(duration) : '01:00'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Finished Banner */}
                  <div className="space-y-3 pt-2">
                    {/* Finished banner condition */}
                    {trackFinished && (
                      <div className="p-3 rounded-lg bg-purple-950/50 border border-purple-800/60 text-center animate-fade-in">
                        <p className="text-xs font-semibold text-purple-200 mb-1">
                          Preview finished (01:00)
                        </p>
                        <a
                          href={track.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 underline font-medium"
                        >
                          Listen to the full song on YouTube →
                        </a>
                      </div>
                    )}

                    {/* Play Preview Button */}
                    <button
                      id={`play-preview-btn-${track.id}`}
                      type="button"
                      onClick={() => togglePlay(track)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        isThisPlaying
                          ? 'bg-zinc-800 text-purple-300 border border-purple-500/50 hover:bg-zinc-700'
                          : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30'
                      }`}
                    >
                      {isThisPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          Pause Preview
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          Play Preview
                        </>
                      )}
                    </button>

                    {/* Section 5: LISTEN TO FULL SONG → (YouTube destination) */}
                    <a
                      id={`listen-full-song-btn-${track.id}`}
                      href={track.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 flex items-center justify-center gap-2 transition-all group/link"
                    >
                      <span>Listen to Full Song</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-transform" />
                    </a>

                    {/* In-Browser Preview File Helper (Artist convenience for previewing local file in this session) */}
                    <div className="pt-1 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>Source: Original Audio</span>
                      <label
                        className="cursor-pointer text-zinc-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                        title="Select local MP3 file to test preview in browser"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Load local file</span>
                        <input
                          type="file"
                          accept="audio/mp3,audio/*"
                          className="hidden"
                          ref={(el) => {
                            fileInputRefs.current[track.id] = el;
                          }}
                          onChange={(e) => handleFileChange(track.id, e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note for Authenticity */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <p className="text-xs text-zinc-400 leading-relaxed font-mono">
            <span className="text-purple-400 font-semibold">Artist Audio Standard:</span> Previews stream 60-second authentic segments of DJ TOTO TM's original music. Full songs stream officially on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
};
