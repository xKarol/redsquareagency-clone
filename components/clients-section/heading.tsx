import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { StyledClientsHeading } from "./styles";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0 },
};

function Heading() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <StyledClientsHeading>Select Clients</StyledClientsHeading>
    </motion.div>
  );
}

export default Heading;
