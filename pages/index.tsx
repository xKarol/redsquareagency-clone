import type { NextPage } from "next";
import { motion } from "framer-motion";
import ClientsSection from "../components/clients-section";
import Footer from "../components/footer";
import AllProjects from "../components/footer/all-projects";
import Header from "../components/header";
import Hero from "../components/hero";
import IdeaSection from "../components/idea-section";
import PreviewImages from "../components/preview-images";

import { imagesJSON, clientsJSON } from "../json";

const Home: NextPage = ({ clients, images }: any) => {
  return (
    <>
      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <Hero />
        <PreviewImages images={images} />
        <IdeaSection />
        <ClientsSection clients={clients} />
      </motion.div>
      <Footer>
        <AllProjects />
      </Footer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      clients: clientsJSON,
      images: imagesJSON,
    },
  };
}
