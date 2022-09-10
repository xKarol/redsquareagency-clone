import Image from "next/image";
import Footer from "../footer";
import Header from "../header";
import { ImagesList, StyledImage } from "../preview-images/styles";
import { motion } from "framer-motion";
import { useContext } from "react";
import AppContext from "../../context/app-context";
import { useEffect } from "react";

function Work({ data }) {
  const { images } = data;
  const { firstLoad } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <ImagesList>
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={{ visible: { scale: 1.05 }, firstLoad: { opacity: 0 } }}
              initial={firstLoad ? "firstLoad" : "visible"}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
            >
              <StyledImage
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
            </motion.div>
          ))}
        </ImagesList>
      </motion.div>
      <Footer />
    </>
  );
}

export default Work;
