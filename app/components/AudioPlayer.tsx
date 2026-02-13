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
}

export default function AudioPlayer({
  src,
  title,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
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

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      if (hasNext && onNext) {
        onNext(); // Auto-play next? Maybe. User didn't ask but it's nice.
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src, hasNext, onNext]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
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
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl p-4 shadow-xl border border-gray-800 w-full max-w-lg mx-auto my-6">
      {/* Title */}
      <h3 className="text-center text-amber-400 font-medium text-sm mb-4 truncate">
        {title || "Now Playing"}
      </h3>

      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Progress Bar & Time */}
      <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-4">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Main Controls */}
      <div className="flex items-center justify-between">
        {/* Volume - Left */}
        <div className="flex items-center gap-2 w-24 group">
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-white transition"
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
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-400 group-hover:accent-white transition-all"
          />
        </div>

        {/* Playback Controls - Center */}
        <div className="flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`transition ${!hasPrev ? "text-gray-700 cursor-not-allowed" : "text-gray-400 hover:text-white"}`}
          >
            <ChevronDoubleLeftIcon className="w-6 h-6" />
          </button>

          {/* Rewind */}
          <button
            onClick={() => seekRelative(-5)}
            className="text-gray-400 hover:text-white transition active:scale-95"
          >
            <BackwardIcon className="w-5 h-5" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-full text-gray-900 shadow-amber-500/20 shadow-lg hover:bg-amber-400 active:scale-95 transition-all transform hover:scale-105"
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
            className="text-gray-400 hover:text-white transition active:scale-95"
          >
            <ForwardIcon className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`transition ${!hasNext ? "text-gray-700 cursor-not-allowed" : "text-gray-400 hover:text-white"}`}
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
