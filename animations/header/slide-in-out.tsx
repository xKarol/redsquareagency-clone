import { type MotionProps, motion } from "framer-motion";
import React, { useMemo } from "react";

type Props = {
  firstLoad: boolean;
  children: React.ReactNode;
} & MotionProps;

const SlideInOutAnimation = ({ firstLoad, children, ...rest }: Props) => {
  const variants = useMemo(
    () => ({
      visible: {
        opacity: firstLoad ? 0 : 1,
        translateX: firstLoad ? 25 : 0,
        transition: { duration: 0.4 },
      },
      hidden: { opacity: firstLoad ? 1 : 0, translateX: firstLoad ? 0 : -25 },
    }),
    [firstLoad],
  );

  return (
    <motion.div
      {...rest}
      style={{ width: "max-content", overflow: "hidden" }}
      animate={firstLoad ? "hidden" : "visible"}
      initial="hidden"
      variants={variants}
      exit={{ translateX: 25, opacity: 0, transition: { duration: 0.4 } }}>
      {children}
    </motion.div>
  );
};

export default SlideInOutAnimation;
