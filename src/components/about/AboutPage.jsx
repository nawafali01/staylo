import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./TeamSection";
import CTASection from "./CTASection";

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-900">
      <HeroSection />
      <StorySection />
      <WhyChooseUs />
      <TeamSection />
      <CTASection />
    </main>
  );
}
