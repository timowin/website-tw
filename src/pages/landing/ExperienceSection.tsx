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
    <section id="experience" className="snap-start">
      <div className="bg-primary py-20 my-6 rounded-0 lg:rounded-lg lg:mx-6">
        <SectionHeadline title="Professional Background" textColor="white" />
        <div className="relative flex flex-col gap-6 max-w-screen-lg mx-auto px-6 lg:px-0 lg:py-0 ">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.title}
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
              short_description={experience.short_description}
              tasks={
                (experience.tasks || []).length > 0 || !experience.tasks
                  ? experience.tasks.map((task) => [task])
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
