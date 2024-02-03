import SectionHeadline from "../../components/SectionHeadline";
import CertificateCard from "../../components/CertificateCard";
import certifications from "../../data/certifications.json";

const CertificationSection = () => {
  return (
    <section className="snap-start bg-primary py-20 rounded-0 lg:rounded-lg lg:mx-6">
      <SectionHeadline title="Certifications" textColor="white" />
      <div className="flex flex-wrap gap-6 max-w-screen-lg mx-auto px-6 lg:py-0">
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
