import EducationCard from "../../components/EducationCard";
import SectionHeadline from "../../components/SectionHeadline";
import educationData from "../../data/educations.json";
import {
  parseExperienceTypeEnum,
  parseMonthEnum,
} from "../../helperFunctions/enumParsers";

const EducationSection = () => {
  return (
    <section className="mx-auto w-4/5 py-20">
      <SectionHeadline title="Educational Path" textColor="primary" />
      <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto">
        {educationData.map((education) => (
          <EducationCard
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
