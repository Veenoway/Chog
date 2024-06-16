import { Tokenomic } from "@/components/tokenomic";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Tax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else mainControls.start("hidden");
  }, [isInView]);
  return (
    <section className="w-full flex flex-col items-center relative mb-[100px]">
      <div className="flex justify-between items-center" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="triangle-left"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="triangle-right"
        />
      </div>
      <div className="flex h-[140px] sm:h-[180px] lg:h-[250px] w-full bg-purple-tint ">
        <div className="flex glass-effect h-full w-full justify-center items-center">
          <Tokenomic title="Total Supply" value="10M" />
          <Tokenomic title="Buy Tax" value="5%" />
          <Tokenomic title="Sell Tax" value="6%" />
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="triangle-down"
      />
    </section>
  );
};
