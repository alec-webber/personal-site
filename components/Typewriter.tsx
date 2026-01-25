"use client";

import { useEffect, useState, useRef } from "react";

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = "...";
  const stateRef = useRef({ currentIndex: 0, isDeleting: false, pauseCount: 0 });

  useEffect(() => {
    const typeInterval = setInterval(() => {
      const state = stateRef.current;
      
      if (!state.isDeleting && state.currentIndex < text.length) {
        setDisplayText(text.slice(0, state.currentIndex + 1));
        state.currentIndex++;
      } else if (!state.isDeleting && state.currentIndex >= text.length) {
        // Pause before deleting
        state.pauseCount++;
        if (state.pauseCount >= 8) { // ~1.6 seconds pause
          state.isDeleting = true;
          state.pauseCount = 0;
        }
      } else if (state.isDeleting && state.currentIndex > 0) {
        state.currentIndex--;
        setDisplayText(text.slice(0, state.currentIndex));
      } else if (state.isDeleting && state.currentIndex === 0) {
        state.isDeleting = false;
        setDisplayText("");
        // Small pause before restarting
        state.pauseCount = 2;
      }
    }, 200);

    return () => clearInterval(typeInterval);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-6xl font-mono inline-block text-gray-700 dark:text-gray-300" style={{ height: "1.2em", lineHeight: "1.2em" }}>
      {displayText}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}
