import React from "react";
import HeroSection from "./pages/landing/HeroSection";
import ExperienceSection from "./pages/landing/ExperienceSection";
import CertificationSection from "./pages/landing/CertificationSection";
import ProjectSection from "./pages/landing/ProjectSection";
import EducationSection from "./pages/landing/EducationSection";
import Footer from "./components/Footer";
import NavbarDefault from "./components/Navbar";

function App() {
  return (
    <html>
      <body>
        <header>
          <NavbarDefault />
        </header>
        <div className="h-screen flex flex-col snap-y snap-mandatory overflow-scroll">
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationSection />
          <ProjectSection />
          <footer className="snap-end">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}

export default App;
