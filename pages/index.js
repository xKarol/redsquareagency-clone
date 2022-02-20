import Header from "../components/header";
import Hero from "../components/hero";
import PreviewImages from "../components/preview-images";
import IdeaSection from "../components/idea-section";
import ClientsSection from "../components/clients-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <PreviewImages />
      <IdeaSection />
      <ClientsSection />
      <Footer />
    </>
  );
}
