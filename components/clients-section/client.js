import { useAnimation, motion } from "framer-motion";
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

function Client({ name }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {name}
    </motion.li>
  );
}

export default Client;
