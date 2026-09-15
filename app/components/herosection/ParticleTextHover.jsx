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
    let mouse = { x: -9999, y: -9999, radius: 55 };

    const words = ["BRAND.", "CONTENT.", "ATTENTION."];

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width * dpr;
      const height = rect.height * dpr;

      canvas.width = width;
      canvas.height = height;

      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      // Determine font size based on canvas width
      let fontSize = Math.min(width / 13.5, 84 * dpr);
      if (rect.width < 480) fontSize = Math.min(width / 11, 30 * dpr);
      else if (rect.width < 768) fontSize = Math.min(width / 12, 48 * dpr);

      ctx.font = `700 ${fontSize}px "Oswald", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const fullText = words.join(" ");
      ctx.fillStyle = "#A9918D";
      ctx.fillText(fullText, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      particles = [];

      const step = Math.max(2, Math.floor(2.5 * dpr));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 120) {
            particles.push({
              x: x,
              y: y,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: (rect.width < 640 ? 1.2 : 1.6) * dpr,
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

    initParticles();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = window.devicePixelRatio || 1;
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
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] h-[60px] sm:h-[100px] md:h-[130px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer z-20" />
    </div>
  );
}
