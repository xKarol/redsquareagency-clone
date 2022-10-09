import React from "react";

import { Styles } from "../../components/hero/styles";
import HeroHeadingContainer from "./hero-heading";

const HeroContainer = () => {
  return (
    <Styles.Container className="container">
      <HeroHeadingContainer />
    </Styles.Container>
  );
};

export default HeroContainer;
