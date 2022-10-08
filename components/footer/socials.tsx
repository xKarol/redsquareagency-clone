import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

import SocialIcon from "./social-icon";
import { StyledSocials } from "./styles";

function Socials() {
  return (
    <StyledSocials>
      <SocialIcon href="/" icon={<RiFacebookBoxFill />} ariaLabel="facebook" />
      <SocialIcon href="/" icon={<RiInstagramFill />} ariaLabel="instagram" />
      <SocialIcon href="/" icon={<RiTwitterFill />} ariaLabel="twitter" />
      <SocialIcon href="/" icon={<RiLinkedinBoxFill />} ariaLabel="linkedin" />
    </StyledSocials>
  );
}

export default Socials;
