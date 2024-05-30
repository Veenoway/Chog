"use client";
import { Li } from "@/components/li";
import { Tokenomic } from "@/components/tokenomic";
import Link from "next/link";
import { useState } from "react";

export const Home = () => {
  const howToBuy = [
    {
      title: "PancakeSwap",
      description:
        "PancakeSwap is a decentralized exchange running on Binance Smart Chain, with lots of other features that let you trade, farm, and stake tokens.",
      link: "https://pancakeswap.finance/",
    },
    {
      title: "Trust Wallet",
      description:
        "Trust Wallet is the official crypto wallet of Binance. You can send, receive and store Bitcoin and many other cryptocurrencies and digital assets safely and securely with the Trust Wallet mobile app.",
      link: "https://trustwallet.com/",
    },
  ];

  const tokenomic = [
    {
      title: "90% of Supply to LP",
      bg: "bg-[#FAB14F]",
    },
    {
      title: "5% of Supply airdrop to $sGOAT holder",
      bg: "bg-[#3199ED]",
    },
    {
      title: "5% of Supply for CEX listings",
      bg: "bg-[#9385EF]",
    },
  ];

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
      <header className="bg-purple-tint w-screen">
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
      </header>
      <section className="flex justify-between items-center w-full max-w-6xl  py-[200px]">
        <div className="flex flex-col">
          <span className="inline-flex items-center h-[50px] w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
            <h3 className="ml-3 text-3xl text-nowrap uppercase text-purple-light">
              About PPEPE
            </h3>
          </span>
          <h1 className="text-8xl mt-5 font-bold">PURPLE PEPE</h1>
          <h2 className="mt-5 text-5xl uppercase font-normal">
            Meet around the world
          </h2>
          <p className="mt-5 text-xl max-w-[80%]">
            Purple Pepe is a community-driven, fair launched DeFi Token. Three
            simple functions occur during each trade: Reflection, LP
            Acquisition, & Burn.
          </p>
          <button className="flex mt-8 justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full w-fit">
            <h4 className="text-xl text-white">Buy now!</h4>
          </button>
        </div>
        <img
          className="scale-x-[-1]"
          height="500"
          width="500"
          src="/excited.png"
        />
      </section>
      <section className="w-full flex flex-col items-center relative mb-[200px]">
        <div className="flex justify-between items-center">
          <div className="triangle-left" />
          <div className="triangle-right" />
        </div>
        <div className="flex h-[250px] w-full bg-purple-tint ">
          <div className="flex glass-effect h-full w-full justify-center items-center">
            <Tokenomic title="Total Supply" value="10B" />
            <Tokenomic title="Buy Tax" value="0%" />
            <Tokenomic title="Sell Tax" value="0%" />
            <Tokenomic title="Buy Back" value="2%" />
          </div>
        </div>
        <div className="triangle-down" />
      </section>
      <section className="mb-[250px] relative">
        <div className="flex z-10 p-10 relative flex-col items-center w-[700px] h-[450px] bg-purple-tint">
          <h2 className="text-5xl uppercase text-white">About Purple Pepe</h2>
          <div className="w-[100px] h-[5px] bg-purple-light mt-5 rounded-full" />
          <p className="text-xl text-center mt-10 mx-auto w-[94%]">
            Purple Pepe is a community-driven, fair launched DeFi Token. Three
            simple functions occur during each trade: Reflection, LP
            Acquisition, & Burn. Purple Pepe is a community-driven, fair
            launched DeFi Token. Three simple functions occur during each trade:
            Reflection, LP Acquisition, & Burn.
          </p>
          <button className="flex mt-10 justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full w-fit">
            <h4 className="text-xl text-white">Buy now!</h4>
          </button>
        </div>
        <div className="absolute z-0 -top-5 -right-5 w-[700px] h-[450px] bg-purple-light" />
      </section>
      <section className="flex justify-between items-center max-w-6xl w-full pb-[200px]">
        <img
          className="scale-x-[-1]"
          height="400"
          width="400"
          src="/happy.png"
        />
        <div className="flex flex-col ml-[10%]">
          <h1 className="text-6xl mt-5 font-bold uppercase">How to buy</h1>
          <div className="w-[100px] h-[5px] bg-purple-light mt-5 rounded-full" />
          {howToBuy.map((item, i) => (
            <div key={i} className="flex flex-col mt-5 mb-5">
              <div className="flex items-center mb-1">
                <div className="h-[15px] w-[15px] bg-purple-light rounded rotate-45 mr-3" />
                <h2 className="text-3xl uppercase">{item.title}</h2>
              </div>
              <p className="text-xl mb-1.5 max-w-[90%]">{item.description}</p>
              <a
                className="text-xl italic text-purple-light underline"
                href={item.link}
                target="_blank"
              >
                Buy on {item.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center relative mb-[200px]">
        <div className="flex justify-between items-center">
          <div className="triangle-left" />
          <div className="triangle-right" />
        </div>
        <div className="flex w-full bg-purple-tint">
          <div className="flex w-full justify-center">
            <div className="flex  justify-between items-center max-w-5xl w-full p-[70px]">
              <div className="flex flex-col mr-[5%]">
                <h1 className="text-5xl font-bold uppercase">
                  Supply Breakdown
                </h1>
                <h2 className="text-3xl mt-2.5 font-bold uppercase">
                  Total Supply 10B
                </h2>
                <div className="w-[100px] h-[5px] bg-purple-light my-5 rounded-full" />
                {tokenomic.map((item, i) => (
                  <div key={i} className="flex flex-col mt-4">
                    <div className="flex items-center mb-1">
                      <div
                        className={`h-[15px] w-[15px] ${item.bg} rounded rotate-45 mr-3`}
                      />
                      <h2 className="text-xl uppercase">{item.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
              <img
                className="scale-x-[-1]"
                height="300"
                width="300"
                src="https://www.speedy.vip/assets/tokenomics/tokenomics.png"
              />
            </div>
          </div>
        </div>
        <div className="triangle-down" />
      </section>
      <section className="w-full flex flex-col justify-center items-center relative mb-[200px]">
        <h1 className="text-8xl mt-5 font-bold uppercase mb-[80px]">Roadmap</h1>
        <div className="flex w-full justify-center items-center max-w-6xl mx-auto relative">
          {/* <img
            className="absolute -left-[5%] top-[-120%]"
            src="/bags.png"
            height={600}
            width={430}
          /> */}
          <div className="flex items-center justify-between max-w-6xl">
            {roadmap.map((item, i) => (
              <div
                key={item.title}
                className="flex relative mx-5"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center p-8 flex-col bg-purple-tint w-[300px] h-[320px] z-20 rounded relative overflow-hidden">
                  <h3 className="text-4xl mb-5 uppercase text-white">
                    {item.title}
                  </h3>
                  <ul className="text-white text-lg">
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
                  /> */}
                </div>
                <div
                  className={`absolute z-0 ${
                    activeHoverIndex === i + 1
                      ? "-top-1.5 -right-1.5"
                      : "-top-3 -right-3"
                  } rounded w-[300px] h-[320px] bg-purple-light transition-all duration-300 ease-in-out`}
                />
              </div>
            ))}
          </div>
        </div>
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
