import React from "react";

import { StyledHero } from "../../components/hero/styles";
import HeroHeadingContainer from "./hero-heading";

const HeroContainer = () => {
  return (
    <StyledHero className="container">
      <HeroHeadingContainer />
    </StyledHero>
  );
};

export default HeroContainer;
