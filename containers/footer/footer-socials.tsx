import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

import { FooterSocialIcon, Styles } from "../../components/footer";

const FooterSocialsContainer = () => {
  return (
    <Styles.SocialsList>
      <FooterSocialIcon href="/" icon={<RiFacebookBoxFill />} aria-label="facebook" />
      <FooterSocialIcon href="/" icon={<RiInstagramFill />} aria-label="instagram" />
      <FooterSocialIcon href="/" icon={<RiTwitterFill />} aria-label="twitter" />
      <FooterSocialIcon href="/" icon={<RiLinkedinBoxFill />} aria-label="linkedin" />
    </Styles.SocialsList>
  );
};

export default FooterSocialsContainer;
