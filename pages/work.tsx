import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";

import type { ImageType } from "../@types/images";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { PreviewImagesListContainer } from "../containers/preview-images";
import { imagesJSON } from "../json";

type Props = { images: ImageType[] };

const Work: NextPage<Props> = ({ images }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <PreviewImagesListContainer images={images} />
      <FooterContainer />
    </>
  );
};

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      images: imagesJSON,
    },
  };
};
