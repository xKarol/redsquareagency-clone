import { motion } from "framer-motion";
import React from "react";

import useInViewAnimation from "../../hooks/use-in-view-animation";

type Props = {
  children: React.ReactNode;
};

const variants = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateY: 50 },
};

const SlideUpAnimation = ({ children }: Props) => {
  const { ref, controls } = useInViewAnimation();

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
