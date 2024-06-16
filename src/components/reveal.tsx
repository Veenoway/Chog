import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
  delay?: number;
  from?: number;
  to?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  className,
  delay = 0.25,
  from = 70,
  to = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      style={{ width, position: "relative", overflow: "hidden" }}
      className={className}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: from,
          },
          visible: {
            opacity: 1,
            y: to,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
