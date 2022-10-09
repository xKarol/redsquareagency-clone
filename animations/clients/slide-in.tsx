import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: {
    opacity: 1,
    translateX: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateX: -15 },
};

type Props = {
  children: React.ReactNode;
};

const SlideInAnimation = ({ children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: "100% 0px 0px 0px" });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.li ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.li>
  );
};

export default SlideInAnimation;
