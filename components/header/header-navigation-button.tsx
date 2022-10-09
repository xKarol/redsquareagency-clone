import React from "react";
import { BiChevronRight } from "react-icons/bi";

import { Styles } from "./styles";

type Props = {
  children: string;
};

const HeaderNavigationButton = ({ children }: Props) => {
  return (
    <Styles.NavigationButton className="bg-hover-blur">
      <span>{children}</span>
      <BiChevronRight />
    </Styles.NavigationButton>
  );
};

export default HeaderNavigationButton;
