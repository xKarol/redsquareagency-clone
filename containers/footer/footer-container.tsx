import React from "react";

import { FadeOutAnimation, SlideUpAnimation } from "../../animations/footer";
import { Styles } from "../../components/footer";
import FooterEmailContainer from "./footer-email";
import FooterPlacesContainer from "./footer-places";
import FooterSocialsContainer from "./footer-socials";

type Props = {
  children?: React.ReactNode;
};

const FooterContainer = ({ children }: Props) => {
  return (
    <Styles.Footer>
      <SlideUpAnimation>
        <FadeOutAnimation>
          <Styles.Container className="container">
            <FooterEmailContainer />
            <Styles.Box>
              <FooterSocialsContainer />
              <FooterPlacesContainer />
            </Styles.Box>
          </Styles.Container>
        </FadeOutAnimation>
        {children}
      </SlideUpAnimation>
    </Styles.Footer>
  );
};

export default FooterContainer;
