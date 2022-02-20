import Header from "../components/header";
import Footer from "../components/footer";
import images from "../components/preview-images/data.json";
import { ImagesList, StyledImage } from "../components/preview-images/styles";
import Image from "next/image";

export default function Home() {
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
