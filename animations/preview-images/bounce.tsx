import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  firstLoad: boolean;
};

const BounceAnimation = ({ children, firstLoad }: Props) => {
  return (
    <motion.div
      variants={{ visible: { scale: 1.05 }, firstLoad: { opacity: 0 } }}
      initial={firstLoad ? "firstLoad" : "visible"}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default BounceAnimation;
