import React from "react";

import { Styles } from "../../components/idea-section";
import IdeaHeadingContainer from "./idea-heading";
import IdeaTextContainer from "./idea-text";

const IdeaContainer = () => {
  return (
    <Styles.Container className="container">
      <IdeaHeadingContainer />
      <IdeaTextContainer />
    </Styles.Container>
  );
};

export default IdeaContainer;
