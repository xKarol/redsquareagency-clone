import React from "react";
import { BiChevronRight } from "react-icons/bi";

import { StyledLink } from "./styles";

type Props = {
  children: string;
};

const HeaderNavigationButton = ({ children }: Props) => {
  return (
    <StyledLink className="bg-hover-blur">
      <span>{children}</span>
      <BiChevronRight />
    </StyledLink>
  );
};

export default HeaderNavigationButton;
