import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

import { Styles } from "../../components/footer";
import SocialIcon from "../../components/footer/footer-social-icon";

const FooterSocialsContainer = () => {
  return (
    <Styles.SocialsList>
      <SocialIcon href="/" icon={<RiFacebookBoxFill />} ariaLabel="facebook" />
      <SocialIcon href="/" icon={<RiInstagramFill />} ariaLabel="instagram" />
      <SocialIcon href="/" icon={<RiTwitterFill />} ariaLabel="twitter" />
      <SocialIcon href="/" icon={<RiLinkedinBoxFill />} ariaLabel="linkedin" />
    </Styles.SocialsList>
  );
};

export default FooterSocialsContainer;
