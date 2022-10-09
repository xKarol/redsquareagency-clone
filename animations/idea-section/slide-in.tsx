import { motion, MotionProps, useAnimation } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { variants } from "./variants";

type Props = {
  children: React.ReactNode;
} & MotionProps;

const SlideInAnimation = ({ children, ...rest }: Props) => {
  const [ref, inView] = useInView({ rootMargin: "100% 0px 0px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} {...rest}>
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
