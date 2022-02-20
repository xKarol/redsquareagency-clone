import Email from "./email";
import Places from "./places";
import Socials from "./socials";
import { StyledFooter, Box, Container } from "./styles";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateY: 50 },
};

function Footer() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <StyledFooter>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <Container className="spacing">
          <Email />
          <Box>
            <Socials />
            <Places />
          </Box>
        </Container>
      </motion.div>
    </StyledFooter>
  );
}

export default Footer;
