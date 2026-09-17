import React, { useState } from 'react';
import { Play, Pause, X, Volume2, VolumeX, ExternalLink, ChevronUp, ChevronDown, Disc3 } from 'lucide-react';
import { useAudioPlayer } from '../context/AudioPlayerContext';

export const StickyPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    setVolume,
    closePlayer,
    hasFinished
  } = useAudioPlayer();

  const [minimized, setMinimized] = useState<boolean>(false);
  const [prevVolume, setPrevVolume] = useState<number>(0.85);

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = Math.floor(secs % 60);
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  const handleMuteToggle = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 0.85);
    }
  };

  return (
    <div
      id="sticky-mini-player"
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto"
      role="region"
      aria-label="Audio Preview Player"
    >
      {/* Minimized bar option */}
      {minimized ? (
        <div className="bg-[#0e0d14]/95 border-t border-purple-900/60 backdrop-blur-xl px-4 py-2 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => togglePlay()}
              className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            <span className="text-xs font-semibold text-white truncate max-w-[200px]">
              {currentTrack.title} — DJ TOTO TM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMinimized(false)}
              className="p-1.5 rounded text-zinc-400 hover:text-white"
              aria-label="Expand Player"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={closePlayer}
              className="p-1.5 rounded text-zinc-400 hover:text-white"
              aria-label="Close Player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#0d0c14]/95 border-t border-purple-800/40 backdrop-blur-xl shadow-2xl px-4 sm:px-6 py-3">
          {/* Top subtle progress scrubber for whole bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-zinc-800 cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = (e.clientX - rect.left) / rect.width;
              seek(pct * duration);
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 relative"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-md" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            {/* Track Info & Artwork */}
            <div className="flex items-center gap-3 w-full sm:w-auto min-w-[200px]">
              <div className="relative w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 overflow-hidden flex items-center justify-center shrink-0">
                {currentTrack.artwork ? (
                  <img src={currentTrack.artwork} alt={currentTrack.title} className="w-full h-full object-cover" />
                ) : (
                  <Disc3 className={`w-6 h-6 text-purple-400 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} />
                )}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-syne font-bold text-sm text-white truncate max-w-[180px] sm:max-w-[220px]">
                    {currentTrack.title}
                  </span>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-purple-950 border border-purple-800/60 text-purple-300 shrink-0">
                    60s Preview
                  </span>
                </div>
                <span className="text-xs text-zinc-400 truncate">
                  {currentTrack.artist}
                </span>
              </div>
            </div>

            {/* Playback Controls & Timers */}
            <div className="flex flex-col items-center gap-1 w-full sm:w-auto max-w-md flex-1 px-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => togglePlay()}
                  className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-900/40 transition-all focus:outline-none"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Time display & mini scrubber for mobile */}
              <div className="w-full flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <span>{formatTime(currentTime)}</span>
                <div
                  className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = (e.clientX - rect.left) / rect.width;
                    seek(pct * duration);
                  }}
                >
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Right Tools: Volume, YouTube Link, Minimize/Close */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {/* Listen to Full Song link */}
              <a
                href={currentTrack.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors"
              >
                <span>Full Song on YouTube</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              {/* Volume Slider */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                >
                  {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-zinc-800 accent-purple-500 rounded-full cursor-pointer"
                  aria-label="Audio Volume"
                />
              </div>

              {/* Minimize */}
              <button
                type="button"
                onClick={() => setMinimized(true)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Minimize player"
                aria-label="Minimize Player"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={closePlayer}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Close player"
                aria-label="Close Player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
