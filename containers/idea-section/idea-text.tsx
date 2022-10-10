import React from "react";

import { SlideInTextAnimation } from "../../animations/idea-section";
import { Styles } from "../../components/idea-section/styles";

const IdeaTextContainer = () => {
  return (
    <SlideInTextAnimation>
      <Styles.Text>
        Red Square believes in rigorous development of brand strategy and whip-smart execution. We
        make all sorts of things. Things that move markets, compel audiences and sell product. We
        help great brands create what comes next.
      </Styles.Text>
    </SlideInTextAnimation>
  );
};

export default IdeaTextContainer;
