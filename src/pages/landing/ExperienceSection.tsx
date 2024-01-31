import SectionHeadline from "../../components/SectionHeadline";
import ExperienceCard from "../../components/ExperienceCard";
import experienceData from "../../data/experiences.json";
import {
  parseMonthEnum,
  parseExperienceTypeEnum,
} from "../../helperFunctions/enumParsers";

const ExperienceSection = () => {
  return (
    <section className="bg-primary rounded-lg mx-6">
      <SectionHeadline title="Experience" textColor="white" />
      <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto pb-20">
        {experienceData.map((experience) => (
          <ExperienceCard
            image_name={experience.image_name}
            experience_type={parseExperienceTypeEnum(
              experience.experience_type
            )}
            start_month={parseMonthEnum(experience.start_month)}
            start_year={experience.start_year}
            end_month={parseMonthEnum(experience.end_month)}
            end_year={experience.end_year}
            title={experience.title}
            type={experience.type}
            location={experience.location}
            description={experience.description}
            tasks={
              (experience.tasks || []).length > 0 || !experience.tasks
                ? experience.tasks.map((task) => [task])
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
