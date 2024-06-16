import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type ButtonProps = {
  title: string;
  className?: string;
  [key: string]: any;
};

export const Button = ({ title, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={cn(
        "flex justify-center items-center bg-purple-light py-1 px-3 lg:py-2 lg:px-5 border-purple-lighter border-2 rounded-full",
        className
      )}
      {...props}
    >
      <h4 className="sm:text-base lg:text-xl text-white">{title}</h4>
    </motion.button>
  );
};
