import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  firstLoad: boolean;
};

const FadeInAnimation = ({ firstLoad, children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 1,
          },
        },
        hidden: { opacity: firstLoad ? 0 : 1 },
      }}>
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
