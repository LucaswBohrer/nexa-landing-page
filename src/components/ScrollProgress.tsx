import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.15 });
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (value) => setVisible(value > 0.015 && value < 0.985));
  return <motion.div className="pointer-events-none fixed left-0 top-0 z-[110] h-[2px] origin-left bg-white" style={{ scaleX: progress }} animate={{ opacity: visible ? 0.8 : 0 }} transition={{ duration: 0.2 }} />;
}