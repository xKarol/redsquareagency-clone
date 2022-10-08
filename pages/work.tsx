import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect } from "react";

import type { ImageType } from "../@types/images";
import Footer from "../components/footer";
import { ImagesList, StyledImage } from "../components/preview-images/styles";
import { HeaderContainer } from "../containers/header";
import AppContext from "../context/app-context";
import { imagesJSON } from "../json";

type Props = { images: ImageType[] };

const Work: NextPage<Props> = ({ images }) => {
  const { firstLoad } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <ImagesList>
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={{ visible: { scale: 1.05 }, firstLoad: { opacity: 0 } }}
              initial={firstLoad ? "firstLoad" : "visible"}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}>
              <StyledImage className="active list scale-brightness-transition">
                <Image src={image.path} alt={image.alt} layout="fill" objectFit="cover" priority />
              </StyledImage>
            </motion.div>
          ))}
        </ImagesList>
      </motion.div>
      <Footer />
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
