import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  index: number;
};

const FadeInGroupAnimation = ({ children, index }: Props) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 2 + 0.3 * index,
          },
        },
        hidden: { opacity: 0 },
      }}>
      {children}
    </motion.span>
  );
};

export default FadeInGroupAnimation;
