import React from "react";

import { Styles } from "../../components/header";
import { Logo } from "../../components/logo";
import { useAppContext } from "../../context/app-context";
import HeaderNavigationButtonContainer from "./header-navigation-button";

const HeaderContainer = () => {
  const { firstLoad } = useAppContext();
  return (
    <Styles.Header className="container">
      <Logo firstLoad={firstLoad} />
      <HeaderNavigationButtonContainer />
    </Styles.Header>
  );
};

export default HeaderContainer;
