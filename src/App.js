import React from "react";
import HeroSection from "./pages/landing/HeroSection";
import ExperienceSection from "./pages/landing/ExperienceSection";
import CertificationSection from "./pages/landing/CertificationSection";
import ProjectSection from "./pages/landing/ProjectSection";
import EducationSection from "./pages/landing/EducationSection";

import NavbarDefault from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <NavbarDefault />
      </header>
      <body className="flex flex-col mx-auto">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationSection />
        <ProjectSection />
      </body>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
