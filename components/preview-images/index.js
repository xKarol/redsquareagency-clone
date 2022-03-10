import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import HomeContext from "../../context/home-context";
import { StyledImage, StyledImages } from "./styles";

function PreviewImages() {
  const [activeImage, setActiveImage] = useState(0);
  const { images } = useContext(HomeContext);

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
      <Link href="/work" passHref scroll={false}>
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
