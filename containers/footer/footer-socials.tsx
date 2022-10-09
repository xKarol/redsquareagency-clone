import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

import { StyledSocials } from "../../components/footer";
import SocialIcon from "../../components/footer/footer-social-icon";

const FooterSocialsContainer = () => {
  return (
    <StyledSocials>
      <SocialIcon href="/" icon={<RiFacebookBoxFill />} ariaLabel="facebook" />
      <SocialIcon href="/" icon={<RiInstagramFill />} ariaLabel="instagram" />
      <SocialIcon href="/" icon={<RiTwitterFill />} ariaLabel="twitter" />
      <SocialIcon href="/" icon={<RiLinkedinBoxFill />} ariaLabel="linkedin" />
    </StyledSocials>
  );
};

export default FooterSocialsContainer;
