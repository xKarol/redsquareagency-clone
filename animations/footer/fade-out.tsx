import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const variants = {
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

const FadeOutAnimation = ({ children }: Props) => {
  return (
    <motion.div variants={variants} exit="exit">
      {children}
    </motion.div>
  );
};

export default FadeOutAnimation;
