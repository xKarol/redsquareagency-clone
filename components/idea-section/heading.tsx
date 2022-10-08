import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { StyledIdeaHeading } from "./styles";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateY: 100 },
};

function Heading() {
  const [ref, inView] = useInView({ rootMargin: "100% 0px 0px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      <StyledIdeaHeading>
        We deal in ideas, design and media that are category defying. When the world Millis, you’ve
        got to Vanilli.
      </StyledIdeaHeading>
    </motion.div>
  );
}

export default Heading;
