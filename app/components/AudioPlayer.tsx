"use client";

import { useState, useRef, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ForwardIcon,
  BackwardIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

interface AudioPlayerProps {
  src: string;
  title?: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  onTimeUpdate?: (time: number) => void;
}

export default function AudioPlayer({
  src,
  title,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  onTimeUpdate,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset state when src changes
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      if (onTimeUpdate) onTimeUpdate(audio.currentTime);
    };

    const updateDuration = () => {
      // Check if duration is available and valid
      if (
        audio.duration &&
        !isNaN(audio.duration) &&
        audio.duration !== Infinity
      ) {
        setDuration(audio.duration);
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    const onEnded = () => {
      setIsPlaying(false);
      if (hasNext && onNext) {
        onNext();
      }
    };

    // Events
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("canplay", updateDuration); // Add canplay for better duration check
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    // Initial check in case it's already loaded
    if (audio.readyState >= 1) {
      updateDuration();
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("canplay", updateDuration);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src, hasNext, onNext, onTimeUpdate]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    // Use the native paused state to decide
    if (audioRef.current.paused) {
      audioRef.current.play().catch((e) => console.error("Play error:", e));
    } else {
      audioRef.current.pause();
    }
  };

  const seekRelative = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      Math.max(0, audioRef.current.currentTime + seconds),
      duration,
    );
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      if (onTimeUpdate) onTimeUpdate(time);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    if (!audioRef.current) return;
    audioRef.current.volume = vol;
    setVolume(vol);
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";

    // For audio under 2 minutes, show decimal seconds
    if (duration > 0 && duration < 120) {
      const seconds = time.toFixed(1);
      return `${seconds}s`;
    }

    // For longer audio, show minutes:seconds
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white text-gray-900 rounded-xl p-4 shadow-xl border border-blue-200 w-full max-w-lg mx-auto my-6">
      {/* Title */}
      <h3 className="text-center text-blue-600 font-medium text-sm mb-4 truncate">
        {title || "Now Playing"}
      </h3>

      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Progress Bar & Time */}
      <div className="flex items-center gap-3 text-xs text-gray-600 font-mono mb-4">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-600 transition-all"
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Main Controls */}
      <div className="flex items-center justify-between">
        {/* Volume - Left */}
        <div className="flex items-center gap-2 w-24 group">
          <button
            onClick={toggleMute}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            {isMuted || volume === 0 ? (
              <SpeakerXMarkIcon className="w-5 h-5" />
            ) : (
              <SpeakerWaveIcon className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isMuted ? 0 : volume}
            onChange={handleVolume}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-400 group-hover:accent-blue-500 transition-all"
          />
        </div>

        {/* Playback Controls - Center */}
        <div className="flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`transition ${!hasPrev ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-blue-600"}`}
          >
            <ChevronDoubleLeftIcon className="w-6 h-6" />
          </button>

          {/* Rewind */}
          <button
            onClick={() => seekRelative(-5)}
            className="text-gray-600 hover:text-blue-600 transition active:scale-95"
          >
            <BackwardIcon className="w-5 h-5" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full text-white shadow-blue-500/20 shadow-lg hover:bg-blue-600 active:scale-95 transition-all transform hover:scale-105"
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6 ml-0.5" />
            )}
          </button>

          {/* Forward */}
          <button
            onClick={() => seekRelative(5)}
            className="text-gray-600 hover:text-blue-600 transition active:scale-95"
          >
            <ForwardIcon className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`transition ${!hasNext ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-blue-600"}`}
          >
            <ChevronDoubleRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Spacer - Right (for balance) */}
        <div className="w-24"></div>
      </div>
    </div>
  );
}
