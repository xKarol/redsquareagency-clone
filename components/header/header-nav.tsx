import React from "react";
import { BiChevronRight } from "react-icons/bi";

import { StyledLink } from "./styles";

type Props = {
  children: React.ReactNode;
};

function HeaderNav({ children }: Props) {
  return (
    <StyledLink className="bg-hover-blur">
      <span>{children}</span>
      <BiChevronRight />
    </StyledLink>
  );
}

export default HeaderNav;
