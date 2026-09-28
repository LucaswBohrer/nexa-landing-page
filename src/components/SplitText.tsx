import { motion } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
}

export function SplitText({
  children,
  className = "",
}: SplitTextProps) {
  const words = children.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            initial={{
              y: "110%",
              opacity: 0,
              filter: "blur(8px)",
            }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}