import SectionHeadline from "../../components/SectionHeadline";
import CertificateCard from "../../components/CertificateCard";
import certifications from "../../data/certifications.json";

const CertificationSection = () => {
  return (
    <section className="bg-primary rounded-lg mx-6">
      <SectionHeadline title="Certifications" textColor="white" />
      <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto pb-20">
        {certifications.map((certificate) => (
          <CertificateCard
            image_name={certificate.image_name}
            title={certificate.title}
            location={certificate.location}
            date_of_completion={certificate.date}
          />
        ))}
      </div>
    </section>
  );
};
export default CertificationSection;
