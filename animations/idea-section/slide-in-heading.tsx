import React from "react";

import SlideInAnimation from "./slide-in";
import { variants } from "./variants";

type Props = {
  children: React.ReactNode;
};

const SlideInHeadingAnimation = ({ children }: Props) => {
  return <SlideInAnimation variants={variants}>{children}</SlideInAnimation>;
};

export default SlideInHeadingAnimation;
