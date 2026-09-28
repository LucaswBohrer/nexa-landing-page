import { useEffect, useRef } from "react";

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let ringX = x, ringY = y, frame = 0;
    const move = (event: MouseEvent) => { x = event.clientX; y = event.clientY; };
    const animate = () => {
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, []);

  return <>
    <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-8 w-8 rounded-full border border-white/15 md:block" />
    <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)] md:block" />
  </>;
}