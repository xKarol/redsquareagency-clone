import React from "react";

import { StyledHeader } from "../../components/header/styles";
import Logo from "../../components/logo";
import HeaderNavigationButtonContainer from "./header-navigation-button";

const HeaderContainer = () => {
  return (
    <StyledHeader className="container">
      <Logo />
      <HeaderNavigationButtonContainer />
    </StyledHeader>
  );
};

export default HeaderContainer;
