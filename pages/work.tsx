import Image from "next/image";
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../context/app-context";
import Footer from "../components/footer";
import Header from "../components/header";
import { ImagesList, StyledImage } from "../components/preview-images/styles";
import imagesData from "../components/preview-images/data.json";
import type { NextPage } from "next";

type ImageType = {
  id: number;
  path: string;
  alt: string;
}[];

const Work: NextPage = ({ images }: any) => {
  const { firstLoad } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <ImagesList>
          {images.map((image: any) => (
            <motion.div
              key={image.id}
              variants={{ visible: { scale: 1.05 }, firstLoad: { opacity: 0 } }}
              initial={firstLoad ? "firstLoad" : "visible"}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
            >
              <StyledImage className="active list scale-brightness-transition">
                <Image
                  src={image.path}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
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

export async function getStaticProps() {
  return {
    props: {
      images: imagesData,
    },
  };
}
