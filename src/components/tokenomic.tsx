import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "./button";

interface TokenomicProps {
  title: string;
  value: string;
  config?: [number, number];
}

export const Tokenomic = ({
  title,
  value,
  config = [0.25, 0.35],
}: TokenomicProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="flex flex-col items-center mx-5">
      {/* <Reveal delay={config[0]}> */}
      <Button title={title} />
      {/* </Reveal> */}
      <motion.h4
        // variants={{
        //   hidden: { opacity: 0, y: 10 },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // animation={mainControls}
        // transition={{ duration: 0.3, delay: config[1] }}
        className="mt-2.5 sm:mt-3.5 lg:mt-5 text-2xl sm:text-3xl lg:text-5xl text-cream"
      >
        {value}
      </motion.h4>
    </div>
  );
};
