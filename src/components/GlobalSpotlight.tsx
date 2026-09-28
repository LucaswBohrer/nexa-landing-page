import { useEffect, useRef } from "react";

export function GlobalSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    function handleMouseMove(event: MouseEvent) {
      const x = event.clientX;
      const y = event.clientY;

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const element = spotlightRef.current;

        if (!element) {
          return;
        }

        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.018) 25%, transparent 70%)",
      }}
    />
  );
}