import React from "react";
import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";

type Props = { children: React.ReactNode };

function HeaderNav({ children }: Props) {
  return (
    <StyledLink className="bg-hover-blur">
      <span>{children}</span>
      <BiChevronRight />
    </StyledLink>
  );
}

export default HeaderNav;
