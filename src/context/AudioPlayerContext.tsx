import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Release } from '../types';
import { releases } from '../data/config';

interface AudioPlayerContextType {
  currentTrack: Release | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number; // strictly capped at 60s
  volume: number;
  hasFinished: boolean;
  audioError: string | null;
  playTrack: (track: Release) => void;
  pauseTrack: () => void;
  resumeTrack: () => void;
  togglePlay: (track?: Release) => void;
  seek: (seconds: number) => void;
  setVolume: (vol: number) => void;
  closePlayer: () => void;
  loadCustomFile: (trackId: string, file: File) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Release | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(60);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [hasFinished, setHasFinished] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  // In-memory object URLs for loaded files
  const customUrlsRef = useRef<Record<string, string>>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      // Strict 60-second limit for preview
      if (time >= 60) {
        audio.pause();
        audio.currentTime = 60;
        setCurrentTime(60);
        setIsPlaying(false);
        setHasFinished(true);
        return;
      }
      setCurrentTime(time);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setHasFinished(true);
      setCurrentTime(60);
    };

    const handleError = () => {
      // Audio file not yet placed in /public/assets/music/
      setIsPlaying(false);
      setAudioError("Audio preview file awaiting upload to /public/assets/music/. Click 'Listen to Full Song' to hear the authentic track on YouTube.");
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setAudioError(null);
      setHasFinished(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const playTrack = (track: Release) => {
    if (!audioRef.current) return;
    setAudioError(null);
    setHasFinished(false);

    // If same track is paused, resume
    if (currentTrack?.id === track.id) {
      if (currentTime >= 60) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      }
      audioRef.current.play().catch(() => {
        setAudioError("Audio file pending. Listen to the authentic song directly on YouTube.");
      });
      return;
    }

    // Stop previous track completely
    audioRef.current.pause();
    setCurrentTrack(track);
    setCurrentTime(0);
    setDuration(60); // Preview is strictly 60s

    const source = customUrlsRef.current[track.id] || track.preview;
    audioRef.current.src = source;
    audioRef.current.currentTime = 0;

    audioRef.current.play().catch(() => {
      setAudioError("Audio file pending in /public/assets/music/. Click 'Listen to Full Song' for official YouTube track.");
    });
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resumeTrack = () => {
    if (audioRef.current) {
      if (currentTime >= 60) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
        setHasFinished(false);
      }
      audioRef.current.play().catch(() => {
        setAudioError("Unable to play audio. Check YouTube link for full track.");
      });
    }
  };

  const togglePlay = (track?: Release) => {
    const target = track || currentTrack;
    if (!target) {
      if (releases.length > 0) playTrack(releases[0]);
      return;
    }

    if (currentTrack?.id === target.id) {
      if (isPlaying) {
        pauseTrack();
      } else {
        resumeTrack();
      }
    } else {
      playTrack(target);
    }
  };

  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(seconds, 60));
    audioRef.current.currentTime = clamped;
    setCurrentTime(clamped);
    if (clamped < 60 && hasFinished) {
      setHasFinished(false);
    }
  };

  const setVolume = (vol: number) => {
    const clamped = Math.max(0, Math.min(vol, 1));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    setCurrentTime(0);
    setHasFinished(false);
    setAudioError(null);
  };

  const loadCustomFile = (trackId: string, file: File) => {
    const objectUrl = URL.createObjectURL(file);
    customUrlsRef.current[trackId] = objectUrl;
    const target = releases.find(r => r.id === trackId);
    if (target) {
      playTrack(target);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        hasFinished,
        audioError,
        playTrack,
        pauseTrack,
        resumeTrack,
        togglePlay,
        seek,
        setVolume,
        closePlayer,
        loadCustomFile
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
