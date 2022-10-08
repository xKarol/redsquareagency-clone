import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Email from "./email";
import Places from "./places";
import Socials from "./socials";
import { Box, Container, StyledFooter } from "./styles";

const variants = {
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateY: 50 },
};

type Props = {
  children?: React.ReactNode;
};

function Footer({ children }: Props) {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <StyledFooter>
      <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
        <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
          <Container className="container">
            <Email />
            <Box>
              <Socials />
              <Places />
            </Box>
          </Container>
        </motion.div>
        {children}
      </motion.div>
    </StyledFooter>
  );
}

export default Footer;
