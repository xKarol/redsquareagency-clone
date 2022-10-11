import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  firstLoad: boolean;
};

const FadeInAnimation = ({ firstLoad, children }: Props) => {
  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 1,
        },
      },
      hidden: { opacity: firstLoad ? 0 : 1 },
    }),
    [firstLoad],
  );

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
