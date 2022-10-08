import Link from "next/link";
import { useEffect, useState } from "react";

import { useAppContext } from "../context/app-context";
import { Shape } from "../styles";

function Logo() {
  const shapes = ["", "circle", "triangle", "square"];
  const [shapeId, setShapeId] = useState(0);
  const { firstLoad } = useAppContext();

  useEffect(() => {
    if (!firstLoad) return;
    if (shapeId >= shapes.length - 1) return;

    const timer = setTimeout(() => {
      setShapeId((prevShape) => prevShape + 1);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [shapeId, shapes.length, firstLoad]);

  return (
    <Link href="/" passHref>
      <Shape className={firstLoad ? shapes[shapeId] : "square"} aria-label="redsquareagency logo" />
    </Link>
  );
}

export default Logo;
