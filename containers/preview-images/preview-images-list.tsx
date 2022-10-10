import React from "react";

import type { ImageType } from "../../@types/images";
import { BounceAnimation, FadeOutAnimation } from "../../animations/preview-images";
import { PreviewImage, Styles } from "../../components/preview-images";
import { useAppContext } from "../../context/app-context";

type Props = {
  images: ImageType[];
};

const PreviewImagesListContainer = ({ images }: Props) => {
  const { firstLoad } = useAppContext();

  return (
    <FadeOutAnimation>
      <Styles.ImagesList>
        {images.map(({ path, alt, id }) => (
          <BounceAnimation key={id} firstLoad={firstLoad}>
            <PreviewImage className="scale-brightness-transition" src={path} alt={alt} />
          </BounceAnimation>
        ))}
      </Styles.ImagesList>
    </FadeOutAnimation>
  );
};

export default PreviewImagesListContainer;
