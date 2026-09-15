"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleTextHover() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouse = { x: -9999, y: -9999, radius: 65 };

    const words = ["BRAND.", "CONTENT.", "ATTENTION."];

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width * dpr;
      const height = rect.height * dpr;

      canvas.width = width;
      canvas.height = height;

      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      const isMobile = rect.width < 640;

      let fontSize;
      if (isMobile) {
        // Mobile: column stacked format, font size target ~84px scaled nicely to mobile container width
        fontSize = Math.min(width / 4.4, 84 * dpr);
      } else {
        // Desktop / Web: horizontal single row
        fontSize = Math.min(width / 13.5, 84 * dpr);
      }

      ctx.font = `700 ${fontSize}px "Oswald", "Arial Black", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#A9918D";

      if (isMobile) {
        // Column layout for mobile
        const lineHeight = fontSize * 1.05;
        const totalHeight = lineHeight * words.length;
        const startY = (height - totalHeight) / 2 + lineHeight / 2;

        words.forEach((word, i) => {
          ctx.fillText(word, width / 2, startY + i * lineHeight);
        });
      } else {
        // Horizontal layout for desktop
        const fullText = words.join(" ");
        ctx.fillText(fullText, width / 2, height / 2);
      }

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      particles = [];

      const step = Math.max(1, Math.floor(1.6 * dpr));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 40) {
            particles.push({
              x: x,
              y: y,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: (isMobile ? 1.6 : 1.6) * dpr,
              color: "#A9918D",
              density: Math.random() * 25 + 8,
            });
          }
        }
      }

      ctx.clearRect(0, 0, width, height);
    };

    const handleResize = () => {
      initParticles();
    };

    if (document.fonts) {
      document.fonts.ready.then(initParticles);
    } else {
      initParticles();
    }

    const resizeObserver = new ResizeObserver(() => {
      initParticles();
    });
    resizeObserver.observe(canvas);

    window.addEventListener("resize", handleResize);

    const updatePointerPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      mouse.x = (clientX - rect.left) * dpr;
      mouse.y = (clientY - rect.top) * dpr;
    };

    const handleMouseMove = (e) => {
      updatePointerPos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchend", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const maxDistance = mouse.radius * dpr;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const forceDirectionX = dx / (distance || 1);
          const forceDirectionY = dy / (distance || 1);
          const force = (maxDistance - distance) / maxDistance;

          const directionX = forceDirectionX * force * p.density * 0.9;
          const directionY = forceDirectionY * force * p.density * 0.9;
          p.vx -= directionX;
          p.vy -= directionY;
        }

        // Return force to lock back to letter shape
        p.vx += (p.originX - p.x) * 0.08;
        p.vy += (p.originY - p.y) * 0.08;

        // Friction dampening
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (canvas) {
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("touchend", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] h-[340px] xs:h-[360px] sm:h-[120px] md:h-[130px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer z-20" />
    </div>
  );
}
