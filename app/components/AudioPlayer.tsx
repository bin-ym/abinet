"use client";

import { useState, useRef, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ForwardIcon,
  BackwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
  title = "Now Playing",
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
  onTimeUpdate,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const onTimeUpdateRef = useRef<AudioPlayerProps["onTimeUpdate"]>(onTimeUpdate);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    onTimeUpdateRef.current = onTimeUpdate;
  }, [onTimeUpdate]);

  /* -------------------- Load Audio When Src Changes -------------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    Promise.resolve().then(() => {
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    });

    audio.load();

    const handleLoaded = () => {
      if (!isNaN(audio.duration)) setDuration(audio.duration);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdateRef.current?.(audio.currentTime);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [src]);

  /* -------------------- Controls -------------------- */
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); } catch (err) { console.error(err); }
    } else {
      audio.pause();
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.min(Math.max(0, time), duration);
    audio.currentTime = clamped;
    setCurrentTime(clamped);
  };

  const seekRelative = (seconds: number) => {
    if (!audioRef.current) return;
    seek(audioRef.current.currentTime + seconds);
  };

  const handleVolume = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = value;
    audio.muted = value === 0;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !audio.muted;
    audio.muted = next;
    setIsMuted(next);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /* -------------------- UI -------------------- */
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl w-full max-w-lg mx-auto my-6">
      <h3 className="text-center text-blue-600 text-sm mb-4 truncate">
        {title}
      </h3>

      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Progress */}
      <div className="flex items-center gap-3 text-xs font-mono mb-4">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="flex-1"
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Volume */}
        <div className="flex items-center gap-2 w-24">
          <button onClick={toggleMute}>
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
            onChange={(e) => handleVolume(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Playback */}
        <div className="flex items-center gap-4">
          <button onClick={onPrev} disabled={!hasPrev}>
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          <button onClick={() => seekRelative(-5)}>
            <BackwardIcon className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full text-white"
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6 ml-0.5" />
            )}
          </button>

          <button onClick={() => seekRelative(5)}>
            <ForwardIcon className="w-5 h-5" />
          </button>

          <button onClick={onNext} disabled={!hasNext}>
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>

        <div className="w-24" />
      </div>
    </div>
  );
}