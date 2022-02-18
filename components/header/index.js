import { Square } from "../../styles";
import HeaderLink from "./HeaderLink";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader className="spacing">
      <Square />
      <HeaderLink />
    </StyledHeader>
  );
}

export default Header;
