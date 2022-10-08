import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageType } from "../../@types/images";
import { ROUTE_WORK } from "../../constants/routes";
import { StyledImage, StyledImages } from "./styles";

type Props = {
  images: ImageType[];
};

function PreviewImages({ images = [] }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeImage >= images.length - 1) return setActiveImage(0);
      setActiveImage((prevId) => prevId + 1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [activeImage, images.length]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 4,
          },
        },
        hidden: { translateY: 100, opacity: 0 },
      }}
    >
      <Link href={ROUTE_WORK} passHref scroll={false}>
        <StyledImages className="scale-transition">
          {images.map((image, index) => (
            <StyledImage
              key={image.id}
              className={`preview-image ${
                activeImage === index ? "active" : ""
              }`}
            >
              <Image
                src={image.path}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </StyledImage>
          ))}
        </StyledImages>
      </Link>
    </motion.div>
  );
}

export default PreviewImages;
