import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SlideOutAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ width: "100%", display: "flex", height: "100%" }}
      exit={{
        height: "calc(100vw / 2)",
        y: "calc(-100vh + 8vw + 190px)",
      }}
      transition={{ delay: 0.5, duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default SlideOutAnimation;
