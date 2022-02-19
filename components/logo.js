import Link from "next/link";
import React from "react";
import { Square } from "../styles";

function Logo() {
  return (
    <Link href="/" passHref>
      <Square />
    </Link>
  );
}

export default Logo;
