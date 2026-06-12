import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutWhyUs from "./AboutWhyUs";
import AboutTeam from "./AboutTeam";
import AboutCTA from "./AboutCTA";

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-900">
      <AboutHero />
      <AboutStory />
      <AboutWhyUs />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
