import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";

import type { ClientType } from "../@types/clients";
import type { ImageType } from "../@types/images";
import ClientsSection from "../components/clients-section";
import Footer from "../components/footer";
import AllProjects from "../components/footer/all-projects";
import PreviewImages from "../components/preview-images";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { IdeaContainer } from "../containers/idea-section";
import { clientsJSON, imagesJSON } from "../json";

type Props = { clients: ClientType[]; images: ImageType[] };

const Home: NextPage<Props> = ({ clients, images }) => {
  return (
    <>
      <HeaderContainer />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <HeroContainer />
        <PreviewImages images={images} />
        <IdeaContainer />
        <ClientsSection clients={clients} />
      </motion.div>
      <Footer>
        <AllProjects />
      </Footer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      clients: clientsJSON,
      images: imagesJSON,
    },
  };
};
