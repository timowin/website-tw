import React from "react";
import Hero from "./components/Hero";
import NavbarDefault from "./components/Navbar";
import SectionHeadline from "./components/SectionHeadline";
import timoimage from "./images/timo_winkler.jpeg";
import sologo from "./images/SOPH_Logo_vertikal_RZ_RGB.jpg";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <header className="mx-auto w-4/5">
        <NavbarDefault />
      </header>
      <body className="flex flex-col gap-40">
        <section className="my-20 mx-auto w-4/5">
          <Hero imagePath={timoimage} />
        </section>
        <section className="bg-primary p-40">
          <SectionHeadline title="Work Experience" />
          <div className="flex flex-col">
            <div className="h-12 w-12 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div className="h-16 border-2 mx-auto"></div>
            <WorkExperience
              image="https://www.msg.group/images/msggroup/logos/msg-for-banking-web_.jpg"
              start_month="Aug"
              start_year={2023}
              end_month="Today"
              employer="msg for banking ag"
              job_title="Software Developer & IT Consultant"
              job_type="Employee"
              description="I am currently employed as a software developer and IT consultant at msg for banking AG, where I contribute to developing and optimizing software solutions for the banking sector."
              task_1="Collaborate with cross-functional teams to design, develop, and implement software solutions tailored to meet the specific needs of the banking industry"
              task_2="Actively participate in the entire software development life cycle, from concept and design to testing, deployment, and maintenance"
              task_3="Utilize programming languages and frameworks such as Python, Typescript and SQL to code and implement software applications"
            />
            <div className="h-16 border-2 border-emerald mx-auto"></div>
            <WorkExperience
              image="https://andreasundconrad.ch/app/uploads/2015/10/Porsche-Logo-2.jpg"
              start_month="May"
              start_year={2022}
              end_month="Dec"
              end_year={2022}
              employer="Porsche AG"
              job_title="R&D Computer Vision"
              job_type="Masterand"
              description="In the final phase of my academic journey, I partnered with Porsche AG to explore human anticipation behavior, contributing to the advancement of AI-based object recognition methods"
              task_1="Masterand in the field of autonomous and highly automated driving"
              task_2='Title of my Masterthesis: "Statistical analysis of human anticipation ability at night-time vehicle detection for further development
            of object recognition methods."'
            />
            <div className="h-16 border-2 border-primary mx-auto"></div>
            <WorkExperience
              image="https://www.asc-s.de/media/news/news_porsche-engineering_Zeichenfläche_1_YbtKomm.png"
              start_month="Oct"
              start_year={2020}
              end_month="Sep"
              end_year={2021}
              employer="Porsche Engineering"
              job_title="Software Quality- and Process Manager"
              job_type="Trainee"
              description="During my internship at Porsche Engineering I worked on different topics to improve and assure the software quality in the automotive industry."
              task_2="Support of the software quality managers in a customer project to implement ASPICE Level 2 processes"
              task_3="Work with the agile process team during piloting of machine learning software processes"
            />
            <div className="h-16 border-2 border-primary mx-auto"></div>
            <WorkExperience
              image={sologo}
              start_month="Sep"
              start_year={2019}
              end_month="Sep"
              end_year={2021}
              employer="Sophisticates"
              job_title="Full-Stack-Developer"
              job_type="Working Student"
              description="As a full-stack developer, I worked in the design, development, and deployment of end-to-end solutions. Leveraging a comprehensive skill set, I seamlessly bridged the gap between front-end and back-end development, ensuring the creation and improvement of robust and user-friendly applications."
              task_1="Full-Stack development of cloud-based web applications with Ruby on Rails, hosted on AWS Servers"
              task_2="Conception and development of ideas to simplify processes with the help of modern software solutions"
              task_3="Coordination of the project flow from requirements analysis to software Go-Live"
            />
            <div className="h-16 border-2 border-primary mx-auto"></div>
            <div className="h-12 bg-primary border-primary w-12 border-2 rounded-full mx-auto"></div>
          </div>
          <p>
            Lebenslauf abbilden (Berufliche Stationen, Zertifikate(Intercultural
            Management, AWS 1, AWS 2, Bankfachwissen kompakt), Bildungsweg)
          </p>
        </section>
        <section>
          <SectionHeadline title="Projects" />
          <p>
            * GreenFactory, ValidationAsAService, Brokerware, SPT-Generator,
            Bachelorthesis, Masterthesis, Autonomous Driving Challenge, Solar
            Consultant Tool,
          </p>
        </section>
        <section>
          <SectionHeadline title="Services" />
        </section>
        <section>
          <SectionHeadline title="Contact" />
        </section>
      </body>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
