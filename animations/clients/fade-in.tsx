import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

export default FadeInAnimation;
