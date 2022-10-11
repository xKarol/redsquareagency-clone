import type { Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const variants: Variants = {
  initial: { width: "100%", display: "flex", height: "100%" },
  exit: { height: "calc(100vw / 2)", y: "calc(-100vh + 8vw + 190px)" },
};

const transition: Transition = { delay: 0.5, duration: 1 };

const SlideOutAnimation = ({ children }: Props) => {
  return (
    <motion.div initial="initial" exit="exit" variants={variants} transition={transition}>
      {children}
    </motion.div>
  );
};

export default SlideOutAnimation;
