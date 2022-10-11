import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  firstLoad: boolean;
};

const variants = {
  initial: { scale: 1.05 },
  animate: { scale: 1, opacity: 1 },
  firstLoad: { opacity: 0 },
};

const transition = { duration: 0.4, type: "spring", bounce: 0.5 };

const BounceAnimation = ({ children, firstLoad }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial={firstLoad ? "firstLoad" : "initial"}
      animate="animate"
      transition={transition}>
      {children}
    </motion.div>
  );
};

export default BounceAnimation;
