import Link from "next/link";

import { Styles } from "./styles";

type Props = {
  icon: JSX.Element;
  href: string;
  ariaLabel: string;
};

function SocialIcon({ icon, href, ariaLabel = "" }: Props) {
  return (
    <Styles.SocialItem>
      <Link href={href}>
        <a aria-label={ariaLabel}>{icon}</a>
      </Link>
    </Styles.SocialItem>
  );
}

export default SocialIcon;
