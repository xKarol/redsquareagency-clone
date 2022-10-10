import Link from "next/link";
import React from "react";

import { Styles } from "./styles";

type Props = {
  icon: JSX.Element;
  href: string;
} & React.ComponentPropsWithoutRef<"a">;

function FooterSocialIcon({ icon, href, ...rest }: Props) {
  return (
    <Styles.SocialItem>
      <Link href={href}>
        <a {...rest}>{icon}</a>
      </Link>
    </Styles.SocialItem>
  );
}

export default FooterSocialIcon;
