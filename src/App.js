import React from "react";
import Hero from "./components/Hero";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { ExperienceType, Month } from "./Enums";
import NavbarDefault from "./components/Navbar";
import SectionHeadline from "./components/SectionHeadline";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";

import timoimage from "./images/timo_winkler.jpeg";
import sologo from "./images/sophisiticates-logo.png";
import msglogo from "./images/msg-logo.png";
import porschelogo from "./images/porsche-logo.png";
import porscheengineeringlogo from "./images/porsche-engineering-logo.jpeg";
import teleaktivlogo from "./images/teleaktiv-logo.jpeg";
import jmulogo from "./images/jmu-logo.png";
import thwslogo from "./images/thws-logo.png";
import awscloudessentialsbadge from "./images/aws-cloud-essentials.png";
import awscloudpractitioner from "./images/aws-cloud-practitioner.png";
import { Typography } from "@material-tailwind/react";

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
              <ExperienceCard
                image={msglogo}
                experience_type={ExperienceType.WORK}
                start_month={Month.AUG}
                start_year={2023}
                end_month="Today"
                title="IT Consultant"
                type="Full time"
                location="Frankfurt, Germany"
              />
              <ExperienceCard
                image={awscloudpractitioner}
                experience_type={ExperienceType.CERTIFICATE}
                date="August 24, 2023"
                title="AWS Cloud Practitioner"
                type="Certificate"
                location="Remote, Germany"
              />
              <ExperienceCard
                image={awscloudessentialsbadge}
                experience_type={ExperienceType.CERTIFICATE}
                title="AWS Cloud Essentials"
                date="August 22, 2023"
                type="Certificate"
                location="Remote, Germany"
              />
              <ExperienceCard
                image={thwslogo}
                experience_type={ExperienceType.EDUCATION}
                start_month={Month.OCT}
                start_year={2019}
                end_month={Month.MAR}
                end_year={2023}
                title="M.Sc. Information Systems"
                type="Graduation"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={porschelogo}
                experience_type={ExperienceType.WORK}
                start_month={Month.MAY}
                start_year={2022}
                end_month={Month.DEC}
                end_year={2022}
                title="Computer Vision Researcher"
                type="Masterand"
                location="Weissach, Germany"
              />
              <ExperienceCard
                image={porscheengineeringlogo}
                experience_type={ExperienceType.WORK}
                start_month={Month.OCT}
                start_year={2020}
                end_month={Month.SEP}
                end_year={2021}
                title="Software Quality- and Process Manager"
                type="Trainee"
                location="Bietigheim-Bissingen, Germany"
              />
              <ExperienceCard
                image={sologo}
                experience_type={ExperienceType.WORK}
                start_month={Month.SEP}
                start_year={2019}
                end_month={Month.SEP}
                end_year={2021}
                title="Full Stack Developer"
                type="Working Student"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={teleaktivlogo}
                experience_type={ExperienceType.WORK}
                start_month={Month.DEC}
                start_year={2017}
                end_month={Month.AUG}
                end_year={2019}
                title="Data Quality Analyst"
                type="Working Student"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={teleaktivlogo}
                experience_type={ExperienceType.WORK}
                start_month={Month.NOV}
                start_year={2018}
                end_month={Month.MAR}
                end_year={2019}
                title="Data Quality Researcher"
                type="Bachelorand"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={jmulogo}
                experience_type={ExperienceType.EDUCATION}
                start_month={Month.OCT}
                start_year={2014}
                end_month={Month.MAR}
                end_year={2019}
                title="B.Sc. Information Systems"
                type="Graduation"
                location="Würzburg, Germany"
              />
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
              <ProjectCard
                title="GreenFactory"
                start_month="Jan"
                start_year={2024}
                end_month="Today"
                technologies={["Github", "Python", "Blabla"]}
              ></ProjectCard>
              <ProjectCard
                title="Validation as a Service"
                start_month="Sep"
                start_year={2023}
                end_month="Jan"
                end_year={2024}
                technologies={[
                  "Python",
                  "Flask",
                  "Postgresql",
                  "Gitea",
                  "Docker",
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Solar Consultant Tool"
                start_month="Jun"
                start_year={2023}
                end_month="Today"
                technologies={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind",
                  "CSS",
                  "GitHub",
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Masterthesis"
                start_month="Jul"
                start_year={2022}
                end_month="Jan"
                end_year={2023}
                technologies={[
                  "Python",
                  "TeX",
                  "Object Recognition",
                  "Statistic",
                  "Github",
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Autonomous Driving Challenge"
                start_month="Okt"
                start_year={2020}
                end_month="Feb"
                end_year={2021}
                technologies={[
                  "Python",
                  "Nvidia Jetbot",
                  "Pytorch",
                  "Jupyter Notebook",
                  "GitHub",
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Brokerware"
                start_month="Okt"
                start_year={2020}
                end_month="Sep"
                end_year={2021}
                technologies={[
                  "Ruby on Rails",
                  "Postgresql",
                  "Docker",
                  "GitLab",
                ]}
              ></ProjectCard>
              <ProjectCard
                title="SPT-Generator"
                start_month="Jul"
                start_year={2019}
                end_month="Mar"
                end_year={2021}
                technologies={["Python", "PyQt", "PDF Generation"]}
              ></ProjectCard>
              <ProjectCard
                title="Bachelorthesis"
                start_month="Nov"
                start_year={2018}
                end_month="Mar"
                end_year={2019}
              ></ProjectCard>
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
