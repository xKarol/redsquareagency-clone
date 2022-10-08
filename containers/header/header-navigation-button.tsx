import Link from "next/link";
import React, { useContext } from "react";

import { FadeInAnimation, SlideInOutAnimation } from "../../animations/header";
import HeaderNavigationButton from "../../components/header/header-navigation-button";
import AppContext from "../../context/app-context";
import useHeaderNavText from "../../hooks/use-header-nav-text";

const HeaderNavigationButtonContainer = () => {
  const { firstLoad } = useContext(AppContext);
  const { headerName, setHeaderName, headerText, href } = useHeaderNavText();

  return (
    <FadeInAnimation firstLoad={firstLoad}>
      <SlideInOutAnimation
        firstLoad={firstLoad}
        onAnimationComplete={() => setHeaderName(headerText)}>
        <Link href={href}>
          <a>
            <HeaderNavigationButton>{headerName}</HeaderNavigationButton>
          </a>
        </Link>
      </SlideInOutAnimation>
    </FadeInAnimation>
  );
};

export default HeaderNavigationButtonContainer;
