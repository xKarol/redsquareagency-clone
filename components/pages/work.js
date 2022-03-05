import Image from "next/image";
import Footer from "../footer";
import Header from "../header";
import { ImagesList, StyledImage } from "../preview-images/styles";
import { motion } from "framer-motion";

function Work({ data }) {
  const { images } = data;
  return (
    <>
      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <ImagesList>
          {images.map((image) => (
            <StyledImage
              key={image.id}
              className={`active list scale-brightness-transition`}
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
        </ImagesList>
      </motion.div>
      <Footer />
    </>
  );
}

export default Work;
