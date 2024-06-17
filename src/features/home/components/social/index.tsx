import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export const Social = () => {
  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  };
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
          <div
            className="w-2/4 absolute left-0 top-0 h-full z-10 cursor-pointer"
            onClick={() => redirectTo("https://t.me/chog_launch_portal")}
          />
          <div
            className="w-2/4 absolute right-0 top-0 h-full z-10 cursor-pointer"
            onClick={() => redirectTo("https://x.com/chog_base")}
          />
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
        </div>
      </Reveal>
    </section>
  );
};
