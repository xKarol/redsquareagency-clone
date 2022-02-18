import Email from "./email";
import Places from "./places";
import Socials from "./socials";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter className="spacing">
      <Email />
      <Socials />
      <Places />
    </StyledFooter>
  );
}

export default Footer;
