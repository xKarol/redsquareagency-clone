import Image from "next/image";
import Footer from "../footer";
import Header from "../header";
import { ImagesList, StyledImage } from "../preview-images/styles";

function Work({ data }) {
  const { images } = data;
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Work;
