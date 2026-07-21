"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Landing from "./Landing";
import StoryFlow from "./StoryFlow";
import JourneyMusic from "./JourneyMusic";

export default function JourneyContainer() {
  const [step, setStep] = useState<"landing" | "music_prompt" | "story">("landing");
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicVolume, setMusicVolume] = useState(50);

  const handleEnterJourney = useCallback(() => {
    setStep("music_prompt");
  }, []);

  const handleStartStory = useCallback(() => {
    setMusicStarted(true);
    setStep("story");
  }, []);

  return (
    <>
      <JourneyMusic shouldPlay={musicStarted} initialVolume={musicVolume / 100} />

      <AnimatePresence mode="wait">
        {step === "landing" && (
          <motion.div
            key="landing"
            exit={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Landing onEnterJourney={handleEnterJourney} />
          </motion.div>
        )}

        {step === "music_prompt" && (
          <motion.div
            key="music_prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="h-screen w-screen flex flex-col items-center justify-center bg-cream px-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 bg-tosca/5 p-8 rounded-3xl border border-tosca/10 max-w-md mx-auto shadow-sm"
            >
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl border border-charcoal/10 mx-auto">
                <img
                  src="/music/images/blue-the-narcissist.png"
                  alt="Blur - The Narcissist"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed font-medium text-center">
                For the best experience, please put your headphones on.<br/><br/>
                Instrumental music (The Narcissist by Blur) will play as you continue.
              </p>

              {/* Volume Slider */}
              <div className="w-full mt-2 flex flex-col items-center bg-white/50 p-4 rounded-2xl border border-charcoal/5">
                <p className="text-sm font-bold text-charcoal mb-3 text-center">How loud do you want the music?</p>
                <div className="flex items-center gap-3 w-full max-w-[220px]">
                  <svg className="w-4 h-4 text-charcoal/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={musicVolume}
                    onChange={(e) => setMusicVolume(parseInt(e.target.value))}
                    className="w-full accent-tosca cursor-pointer h-1.5 bg-charcoal/10 rounded-lg appearance-none"
                  />
                  <span className="text-sm font-bold text-tosca min-w-[36px] text-right">{musicVolume}%</span>
                </div>
              </div>
              <motion.button
                onClick={handleStartStory}
                className="mt-4 px-8 py-3 bg-tosca text-soft-white rounded-full font-semibold shadow-lg hover:bg-tosca-dark transition-colors flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue to Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {step === "story" && (
          <motion.div
            key="story"
            className="h-screen w-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <StoryFlow />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
