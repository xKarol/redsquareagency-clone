import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { StyledIdeaText } from "./styles";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: { duration: 0.6 },
  },
  hidden: { opacity: 0, translateY: 100 },
};

function Text() {
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
      <StyledIdeaText>
        Red Square believes in rigorous development of brand strategy and
        whip-smart execution. We make all sorts of things. Things that move
        markets, compel audiences and sell product. We help great brands create
        what comes next.
      </StyledIdeaText>
    </motion.div>
  );
}

export default Text;
