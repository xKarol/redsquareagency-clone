import {
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import SocialIcon from "./social-icon";
import { StyledSocials } from "./styles";

function Socials() {
  return (
    <StyledSocials>
      <SocialIcon href="/" icon={<RiFacebookBoxFill />} />
      <SocialIcon href="/" icon={<RiInstagramFill />} />
      <SocialIcon href="/" icon={<RiTwitterFill />} />
      <SocialIcon href="/" icon={<RiLinkedinBoxFill />} />
    </StyledSocials>
  );
}

export default Socials;
