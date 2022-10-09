import React from "react";

import { StyledIdeaSection } from "../../components/idea-section";
import IdeaHeadingContainer from "./idea-heading";
import IdeaTextContainer from "./idea-text";

const IdeaContainer = () => {
  return (
    <StyledIdeaSection className="container">
      <IdeaHeadingContainer />
      <IdeaTextContainer />
    </StyledIdeaSection>
  );
};

export default IdeaContainer;
