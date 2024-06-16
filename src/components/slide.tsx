import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type SlideProps = {
  children: ReactNode;
  className?: string;
  config?: {
    delay?: number;
    duration?: number;
    to?: number;
    from?: number;
  };
};

const defaultConfig = {
  delay: 0.2,
  duration: 0.3,
  from: -50,
  to: 0,
};

export const Slide = ({
  className,
  config = defaultConfig,
  children,
}: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: config.from || defaultConfig.from },
        visible: { opacity: 1, x: config.to || defaultConfig.to },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: config.duration || defaultConfig.duration,
        delay: config.delay || defaultConfig.delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
