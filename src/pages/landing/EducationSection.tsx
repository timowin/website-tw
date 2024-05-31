import EducationCard from "../../components/EducationCard";
import SectionHeadline from "../../components/SectionHeadline";
import educationData from "../../data/educations.json";
import {
  parseExperienceTypeEnum,
  parseMonthEnum,
} from "../../helperFunctions/enumParsers";

const EducationSection = () => {
  return (
    <section
      id="eduction"
      className="snap-start py-8 lg:py-20 mx-auto w-full lg:w-4/5"
    >
      <SectionHeadline title="Educational Background" textColor="primary" />
      <div className="flex flex-col gap-6 max-w-screen-lg mx-auto px-4 lg:px-0">
        {educationData.map((education) => (
          <EducationCard
            key={education.title}
            image_name={education.image_name}
            experience_type={parseExperienceTypeEnum(education.experience_type)}
            start_month={parseMonthEnum(education.start_month)}
            start_year={education.start_year}
            end_month={parseMonthEnum(education.end_month)}
            end_year={education.end_year}
            title={education.title}
            type={education.type}
            location={education.location}
            description={education.description}
            tasks={
              (education.tasks || []).length > 0 || !education.tasks
                ? education.tasks.map((task) => [task])
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
};
export default EducationSection;
