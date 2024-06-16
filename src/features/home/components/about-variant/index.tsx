import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AboutVariant = () => {
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
    <section className="my-[100px] md:my-[200px] flex items-center flex-col w-[95%]"></section>
  );
};
