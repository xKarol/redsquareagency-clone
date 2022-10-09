import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FadeOutAnimation = ({ children }: Props) => {
  return <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>{children}</motion.div>;
};

export default FadeOutAnimation;
