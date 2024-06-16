"use client";
import { Reveal } from "@/components/reveal";
import { Tokenomic } from "@/components/tokenomic";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { About } from "./components/about";
import { SupplyBreakdown } from "./components/supply-breakdown";
import { WhereToBuy } from "./components/where-to-buy";

export const Home = () => {
  const button1 = useRef<HTMLButtonElement>(null);
  const springConfig = { stiffness: 100, damping: 30, bounce: 100 };
  const { scrollYProgress } = useScroll({
    target: button1,
    offset: ["start end", "center end"],
  });

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [400, 0]),
    springConfig
  );

  const roadmap = [
    {
      title: "Phase 1",
      content: [
        "Pre-Launch",
        "Community Airdrop",
        "Social links",
        "Dig into bla",
        "Layer 2",
      ],
    },
    {
      title: "Phase 2",
      content: [
        "Pre-Launch",
        "Community Airdrop",
        "Social links",
        "Dig into bla",
        "Layer 2",
      ],
    },
    {
      title: "Phase 3",
      content: [
        "Pre-Launch",
        "Community Airdrop",
        "Social links",
        "Dig into bla",
        "Layer 2",
      ],
    },
  ];

  const [activeHoverIndex, setActiveHoverIndex] = useState(0);

  const handleMouseEnter = (i: number) => setActiveHoverIndex(i + 1);
  const handleMouseLeave = () => setActiveHoverIndex(0);

  return (
    <main className="flex flex-col justify-center items-center">
      {/* <h2 className="text-9xl mb-[100px]">PURPLE PEPE</h2> */}
      {/* <header className="bg-purple-tint w-screen">
        <nav className="flex mx-auto h-full items-center py-5 justify-center">
          <img
            className="h-[50px] mr-10 object-cover rounded-full"
            src="https://assets.coingecko.com/coins/images/33319/large/pepesol.jpg?1701436092"
          />
          <Link className="mx-5 text-xl text-white" href="#about">
            About
          </Link>
          <Link className="mx-5 text-xl text-white" href="#tokenomic">
            Tokenomic
          </Link>
          <Link className="mx-5 text-xl text-white" href="#roadmap">
            Roadmap
          </Link>
          <Link className="mx-5 text-xl text-white" href="#team">
            Team
          </Link>
          <Link className="mx-5 text-xl text-white" href="#contact">
            Contact
          </Link>
        </nav>
      </header> */}
      <section className="flex flex-col max-w-6xl w-[95%] py-[50px] mx-auto">
        <img
          className="w-[400px] mx-auto mb-[80px]"
          height="500"
          width="500"
          src="/t.png"
          alt="Excited Pepe"
        />
        <div className="flex justify-between items-center w-full relatif">
          <div className="flex flex-col max-w-[60%]">
            <span className="inline-flex items-center sm:h-[40px] lg:h-[50px] sm:w-[180px] lg:w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
              <h3 className="ml-3 sm:text-xl lg:text-3xl text-nowrap uppercase text-purple-light">
                About $CHOG
              </h3>
            </span>
            <h1 className="sm:text-6xl lg:text-8xl sm:mt-2.5 lg:mt-5 font-bold">
              CHOG COIN
            </h1>
            <h2 className="sm:mt-2.5 lg:mt-5 sm:text-3xl lg:text-5xl uppercase font-normal">
              The Moyaki's killer
            </h2>
            <p className="sm:mt-2.5 lg:mt-5 sm:text-base lg:text-xl max-w-[80%]">
              Chog is a community-driven, fair launched DeFi Token. It's time to
              take back control and redefine roles. The community is taking
              matters into their own hands.
            </p>

            <button className="flex sm:mt-5 lg:mt-8 justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full w-fit">
              <h4 className="sm:text-base lg:text-xl text-white">Buy now!</h4>
            </button>
          </div>
          <img
            className=""
            height="550"
            width="550"
            src="/layers/chog-wealthy.png"
            alt="Chog father"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center relative mt-[100px] sm:mb-[100px] lg:mb-[200px]">
        <div className="flex justify-between items-center">
          <div className="triangle-left" />
          <div className="triangle-right" />
        </div>
        <div className="flex sm:h-[180px] lg:h-[250px] w-full bg-purple-tint ">
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
      {/* <section className="flex w-[95%] flex-col justify-center items-center relative mb-[200px]">
        <h1 className="sm:text-6xl lg:text-8xl mt-5 font-bold uppercase mb-[40px] lg:mb-[80px]">
          Roadmap
        </h1>
        <div className="flex w-full justify-center items-center max-w-6xl mx-auto relative">
          {/* <img
            className="absolute -left-[5%] top-[-120%]"
            src="/bags.png"
            height={600}
            width={430}
          /> 
          <div className="flex items-center justify-between max-w-6xl w-[90%] flex-col lg:flex-row">
            {roadmap.map((item, i) => (
              <div
                key={item.title}
                className="flex relative my-5 lg:my-0 lg:mx-5 w-full"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center sm:p-5 sm:pb-8 lg:p-8 lg:pb-10 flex-col bg-purple-tint w-full lg:w-[300px] h-full lg:h-[320px] z-20 rounded relative overflow-hidden">
                  <h3 className="sm:text-2xl lg:text-4xl sm:mb-2.5 lg:mb-5 uppercase text-white">
                    {item.title}
                  </h3>
                  <ul className="text-white sm:text-sm lg:text-lg">
                    {item.content.map((content, i) => (
                      <Li key={i} title={content} />
                    ))}
                  </ul>
                  {/* <img
                    className={`absolute z-10 ${
                      activeHoverIndex === i + 1
                        ? "opacity-20 -bottom-5 -right-3"
                        : "opacity-0  -bottom-5 -right-10"
                    } transition-all duration-500 ease-in-out scale-x-[-1]`}
                    src="/mafia.webp"
                    alt="pepe mafia"
                    width={160}
                    height={160}
                  /> 
                </div>
                <div
                  className={`absolute z-0 ${
                    activeHoverIndex === i + 1
                      ? "sm:-top-1 sm:-right-1 lg:-top-1.5 lg:-right-1.5"
                      : "sm:-top-2 sm:-right-2 -top-3 -right-3"
                  } rounded w-full lg:w-[300px] h-full lg:h-[320px] bg-purple-light transition-all duration-300 ease-in-out`}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className="w-screen h-fit relative max-h-[1000px] mt-[50px] lg:mt-[100px] flex flex-col items-center"
        // style={{
        //   backgroundImage: "url('/layers/social-layer-chog.png')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: "contain",
        // }}
      >
        <Reveal delay={0.25}>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl mt-2.5 lg:mt-5 w-fit mb-[50px] font-bold mx-auto">
            JOIN US NOW!
          </h1>
          <div className="relative w-fit h-fit">
            <img
              className="w-[85vw] md:w-[85vw] "
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
      {/* <div className="flex w-full h-[50px] box-border  border-t-2 border-b-2 border-purple-light bg-purple-dark overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <p
            key={i}
            className="text-purple-light leading-[45px] align-middle text-2xl mx-3"
          >
            $PPEPE
          </p>
        ))}
      </div> */}
    </main>
  );
};
