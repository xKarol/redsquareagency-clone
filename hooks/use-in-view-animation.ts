import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { type IntersectionOptions, useInView } from "react-intersection-observer";

const useInViewAnimation = (props?: IntersectionOptions) => {
  const [ref, inView] = useInView(props);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return { ref, inView, controls };
};

export default useInViewAnimation;
