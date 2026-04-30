'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    let rafId: number;
    const animate = () => {
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`transition-all duration-150 ease-out ${
            isClicking
              ? 'h-2 w-2 bg-accent-pink'
              : isHovering
                ? 'h-8 w-8 border-2 border-accent-pink bg-accent-pink/10'
                : 'h-3 w-3 bg-foreground'
          }`}
          style={{ borderRadius: isHovering ? '0' : '50%' }}
        />
      </div>

      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`transition-all duration-300 ease-out ${
            isHovering
              ? 'h-16 w-16 border border-accent-pink/30'
              : 'h-10 w-10 border border-foreground/10'
          }`}
          style={{ borderRadius: '0' }}
        />
      </div>
    </>
  );
}
