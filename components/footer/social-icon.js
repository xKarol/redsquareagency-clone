import Link from "next/link";
import { StyledSocialLink } from "./styles";

function SocialIcon({ icon, href }) {
  return (
    <StyledSocialLink>
      <Link href={href}>
        <a>{icon}</a>
      </Link>
    </StyledSocialLink>
  );
}

export default SocialIcon;
