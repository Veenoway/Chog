import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";
import Link from "next/link";

export const Social = () => {
  return (
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
          <Link
            href="https://t.me/chog_launch_portal"
            target="_blank"
            rel="noreferer noopener"
          >
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
                // background: "#FF0000",
              }}
            />
          </Link>
          <Link
            href="https://x.com/chog_base"
            target="_blank"
            rel="noreferer noopener"
            className="w-[50%] max-w-[100px]"
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
                // background: "#FF00FF",
              }}
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};
