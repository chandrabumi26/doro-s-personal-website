"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Landing from "./Landing";
import StoryFlow from "./StoryFlow";
import JourneyMusic from "./JourneyMusic";

export default function JourneyContainer() {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleEnterJourney = useCallback(() => {
    setJourneyStarted(true);
    setTimeout(() => {
      setShowLanding(false);
    }, 600);
  }, []);

  return (
    <>
      <JourneyMusic shouldPlay={musicStarted} />

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            exit={{
              scale: 1.05,
              opacity: 0,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Landing onEnterJourney={handleEnterJourney} />
          </motion.div>
        ) : (
          <motion.div
            key="story"
            className="h-screen w-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <StoryFlow onMusicStart={() => setMusicStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
