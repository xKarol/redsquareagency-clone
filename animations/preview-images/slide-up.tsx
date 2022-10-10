import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SlideUpAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 4,
          },
        },
        hidden: { translateY: 100, opacity: 0 },
      }}>
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
