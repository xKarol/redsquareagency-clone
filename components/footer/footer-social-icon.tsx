import Link from "next/link";

import { StyledSocialLink } from "./styles";

type Props = {
  icon: JSX.Element;
  href: string;
  ariaLabel: string;
};

function SocialIcon({ icon, href, ariaLabel = "" }: Props) {
  return (
    <StyledSocialLink>
      <Link href={href}>
        <a aria-label={ariaLabel}>{icon}</a>
      </Link>
    </StyledSocialLink>
  );
}

export default SocialIcon;
