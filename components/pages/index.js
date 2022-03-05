import React from "react";
import Header from "../header";
import Hero from "../hero";
import PreviewImages from "../preview-images";
import IdeaSection from "../idea-section";
import ClientsSection from "../clients-section";
import Footer from "../footer";
import HomeContext from "../../context/home-context";
import { motion } from "framer-motion";

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
        <Footer />
      </motion.div>
    </HomeContext.Provider>
  );
}

export default Home;
