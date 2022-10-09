import React from "react";

import { SlideInHeadingAnimation } from "../../animations/idea-section";
import { StyledIdeaHeading } from "../../components/idea-section";

const IdeaHeadingContainer = () => {
  return (
    <SlideInHeadingAnimation>
      <StyledIdeaHeading>
        We deal in ideas, design and media that are category defying. When the world Millis, you’ve
        got to Vanilli.
      </StyledIdeaHeading>
    </SlideInHeadingAnimation>
  );
};

export default IdeaHeadingContainer;
