import Image from "next/image";
import { useEffect, useState } from "react";
import images from "./data.json";
import { StyledImage, StyledImages } from "./styles";

function PreviewImages() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // if (activeImage >= images.length - 1) return setActiveImage(0);
      // setActiveImage((prevId) => prevId + 1);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [activeImage]);

  return (
    <StyledImages>
      {images.map((image, index) => (
        <StyledImage
          key={image.id}
          className={`preview-image ${activeImage === index ? "active" : ""}`}
        >
          <Image
            src={image.path}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
            priority
          />
        </StyledImage>
      ))}
    </StyledImages>
  );
}

export default PreviewImages;
