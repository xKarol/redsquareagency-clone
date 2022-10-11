import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const variants = {
  visible: {
    translateY: 0,
    transition: {
      duration: 0.6,
      delay: 4,
    },
  },
  hidden: { translateY: 100 },
};

const SlideUpAnimation = ({ children }: Props) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
