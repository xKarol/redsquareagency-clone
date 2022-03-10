import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";

function HeaderNav({ children }) {
  return (
    <StyledLink className="bg-hover-blur">
      <span>{children}</span>
      <BiChevronRight />
    </StyledLink>
  );
}

export default HeaderNav;
