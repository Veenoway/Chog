"use client";
import { Li } from "@/components/li";
import { Reveal } from "@/components/reveal";
import { Tokenomic } from "@/components/tokenomic";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { About } from "./components/about";
import { SupplyBreakdown } from "./components/supply-breakdown";
import { WhereToBuy } from "./components/where-to-buy";

export const Home = () => {
  const roadmaps = [
    {
      title: "Phase 1",
      content: [
        "Community Airdrop to most active members",
        "Website Launch",
        "Token Launch",
        "Reaching 100 holders",
        "Reaching 100k market-cap",
      ],
    },
    {
      title: "Phase 2",
      content: [
        "Reaching 1M volume",
        "Second marketing campaign",
        "Reaching 500 holders",
        "Reaching 500k market-cap",
        "Reaching 100M volume",
      ],
    },
    {
      title: "Phase 3",
      content: [
        "CEX Listing",
        "Third marketing campaign ",
        "Reaching 50000 holders",
        "Reaching 100M market cap",
        "Reaching 1B market cap",
      ],
    },
  ];

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
    <main className="flex flex-col justify-center items-center">
      <section className="flex flex-col max-w-6xl w-[95%] py-[50px] mx-auto">
        <div className="flex w-full justify-center">
          <img
            className="w-[300px] md:w-[400px] mb-[20px] sm:mb-[80px] -ml-2 lg:-ml-[35px]"
            height="500"
            width="500"
            src="/layers/title.PNG"
            alt="Chog title"
          />{" "}
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full relatif">
          <div className="flex flex-col max-w-[95%] sm:max-w-[60%]">
            <span className=" hidden md:inline-flex items-center h-[40px] lg:h-[50px] w-[180px] lg:w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
              <h3 className="ml-3 text-xl lg:text-3xl text-nowrap uppercase text-purple-light">
                About $CHOG
              </h3>
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl mt-2.5 lg:mt-5 font-bold text-center md:text-start hidden md:flex">
              CHOG COIN
            </h1>
            <h2 className="mt-2.5 lg:mt-5 text-4xl md:text-3xl lg:text-5xl uppercase font-normal text-center md:text-start">
              The Moyaki's killer
            </h2>
            <p className="mt-2.5 hidden md:flex lg:mt-5 sm:text-base lg:text-xl max-w-[80%] text-center sm:text-start mx-auto sm:mx-0">
              Chog is a community-driven, fair launched DeFi Token. It's time to
              take back control and redefine roles. The community is taking
              matters into their own hands.
            </p>
            <button className="flex mb-10 md:mb-0 mt-5 lg:mt-8 justify-center items-center bg-purple-light py-1.5 md:py-2 px-3 md:px-5 border-purple-lighter border-2 rounded-full w-fit  mx-auto md:mx-0">
              <h4 className="sm:text-base lg:text-xl text-white">Buy now!</h4>
            </button>
          </div>
          <img
            className="w-auto h-[350px] md:w-auto md:h-[400px] lg:w-[550px] lg:h-[550px]"
            height="550"
            width="550"
            src="/layers/chog-wealthy.png"
            alt="Chog father"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center relative mt-[30px] md:mt-[100px] mb-[100px] lg:mb-[200px]">
        <div className="flex justify-between items-center">
          <div className="triangle-left" />
          <div className="triangle-right" />
        </div>
        <div className="flex h-[140px] sm:h-[180px] lg:h-[250px] w-full bg-purple-tint ">
          <div className="flex glass-effect h-full w-full justify-center items-center">
            <Tokenomic title="Total Supply" value="10M" />
            <Tokenomic title="Buy Tax" value="5%" />
            <Tokenomic title="Sell Tax" value="6%" />
          </div>
        </div>
        <div className="triangle-down" />
      </section>
      <About />
      <WhereToBuy />
      <SupplyBreakdown />
      <section className="flex w-[95%] flex-col justify-center items-center relative my-[100px] lg:my-[200px] ">
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
                  {/* <div
                  className={`absolute z-0 ${
                    activeHover
                      ? "sm:-top-1 sm:-right-1 lg:-top-1.5 lg:-right-1.5"
                      : "sm:-top-2 sm:-right-2 -top-3 -right-2"
                  } rounded w-full lg:w-[300px] h-full lg:h-[420px] bg-purple-light transition-all duration-300 ease-in-out`}
                /> */}
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
                    // variants={{
                    //   hidden: { opacity: 0, x: 50 },
                    //   visible: { opacity: 1, x: 0 },
                    // }}
                    // initial="hidden"
                    // animate={mainControls}
                    // transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex lg:hidden sm:opacity-100 opacity-40 h-[300px] pointer-events-none absolute right-0 -bottom-4"
                    height="500"
                    width="500"
                    src="/layers/top1.png"
                  />
                </div>{" "}
              </Reveal>
            </div>
            <motion.img
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

      <section className="w-screen h-fit relative max-h-[1000px] mt-5 sm:mt-[50px] lg:mt-[100px] flex flex-col items-center">
        <Reveal delay={0.25}>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl mt-2.5 lg:mt-5 w-fit mb-[50px] font-bold mx-auto">
            JOIN US NOW!
          </h1>
          <div className="relative w-fit h-fit">
            <img
              className="w-[85vw] md:w-[85vw] max-w-[1600px]"
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
            <Link href={""}>
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
