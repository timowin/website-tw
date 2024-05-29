import React, { useRef } from "react";
import HeroSection from "./pages/landing/HeroSection";
import ExperienceSection from "./pages/landing/ExperienceSection";
import CertificationSection from "./pages/landing/CertificationSection";
import ProjectSection from "./pages/landing/ProjectSection";
import EducationSection from "./pages/landing/EducationSection";
import Footer from "./components/Footer";
import NavbarDefault from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="bg-gray flex flex-col">
      <ScrollToTopButton />
      <NavbarDefault />
      <HeroSection />
      <CertificationSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <footer className="snap-end">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
