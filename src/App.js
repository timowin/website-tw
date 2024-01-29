import React from "react";
import Hero from "./components/Hero";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import NavbarDefault from "./components/Navbar";
import SectionHeadline from "./components/SectionHeadline";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";

import timoimage from "./images/timo_winkler.jpeg";
import { Typography } from "@material-tailwind/react";

import projectData from "./data/projects.json";
import experienceData from "./data/experiences.json";

import { parseMonth, parseTechnology } from "./helperFunctions/enumParsers";

function App() {
  return (
    <div>
      <header className="mx-auto max-w-screen-lg">
        <NavbarDefault />
      </header>
      <body className="flex flex-col mx-auto">
        <section className="my-20 max-w-screen-lg mx-auto">
          <Hero imagePath={timoimage} />
        </section>
        <div>
          <section className="bg-primary rounded-lg mx-6">
            <SectionHeadline title="Experience" textColor="white" />
            <div className="flex flex-row gap-2 max-w-screen-lg font-medium mx-auto text-white pb-4">
              <Typography className="align-center">All Categories</Typography>
              <ChevronDownIcon className="h-5" />
            </div>

            <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto pb-20">
              {experienceData.map((experience) => (
                <ExperienceCard
                  image_name={experience.image_name}
                  experience_type={experience.experience_type}
                  start_month={parseMonth(experience.start_month)}
                  start_year={experience.start_year}
                  end_month={parseMonth(experience.end_month)}
                  end_year={experience.end_year}
                  date={experience.date}
                  title={experience.title}
                  type={experience.type}
                  location={experience.location}
                />
              ))}
            </div>
            <p>
              Lebenslauf abbilden (Berufliche Stationen,
              Zertifikate(Intercultural Management, AWS 1, AWS 2, Bankfachwissen
              kompakt), Bildungsweg)
            </p>
          </section>
        </div>
        <div className="bg-white">
          <section className="mx-auto w-4/5">
            <SectionHeadline title="Projects" textColor="primary" />
            <div className="max-w-screen-lg mx-auto flex flex-col gap-6">
              {projectData.map((project) => (
                <ProjectCard
                  title={project.title}
                  short_description={project.short_description}
                  start_month={parseMonth(project.start_month)}
                  start_year={project.start_year}
                  end_month={parseMonth(project.end_month)}
                  end_year={project.end_year}
                  date={project.date}
                  technologies={project.technologies.map((tech) => [
                    tech[0],
                    parseTechnology(tech[1]),
                  ])}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="bg-primary rounded-lg w-4/5 mx-auto">
          <SectionHeadline title="Services" textColor="white" />
        </section>

        <div className="bg-white">
          <section className="mx-auto w-4/5">
            <SectionHeadline title="Contact" textColor="primary" />
          </section>
        </div>
      </body>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
