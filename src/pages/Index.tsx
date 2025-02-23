
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CVModal from "../components/CVModal";
import LanguageSelector from "../components/LanguageSelector";
import MusicPlayer from "../components/MusicPlayer";

const Index = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <LanguageSelector />
      <MusicPlayer />
    </div>
  );
};

export default Index;
