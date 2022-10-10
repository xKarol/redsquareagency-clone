import { motion } from "framer-motion";
import React from "react";

import useInViewAnimation from "../../hooks/use-in-view-animation";

type Props = {
  children: React.ReactNode;
};

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0 },
};

const FadeInAnimation = ({ children }: Props) => {
  const { ref, controls } = useInViewAnimation();

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
