import { Reveal } from "@/components/reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { tokenomics } from "../../constants";

export const SupplyBreakdown = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="flex flex-col items-center relative w-full mb-[50px] lg:mb-[100px]">
      <div className="flex justify-between items-center">
        <div className="triangle-left" />
        <div className="triangle-right" />
      </div>
      <div className="flex w-full bg-purple-tint">
        <div className="flex w-full justify-center">
          <div className="flex  justify-between items-center max-w-5xl w-full p-7 lg:p-[40px]">
            <div className="flex flex-col mr-[5%]">
              <Reveal delay={0.4}>
                <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold uppercase">
                  Supply Breakdown
                </h1>
              </Reveal>
              <Reveal delay={0.5}>
                <h2 className="text-lg sm:text-xl lg:text-3xl mt-0.5 sm:mt-1.5 lg:mt-2.5 font-bold uppercase">
                  Total Supply 10M
                </h2>
              </Reveal>
              <Reveal delay={0.6}>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  variants={{
                    hidden: {
                      width: "0%",
                    },
                    visible: {
                      width: "30%",
                    },
                  }}
                  className="h-0.5 lg:h-[5px] bg-purple-light my-3 lg:my-5 rounded-full"
                />
                <div />
                {tokenomics.map((item, i) => (
                  <div key={i} className="flex flex-col mt-2 lg:mt-4">
                    <div className="flex items-center mb-1">
                      <div
                        className={`h-[12px] w-[12px] lg:h-[15px] lg:w-[15px] ${item.bg} rounded rotate-45 mr-3`}
                      />
                      <h2 className="text-base lg:text-xl uppercase">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
            <motion.img
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="h-[200px] sm:h-[260px] lg:h-[320px] w-[200px] sm:w-[260px] lg:w-[320px]"
              height="500"
              width="500"
              src="/layers/tokenomic.png"
            />
          </div>
        </div>
      </div>
      <div className="triangle-down" />
    </section>
  );
};
