import React from "react";

import { FadeOutAnimation, SlideUpAnimation } from "../../animations/footer";
import { Box, Container, StyledFooter } from "../../components/footer";
import Email from "./footer-email";
import FooterPlacesContainer from "./footer-places";
import FooterSocialsContainer from "./footer-socials";

type Props = {
  children?: React.ReactNode;
};

const FooterContainer = ({ children }: Props) => {
  return (
    <StyledFooter>
      <SlideUpAnimation>
        <FadeOutAnimation>
          <Container className="container">
            <Email />
            <Box>
              <FooterSocialsContainer />
              <FooterPlacesContainer />
            </Box>
          </Container>
        </FadeOutAnimation>
        {children}
      </SlideUpAnimation>
    </StyledFooter>
  );
};

export default FooterContainer;
