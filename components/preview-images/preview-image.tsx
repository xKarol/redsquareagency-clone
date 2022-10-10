import type { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";

import { Styles } from "./styles";

const PreviewImage = ({ className, src, alt, ...rest }: ImageProps) => {
  return (
    <Styles.Image className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" priority {...rest} />
    </Styles.Image>
  );
};

export default PreviewImage;
