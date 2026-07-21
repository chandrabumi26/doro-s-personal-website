"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface JourneyMusicProps {
  shouldPlay: boolean;
}

export default function JourneyMusic({ shouldPlay }: JourneyMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  // Initialize audio
  useEffect(() => {
    const audio = new Audio("/music/Blur-The-Narcissist-(Instrumental).mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audioRef.current = audio;

    audio.ontimeupdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Start playing when shouldPlay becomes true
  useEffect(() => {
    if (shouldPlay && !hasStartedRef.current && audioRef.current) {
      hasStartedRef.current = true;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Playback blocked:", e));
    }
  }, [shouldPlay]);

  // Volume sync
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio playback failed:", err);
    }
  }, [isPlaying]);

  if (!shouldPlay) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="bg-cream/90 backdrop-blur-xl border border-charcoal/10 rounded-2xl shadow-2xl overflow-hidden w-64">
          {/* Progress bar */}
          <div className="w-full h-0.5 bg-charcoal/5">
            <motion.div
              className="h-full bg-tosca"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="flex items-center gap-3 p-3">
            {/* Album Art */}
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-charcoal/10 flex-shrink-0">
              <Image
                src="/music/images/blue-the-narcissist.png"
                alt="Blur - The Narcissist"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-charcoal truncate">
                The Narcissist
              </p>
              <p className="text-[10px] text-charcoal/50 truncate">
                {isPlaying ? "Blur (Instrumental)" : "Paused"}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              {/* Volume */}
              <div
                className="relative flex items-center h-7 bg-charcoal/5 rounded-full px-1.5"
                onMouseEnter={() => setIsVolumeOpen(true)}
                onMouseLeave={() => setIsVolumeOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 text-charcoal/60 flex-shrink-0"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isVolumeOpen ? 48 : 0,
                    opacity: isVolumeOpen ? 1 : 0,
                    marginLeft: isVolumeOpen ? 4 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden flex items-center"
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-12 h-1 appearance-none bg-charcoal/20 rounded-full accent-tosca cursor-pointer"
                  />
                </motion.div>
              </div>

              {/* Play/Pause */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-tosca text-cream flex items-center justify-center shadow-md hover:bg-tosca-dark transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75.75V5.25Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
