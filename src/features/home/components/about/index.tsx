import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [isCopied, setIsCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText("TBA");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Échec de la copie : ", err);
    }
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section className="mb-[100px] md:mb-[250px] flex items-center flex-col w-[95%]">
      <motion.div
        ref={ref}
        className="relative w-fit max-w-[700px]"
        variants={{
          hidden: {
            opacity: 1,
            width: "200px",
            height: "200px",
          },
          visible: {
            opacity: 1,
            width: "90vw",
            height: "auto",
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex z-10 p-7 lg:p-10 relative flex-col rounded items-center h-full bg-purple-tint">
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            animate={mainControls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl uppercase text-white">
              About $CHOG
            </h2>
            <div className="w-[70px] lg:w-[100px] h-[5px] bg-purple-light mt-3 lg:mt-5 rounded-full" />
            <p className="text-base lg:text-xl text-center mt-6 lg:mt-10 mx-auto w-[94%]">
              Chog emerged in the Monad Discord, created by one of the original
              members, RayJ. The stories surrounding Chog will be explored in X
              spaces, marking a turning point for Chog. It's time to take back
              control and redefine roles. The community is taking matters into
              their own hands. Post-launch, contract access will be renounced.
              Stablecoin liquidity to be ETH wreck-proof. The long anticipation
              is coming to an end, and a new era of community leadership begins.
            </p>

            <motion.button
              initial="hidden"
              animate={mainControls}
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
              onClick={copyToClipboard}
              className="mt-6 mb-0 lg:mb-3 lg:mt-10 sm:text-base lg:text-lg text-white flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full w-fit"
            >
              {isCopied ? (
                <FaCheck className="text-green-400 mr-2.5" />
              ) : (
                <FaRegCopy className=" mr-2.5" />
              )}
              TBA
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute z-0 -top-3 -right-3 lg:-top-5 lg:-right-5 w-full h-full bg-purple-light rounded" />
      </motion.div>
    </section>
  );
};
