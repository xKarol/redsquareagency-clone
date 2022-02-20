import Link from "next/link";
import { useEffect, useState } from "react";
import { Shape } from "../styles";

function Logo() {
  const shapes = ["", "circle", "triangle", "square"];
  const [shapeId, setShapeId] = useState(0);

  useEffect(() => {
    if (shapeId >= shapes.length - 1) return;

    const timer = setTimeout(() => {
      setShapeId((prevShape) => prevShape + 1);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [shapeId, shapes.length]);

  return (
    <Link href="/" passHref>
      <Shape className={shapes[shapeId]} />
    </Link>
  );
}

export default Logo;
