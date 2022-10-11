import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

import useInViewAnimation from "../../hooks/use-in-view-animation";

const variants: Variants = {
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
  const { ref, controls } = useInViewAnimation({ rootMargin: "100% 0px 0px 0px" });

  return (
    <motion.li ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.li>
  );
};

export default SlideInAnimation;
