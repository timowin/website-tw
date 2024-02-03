import SectionHeadline from "../../components/SectionHeadline";
import ExperienceCard from "../../components/ExperienceCard";
import experienceData from "../../data/experiences.json";
import {
  parseMonthEnum,
  parseExperienceTypeEnum,
} from "../../helperFunctions/enumParsers";

const events = [
  { date: "January 2023", description: "Event 1 description" },
  { date: "February 2023", description: "Event 2 description" },
  // Add more events as needed
];

const ExperienceSection = () => {
  return (
    <section className="snap-start h-[calc(95vh)] bg-primary py-20 rounded-0 lg:rounded-lg lg:mx-6">
      <SectionHeadline title="Experience" textColor="white" />
      <div className="max-h-full flex flex-col max-w-screen-lg mx-auto px-6 lg:py-0 hide-scrollbar overflow-y-auto scroll-smooth snap-y snap-mandatory">
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
