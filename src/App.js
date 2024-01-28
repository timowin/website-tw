import React from "react";
import Hero from "./components/Hero";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { ExperienceTypeEnum, MonthEnum, TechnologyTypeEnum } from "./Enums";
import NavbarDefault from "./components/Navbar";
import SectionHeadline from "./components/SectionHeadline";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";

import timoimage from "./images/timo_winkler.jpeg";
import sologo from "./images/companyLogos/sophisiticates-logo.png";
import msglogo from "./images/companyLogos/msg-logo.png";
import porschelogo from "./images/companyLogos/porsche-logo.png";
import porscheengineeringlogo from "./images/companyLogos/porsche-engineering-logo.jpeg";
import teleaktivlogo from "./images/companyLogos/teleaktiv-logo.jpeg";
import jmulogo from "./images/companyLogos/jmu-logo.png";
import thwslogo from "./images/companyLogos/thws-logo.png";
import awscloudessentialsbadge from "./images/certificates/aws-cloud-essentials.png";
import awscloudpractitioner from "./images/certificates/aws-cloud-practitioner.png";
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
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.AUG}
                start_year={2023}
                title="IT Consultant"
                type="Full time"
                location="Frankfurt, Germany"
              />
              <ExperienceCard
                image={awscloudpractitioner}
                experience_type={ExperienceTypeEnum.CERTIFICATE}
                date="August 24, 2023"
                title="AWS Cloud Practitioner"
                type="Certificate"
                location="Remote, Germany"
              />
              <ExperienceCard
                image={awscloudessentialsbadge}
                experience_type={ExperienceTypeEnum.CERTIFICATE}
                title="AWS Cloud Essentials"
                date="August 22, 2023"
                type="Certificate"
                location="Remote, Germany"
              />
              <ExperienceCard
                image={thwslogo}
                experience_type={ExperienceTypeEnum.EDUCATION}
                start_month={MonthEnum.OCT}
                start_year={2019}
                end_month={MonthEnum.MAR}
                end_year={2023}
                title="M.Sc. Information Systems"
                type="Graduation"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={porschelogo}
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.MAY}
                start_year={2022}
                end_month={MonthEnum.DEC}
                end_year={2022}
                title="Computer Vision Researcher"
                type="Masterand"
                location="Weissach, Germany"
              />
              <ExperienceCard
                image={porscheengineeringlogo}
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.OCT}
                start_year={2020}
                end_month={MonthEnum.SEP}
                end_year={2021}
                title="Software Quality- and Process Manager"
                type="Trainee"
                location="Bietigheim-Bissingen, Germany"
              />
              <ExperienceCard
                image={sologo}
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.SEP}
                start_year={2019}
                end_month={MonthEnum.SEP}
                end_year={2021}
                title="Full Stack Developer"
                type="Working Student"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={teleaktivlogo}
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.DEC}
                start_year={2017}
                end_month={MonthEnum.AUG}
                end_year={2019}
                title="Data Quality Analyst"
                type="Working Student"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={teleaktivlogo}
                experience_type={ExperienceTypeEnum.WORK}
                start_month={MonthEnum.NOV}
                start_year={2018}
                end_month={MonthEnum.MAR}
                end_year={2019}
                title="Data Quality Researcher"
                type="Bachelorand"
                location="Würzburg, Germany"
              />
              <ExperienceCard
                image={jmulogo}
                experience_type={ExperienceTypeEnum.EDUCATION}
                start_month={MonthEnum.OCT}
                start_year={2014}
                end_month={MonthEnum.MAR}
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
                start_month={MonthEnum.JAN}
                start_year={2024}
                end_month="Today"
                technologies={[
                  ["Github", TechnologyTypeEnum.TOOL],
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Validation as a Service"
                start_month={MonthEnum.SEP}
                start_year={2023}
                end_month={MonthEnum.JAN}
                end_year={2024}
                technologies={[
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                  ["Flask", TechnologyTypeEnum.FRAMEWORK],
                  ["Postgresql", TechnologyTypeEnum.DATABASE],
                  ["Gitea", TechnologyTypeEnum.TOOL],
                  ["Docker", TechnologyTypeEnum.TOOL],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Solar Consultant Tool"
                start_month={MonthEnum.JUN}
                start_year={2023}
                end_month="Today"
                technologies={[
                  ["React", TechnologyTypeEnum.FRAMEWORK],
                  ["TypeScript", TechnologyTypeEnum.LANGUAGE],
                  ["JavaScript", TechnologyTypeEnum.LANGUAGE],
                  ["Tailwind", TechnologyTypeEnum.FRAMEWORK],
                  ["CSS", TechnologyTypeEnum.LANGUAGE],
                  ["GitHub", TechnologyTypeEnum.TOOL],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Masterthesis"
                start_month={MonthEnum.JUL}
                start_year={2022}
                end_month={MonthEnum.JAN}
                end_year={2023}
                technologies={[
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                  ["TeX", TechnologyTypeEnum.LANGUAGE],
                  ["Object Recognition", TechnologyTypeEnum.MISC],
                  ["Statistic", TechnologyTypeEnum.MISC],
                  ["Github", TechnologyTypeEnum.TOOL],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Autonomous Driving Challenge"
                start_month={MonthEnum.OCT}
                start_year={2020}
                end_month={MonthEnum.FEB}
                end_year={2021}
                technologies={[
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                  ["Nvidia Jetbot", TechnologyTypeEnum.MISC],
                  ["Pytorch", TechnologyTypeEnum.FRAMEWORK],
                  ["Jupyter Notebook", TechnologyTypeEnum.TOOL],
                  ["GitHub", TechnologyTypeEnum.TOOL],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Brokerware"
                start_month={MonthEnum.OCT}
                start_year={2020}
                end_month={MonthEnum.SEP}
                end_year={2021}
                technologies={[
                  ["Ruby on Rails", TechnologyTypeEnum.LANGUAGE],
                  ["Postgresql", TechnologyTypeEnum.DATABASE],
                  ["Docker", TechnologyTypeEnum.TOOL],
                  ["GitLab", TechnologyTypeEnum.TOOL],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="SPT-Generator"
                start_month={MonthEnum.JUL}
                start_year={2019}
                end_month={MonthEnum.MAR}
                end_year={2021}
                technologies={[
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                  ["PyQt", TechnologyTypeEnum.FRAMEWORK],
                  ["PDF Generation", TechnologyTypeEnum.MISC],
                ]}
              ></ProjectCard>
              <ProjectCard
                title="Bachelorthesis"
                start_month={MonthEnum.NOV}
                start_year={2018}
                end_month={MonthEnum.MAR}
                end_year={2019}
                technologies={[
                  ["Python", TechnologyTypeEnum.LANGUAGE],
                  ["MongoDB", TechnologyTypeEnum.DATABASE],
                  ["PDF Generation", TechnologyTypeEnum.MISC],
                ]}
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
