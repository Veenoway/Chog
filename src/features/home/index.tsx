"use client";
import { Reveal } from "@/components/reveal";
import { Slide } from "@/components/slide";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { About } from "./components/about";
import { Roadmap } from "./components/roadmap";
import { SupplyBreakdown } from "./components/supply-breakdown";
import { Tax } from "./components/tax";
import { WhereToBuy } from "./components/where-to-buy";

export const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <main className="flex flex-col justify-center items-center  overflow-hidden">
      <section className="flex flex-col max-w-6xl w-[95%] py-[50px] mx-auto">
        <div className="flex w-full justify-center">
          <Reveal delay={0.1}>
            <img
              className="w-[300px] md:w-[400px] mb-[20px] sm:mb-[80px] -ml-2 lg:-ml-[35px]"
              height="500"
              width="500"
              src="/layers/title.PNG"
              alt="Chog title"
            />{" "}
          </Reveal>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full relatif">
          <motion.div
            ref={ref}
            className="flex flex-col max-w-[95%] sm:max-w-[60%]"
          >
            <Slide className=" hidden md:inline-flex items-center h-[40px] lg:h-[50px] w-[180px] lg:w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
              <h3 className="ml-3 text-xl lg:text-3xl text-nowrap uppercase text-cream">
                About $CHOG
              </h3>
            </Slide>
            <Slide config={{ delay: 0.3 }}>
              <h1 className="text-5xl md:text-6xl lg:text-8xl mt-2.5 lg:mt-5 font-bold text-center md:text-start hidden md:flex text-cream">
                CHOG ON BASE
              </h1>
            </Slide>
            <Slide config={{ delay: 0.4 }}>
              <h2 className="mt-2.5 lg:mt-5 text-4xl md:text-3xl lg:text-5xl uppercase font-normal text-center md:text-start">
                The jeet killer
              </h2>
            </Slide>
            <Slide config={{ delay: 0.5 }}>
              <p className="mt-2.5 hidden md:flex lg:mt-5 sm:text-base lg:text-xl max-w-[80%] text-center sm:text-start mx-auto sm:mx-0">
                Chog is a meme who emerged from Monad Network, after months of
                observing retail trying to get out of the rat race with
                grandma's Christmas check, he is coming on Base to blow
                everything up. Leave cats and dogs for jeets, and ape in $CHOG
                for them gucci sandals.
              </p>
            </Slide>
            <Slide config={{ delay: 0.6 }}>
              <button className="flex mb-10 md:mb-0 mt-5 lg:mt-8 justify-center items-center bg-purple-light py-1.5 md:py-2 px-3 md:px-5 border-purple-lighter border-2 rounded-full w-fit  mx-auto md:mx-0">
                <h4 className="sm:text-base lg:text-xl text-white">Buy now!</h4>
              </button>
            </Slide>
          </motion.div>
          <Reveal delay={0.7} from={0}>
            <img
              className="w-auto h-[350px] md:w-auto md:h-[400px] lg:w-[550px] lg:h-[550px]"
              height="550"
              width="550"
              src="/layers/chog-wealthy.png"
              alt="Chog father"
            />
          </Reveal>
        </div>
      </section>
      <Tax />
      <About />
      <WhereToBuy />
      <SupplyBreakdown />
      <Roadmap />

      <section className="w-full sm:w-screen h-fit relative max-h-[1000px] mt-5 sm:mt-[50px]  flex flex-col items-center">
        <Reveal delay={0.25} className="w-fit">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl mt-2.5 lg:mt-5 w-fit mb-[50px] font-bold mx-auto text-cream">
            JOIN US NOW!
          </h1>
          <div className="relative w-fit h-fit overflow-hidden">
            <img
              className="w-[85vw] md:w-[85vw] max-w-[1600px] min-w-[280px]"
              src="/layers/social-layer-chog.png"
            />
            <Link href={""}>
              <motion.img
                src="/layers/social-telegram.png"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  position: "absolute",
                  top: "0px",
                }}
              />
            </Link>
            <Link
              rel="noreferer noopener"
              href="https://x.com/chog_base"
              target="_blank"
            >
              <motion.img
                src="/layers/social-twitter.png"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "10px",
                }}
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};
