"use client";
import { Reveal } from "@/components/reveal";
import { Tokenomic } from "@/components/tokenomic";
import { motion } from "framer-motion";
import Link from "next/link";
import { About } from "./components/about";
import { SupplyBreakdown } from "./components/supply-breakdown";
import { WhereToBuy } from "./components/where-to-buy";

export const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="flex flex-col max-w-6xl w-[95%] py-[50px] mx-auto">
        <img
          className="w-[300px] sm:w-[400px] mx-auto mb-[60px] sm:mb-[80px]"
          height="500"
          width="500"
          src="/layers/title.PNG"
          alt="Chog title"
        />
        <div className="flex sm:flex-row flex-col justify-between items-center w-full relatif">
          <div className="flex flex-col max-w-[95%] sm:max-w-[60%]">
            <span className=" hidden sm:inline-flex items-center h-[40px] lg:h-[50px] w-[180px] lg:w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
              <h3 className="ml-3 text-xl lg:text-3xl text-nowrap uppercase text-purple-light">
                About $CHOG
              </h3>
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl mt-2.5 lg:mt-5 font-bold text-center sm:text-start hidden sm:flex">
              CHOG COIN
            </h1>
            <h2 className="mt-2.5 lg:mt-5 text-4xl sm:text-3xl lg:text-5xl uppercase font-normal text-center sm:text-start">
              The Moyaki's killer
            </h2>
            <p className="mt-2.5 hidden sm:flex lg:mt-5 sm:text-base lg:text-xl max-w-[80%] text-center sm:text-start mx-auto sm:mx-0">
              Chog is a community-driven, fair launched DeFi Token. It's time to
              take back control and redefine roles. The community is taking
              matters into their own hands.
            </p>
            <button className="flex mb-10 sm:mb-0 mt-5 lg:mt-8 justify-center items-center bg-purple-light py-1.5 sm:py-2 px-3 sm:px-5 border-purple-lighter border-2 rounded-full w-fit  mx-auto sm:mx-0">
              <h4 className="sm:text-base lg:text-xl text-white">Buy now!</h4>
            </button>
          </div>
          <img
            className="w-auto h-[350px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px]"
            height="550"
            width="550"
            src="/layers/chog-wealthy.png"
            alt="Chog father"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center relative mt-[30px] sm:mt-[100px] mb-[100px] lg:mb-[200px]">
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

      <section className="w-screen h-fit relative max-h-[1000px] mt-[50px] lg:mt-[100px] flex flex-col items-center">
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
                src="/layers/social-twitter.PNG"
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
      {/* <div className="flex w-full h-[50px] box-border  border-t-2 border-b-2 border-purple-light bg-purple-dark overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <p
            key={i}
            className="text-purple-light leading-[45px] align-middle text-2xl mx-3"
          >
            $CHOG
          </p>
        ))}
      </div> */}
    </main>
  );
};
