import Email from "./email";
import Places from "./places";
import Socials from "./socials";
import { StyledFooter, Box } from "./styles";

function Footer() {
  return (
    <StyledFooter className="spacing">
      <Email />
      <Box>
        <Socials />
        <Places />
      </Box>
    </StyledFooter>
  );
}

export default Footer;
