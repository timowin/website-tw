import ProjectCard from "../../components/ProjectCard";
import SectionHeadline from "../../components/SectionHeadline";
import projectData from "../../data/projects.json";
import {
  parseMonthEnum,
  parseTechnologyTypeEnum,
} from "../../helperFunctions/enumParsers";

const ProjectSection = () => {
  return (
    <section className="mx-auto w-4/5">
      <SectionHeadline title="Projects" textColor="primary" />
      <div className="max-w-screen-lg mx-auto flex flex-col gap-6">
        {projectData.map((project) => (
          <ProjectCard
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
