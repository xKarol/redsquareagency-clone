import type { Variants } from "framer-motion";
import React from "react";

import SlideInAnimation from "./slide-in";
import { variants as defaultVariant } from "./variants";

type Props = {
  children: React.ReactNode;
};

const variants: Variants = {
  visible: {
    ...defaultVariant.visible,
    transition: { duration: 0.6 },
  },
  hidden: { ...defaultVariant.hidden, translateY: 50 },
};

const SlideInTextAnimation = ({ children }: Props) => {
  return <SlideInAnimation variants={variants}>{children}</SlideInAnimation>;
};

export default SlideInTextAnimation;
