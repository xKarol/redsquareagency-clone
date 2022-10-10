import Link from "next/link";
import React from "react";

import type { ImageType } from "../../@types/images";
import { SlideUpAnimation } from "../../animations/preview-images";
import { ROUTE_WORK } from "../../constants/routes";
import PreviewImagesCarouselContainer from "./preview-images-carousel";

type Props = {
  images: ImageType[];
};

const PreviewImagesContainer = ({ images }: Props) => {
  return (
    <SlideUpAnimation>
      <Link href={ROUTE_WORK} scroll={false}>
        <a>
          <PreviewImagesCarouselContainer images={images} />
        </a>
      </Link>
    </SlideUpAnimation>
  );
};

export default PreviewImagesContainer;
