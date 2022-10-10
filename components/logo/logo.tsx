import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ROUTE_HOME } from "../../constants/routes";
import { Styles } from "./styles";
import type { Shapes } from "./types";

type Props = {
  firstLoad: boolean;
} & React.ComponentPropsWithRef<typeof Styles.LogoShape>;

const shapes: [Shapes[0], Shapes[1], Shapes[2]] = ["circle", "triangle", "square"];

const Logo = ({ href = ROUTE_HOME, firstLoad = false, ...rest }: Props) => {
  const [shapeId, setShapeId] = useState(0);

  useEffect(() => {
    if (!firstLoad) return;
    if (shapeId >= shapes.length - 1) return;

    const timer = setTimeout(() => {
      setShapeId((prevShape) => prevShape + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [shapeId, firstLoad]);

  return (
    <Link href={href} passHref>
      <Styles.LogoShape
        variant={firstLoad ? shapes[shapeId] : "square"}
        aria-label="redsquareagency logo"
        {...rest}
      />
    </Link>
  );
};

export default Logo;
