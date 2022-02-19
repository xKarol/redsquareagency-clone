import Logo from "../logo";
import HeaderLink from "./HeaderLink";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader className="spacing">
      <Logo />
      <HeaderLink />
    </StyledHeader>
  );
}

export default Header;
