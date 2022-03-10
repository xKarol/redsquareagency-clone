import React from "react";
import Header from "../header";
import Hero from "../hero";
import PreviewImages from "../preview-images";
import IdeaSection from "../idea-section";
import ClientsSection from "../clients-section";
import Footer from "../footer";
import HomeContext from "../../context/home-context";
import { motion } from "framer-motion";
import AllProjects from "../footer/all-projects";

function Home({ data }) {
  const { images, clients } = data;

  return (
    <HomeContext.Provider value={{ clients, images }}>
      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.8 } }}>
        <Hero />
        <PreviewImages />
        <IdeaSection />
        <ClientsSection />
      </motion.div>
      <Footer>
        <AllProjects />
      </Footer>
    </HomeContext.Provider>
  );
}

export default Home;
