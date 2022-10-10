import React from "react";

import { SlideInHeadingAnimation } from "../../animations/idea-section";
import { Styles } from "../../components/idea-section";

const IdeaHeadingContainer = () => {
  return (
    <SlideInHeadingAnimation>
      <Styles.Heading>
        We deal in ideas, design and media that are category defying. When the world Millis, you’ve
        got to Vanilli.
      </Styles.Heading>
    </SlideInHeadingAnimation>
  );
};

export default IdeaHeadingContainer;
