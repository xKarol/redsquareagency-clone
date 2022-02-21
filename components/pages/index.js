import React from "react";
import Header from "../header";
import Hero from "../hero";
import PreviewImages from "../preview-images";
import IdeaSection from "../idea-section";
import ClientsSection from "../clients-section";
import Footer from "../footer";
import HomeContext from "../../context/home-context";

function Home({ data }) {
  const { images, clients } = data;

  return (
    <HomeContext.Provider value={{ clients, images }}>
      <Header />
      <Hero />
      <PreviewImages />
      <IdeaSection />
      <ClientsSection />
      <Footer />
    </HomeContext.Provider>
  );
}

export default Home;
