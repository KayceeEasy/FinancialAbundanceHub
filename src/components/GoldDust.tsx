"use client";
import { useEffect, useRef } from 'react';

export default function GoldDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: { x: number; y: number; baseX: number; baseY: number; size: number; drift: number }[] = [];
    
    const init = () => {
      particles = [];
      for (let i = 0; i < 180; i++) { // Increased count for more density
        particles.push({ 
          x: Math.random() * canvas.width, 
          y: Math.random() * canvas.height, 
          baseX: Math.random() * canvas.width, 
          baseY: Math.random() * canvas.height, 
          size: Math.random() * 2.0 + 0.5, // Smaller size (0.5 to 2.0)
          drift: Math.random() * 0.3 + 0.1 
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Soft Gold Glow properties
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#FFD700";
      ctx.fillStyle = "rgba(255, 215, 0, 0.5)"; // Softer opacity
      
      particles.forEach(p => {
        p.y += p.drift;
        if (p.y > canvas.height) p.y = 0;

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          p.x -= dx * force * 0.15;
          p.y -= dy * force * 0.15;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}