import Home from "../components/pages";
import clients from "../components/clients-section/data.json";
import images from "../components/preview-images/data.json";

export default function HomePage({ clients, images }) {
  return <Home data={{ clients, images }} />;
}

export async function getStaticProps() {
  return {
    props: {
      clients,
      images,
    },
  };
}
