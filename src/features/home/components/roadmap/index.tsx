import { Li } from "@/components/li";
import { Reveal } from "@/components/reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { roadmaps } from "../../constants";

export const Roadmap = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);
  const roadmap = roadmaps[activeRoadmapIndex];
  const ref = useRef<HTMLDivElement>(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="flex w-[95%] flex-col justify-center items-center relative my-[100px] lg:mb-[200px] ">
      <Reveal delay={0.25}>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl mt-5 font-bold uppercase mb-[40px] lg:mb-[80px]">
          Roadmap
        </h1>
      </Reveal>
      <div className="flex w-full justify-center items-center max-w-6xl mx-auto relative">
        <div className="flex items-center justify-between max-w-6xl w-[90%] flex-col lg:flex-row my-5 ">
          <div className="flex relative lg:my-0 lg:mx-5 w-full">
            <Reveal delay={0.5} width="100%">
              <div className="flex lg:items-center sm:p-5 sm:pb-8 p-8 lg:pb-10 flex-col bg-purple-tint w-full lg:w-[400px] h-full lg:h-fit z-20 rounded relative overflow-hidden border-2 border-purple-light">
                <h3 className="text-2xl lg:text-3xl mb-2.5 lg:mb-5 uppercase text-white">
                  {roadmap.title}
                </h3>
                <ul className="text-white sm:text-sm lg:text-lg z-10">
                  {roadmap.content.map((content, i) => (
                    <Li key={i} title={content} />
                  ))}
                </ul>
                <motion.button
                  initial="visible"
                  transition={{ duration: 0.5, delay: 1 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  onClick={() => {
                    if (activeRoadmapIndex === roadmaps.length - 1)
                      setActiveRoadmapIndex(0);
                    else setActiveRoadmapIndex(activeRoadmapIndex + 1);
                  }}
                  className="mt-6 mb-0 lg:mb-3 lg:mt-5 sm:text-base lg:text-lg text-white flex justify-center items-center bg-purple-light py-2 px-5 pl-2.5 border-purple-lighter border-2 rounded-full w-fit"
                >
                  <GrFormNextLink className="mr-1.5 text-2xl" />
                  Phase{" "}
                  {activeRoadmapIndex + 2 < 4 ? activeRoadmapIndex + 2 : 1}
                </motion.button>
                <motion.img
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex lg:hidden sm:opacity-100 opacity-40 h-[300px] pointer-events-none absolute right-0 -bottom-4"
                  height="500"
                  width="500"
                  src="/layers/top1.png"
                />
              </div>
            </Reveal>
          </div>
          <motion.img
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="visible"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:flex h-[600px] w-full pointer-events-none absolute -top-1/3"
            src="/layers/top1.png"
          />
        </div>
      </div>
    </section>
  );
};
