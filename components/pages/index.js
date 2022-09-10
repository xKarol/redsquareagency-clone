import Header from "../header";
import Hero from "../hero";
import PreviewImages from "../preview-images";
import IdeaSection from "../idea-section";
import ClientsSection from "../clients-section";
import Footer from "../footer";
import { motion } from "framer-motion";
import AllProjects from "../footer/all-projects";

function Home({ data }) {
  const { images, clients } = data;

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
}

export default Home;
