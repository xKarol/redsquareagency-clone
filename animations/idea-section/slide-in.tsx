import { type MotionProps, motion } from "framer-motion";
import React from "react";

import useInViewAnimation from "../../hooks/use-in-view-animation";
import { variants } from "./variants";

type Props = {
  children: React.ReactNode;
} & MotionProps;

const SlideInAnimation = ({ children, ...rest }: Props) => {
  const { ref, controls } = useInViewAnimation({ rootMargin: "100% 0px 0px 0px" });

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} {...rest}>
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
