import React from "react";

import { Styles } from "../../components/header";
import Logo from "../../components/logo";
import HeaderNavigationButtonContainer from "./header-navigation-button";

const HeaderContainer = () => {
  return (
    <Styles.Header className="container">
      <Logo />
      <HeaderNavigationButtonContainer />
    </Styles.Header>
  );
};

export default HeaderContainer;
