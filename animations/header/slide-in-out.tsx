import type { Variants } from "framer-motion";
import { type MotionProps, motion } from "framer-motion";
import React, { useMemo } from "react";

type Props = {
  firstLoad: boolean;
  children: React.ReactNode;
} & MotionProps;

const SlideInOutAnimation = ({ firstLoad, children, ...rest }: Props) => {
  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: firstLoad ? 0 : 1,
        translateX: firstLoad ? 25 : 0,
        transition: { duration: 0.4 },
      },
      hidden: { opacity: firstLoad ? 1 : 0, translateX: firstLoad ? 0 : -25 },
      exit: { translateX: 25, opacity: 0, transition: { duration: 0.4 } },
    }),
    [firstLoad],
  );

  return (
    <motion.div
      {...rest}
      style={{ width: "max-content", overflow: "hidden" }}
      variants={variants}
      animate={firstLoad ? "hidden" : "visible"}
      initial="hidden"
      exit="exit">
      {children}
    </motion.div>
  );
};

export default SlideInOutAnimation;
