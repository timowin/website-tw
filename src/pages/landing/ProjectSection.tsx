import ProjectCard from "../../components/ProjectCard";
import SectionHeadline from "../../components/SectionHeadline";
import projectData from "../../data/projects.json";
import {
  parseMonthEnum,
  parseTechnologyTypeEnum,
} from "../../helperFunctions/enumParsers";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="snap-start py-8 lg:py-20 mx-auto w-full lg:w-4/5"
    >
      <SectionHeadline title="My Recent Projects" textColor="primary" />
      <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto px-4 lg:px-0">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            short_description={project.short_description}
            start_month={parseMonthEnum(project.start_month)}
            start_year={project.start_year}
            end_month={parseMonthEnum(project.end_month)}
            end_year={project.end_year}
            technologies={project.technologies.map((tech) => [
              tech[0],
              parseTechnologyTypeEnum(tech[1]),
            ])}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
