import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <ContactHero />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-10 items-start">
        <ContactInfo />
        <ContactForm />
      </div>

      <ContactMap />
    </div>
  );
}
