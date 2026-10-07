'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';
const SETTLE_PX = 0.05;
const OFFSCREEN = { x: -100, y: -100 };

function getMatcher() {
  return window.matchMedia(
    '(pointer: coarse), (prefers-reduced-motion: reduce)',
  );
}

function subscribe(cb: () => void) {
  const mql = getMatcher();
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
}

function getSnapshot() {
  return getMatcher().matches;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ ...OFFSCREEN });
  const trailPos = useRef({ ...OFFSCREEN });
  const rafId = useRef(0);
  const hovering = useRef(false);
  const started = useRef(false);

  const isTouchDevice = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const stopLoop = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = 0;
      }
    };

    const writePositions = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;

      const dx = pos.current.x - trailPos.current.x;
      const dy = pos.current.y - trailPos.current.y;

      if (Math.abs(dx) < SETTLE_PX && Math.abs(dy) < SETTLE_PX) {
        trailPos.current.x = pos.current.x;
        trailPos.current.y = pos.current.y;
        writePositions();
        rafId.current = 0;
        return;
      }

      writePositions();
      rafId.current = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!started.current) {
        started.current = true;
        trailPos.current = { x: e.clientX, y: e.clientY };
      }
      startLoop();
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      const match =
        target instanceof Element && !!target.closest(SELECTOR);
      if (match !== hovering.current) {
        hovering.current = match;
        setIsHovering(match);
      }
    };

    const handleLeaveWindow = () => {
      stopLoop();
      pos.current = { ...OFFSCREEN };
      trailPos.current = { ...OFFSCREEN };
      writePositions();
      if (hovering.current) {
        hovering.current = false;
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener(
      'mouseleave',
      handleLeaveWindow,
    );

    return () => {
      stopLoop();
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener(
        'mouseleave',
        handleLeaveWindow,
      );
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
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
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
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
