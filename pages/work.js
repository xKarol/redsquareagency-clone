import Work from "../components/pages/work";
import images from "../components/preview-images/data.json";

export default function WorkPage({ images }) {
  return <Work data={{ images }} />;
}

export async function getStaticProps() {
  return {
    props: {
      images,
    },
  };
}
