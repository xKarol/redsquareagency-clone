import React, { useEffect, useState } from "react";

import { ImageType } from "../../@types/images";
import { Styles } from "../../components/preview-images";
import { PreviewImage } from "../../components/preview-images";

type Props = {
  images: ImageType[];
};

const PreviewImagesCarousel = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeImage >= images.length - 1) return setActiveImage(0);
      setActiveImage((prevId) => prevId + 1);
    }, 200);
    return () => clearInterval(timer);
  }, [activeImage, images.length]);

  return (
    <Styles.CarouselContainer className="scale-transition">
      {images.map(({ id, path, alt }, index) => (
        <PreviewImage
          key={id}
          className={`${activeImage !== index ? "hidden" : ""}`}
          src={path}
          alt={alt}
        />
      ))}
    </Styles.CarouselContainer>
  );
};

export default PreviewImagesCarousel;
