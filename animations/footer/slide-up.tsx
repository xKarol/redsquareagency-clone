import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
