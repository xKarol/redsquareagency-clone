import Link from "next/link";
import { StyledSocialLink } from "./styles";

function SocialIcon({ icon, href, ariaLabel = "" }) {
  return (
    <StyledSocialLink>
      <Link href={href}>
        <a aria-label={ariaLabel}>{icon}</a>
      </Link>
    </StyledSocialLink>
  );
}

export default SocialIcon;
