import { Reveal } from "@/components/reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const WhereToBuy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else mainControls.start("hidden");
  }, [isInView]);

  const howToBuy = [
    {
      title: "Uniswap",
      description:
        "Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.",
      link: "https://app.uniswap.org/swap?chain=base",
    },
  ];

  return (
    <section className="flex justify-center flex-col items-center w-[95%] max-w-6xl mb-[100px] md:mb-[200px]">
      <div className="w-full flex md:flex-row flex-col justify-between items-center">
        <motion.img
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[50vw] sm:w-[40vw] "
          height="500"
          width="500"
          src="/layers/money.png"
        />
        <div className="flex flex-col ml-[10%]">
          <Reveal delay={0.4}>
            <h1 className="text-4xl md:text-6xl mt-5 font-bold uppercase text-cream">
              Where buy $CHOG?
            </h1>
          </Reveal>
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
            className="h-[5px] max-w-[70px] md:max-w-auto bg-purple-light mt-5 rounded-full"
          />
          <Reveal delay={0.8}>
            {howToBuy.map((item, i) => (
              <div key={i} className="flex flex-col mt-5 mb-5">
                <div className="flex items-center mb-1">
                  <div className="h-[15px] w-[15px] bg-purple-light rounded rotate-45 mr-3" />
                  <h2 className="text-xl md:text-3xl uppercase">
                    {item.title}
                  </h2>
                </div>
                <p className="text-base md:text-xl mb-1.5 max-w-[90%]">
                  {item.description}
                </p>
                <a
                  className="text-lg md:text-xl italic text-purple-light underline"
                  href={item.link}
                  target="_blank"
                >
                  Buy on {item.title}
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
