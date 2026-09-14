"use client";

import React, { useEffect } from "react";

export default function ZoomPreventer({ children }) {
  useEffect(() => {
    // 1. Block Mouse Wheel Zooming (Ctrl + Mouse Wheel / Trackpad pinch)
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // 2. Block Keyboard Zoom Shortcuts (Ctrl +, Ctrl -, Ctrl 0)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" ||
          e.key === "-" ||
          e.key === "=" ||
          e.key === "0" ||
          e.keyCode === 187 ||
          e.keyCode === 189 ||
          e.keyCode === 48)
      ) {
        e.preventDefault();
      }
    };

    // 3. Block Touchscreen Pinch-Zoom Gestures
    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <>{children}</>;
}
