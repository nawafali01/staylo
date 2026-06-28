import React from "react";
import Hero from "./Hero";
import Story from "./Story";
import WhyUs from "./WhyUs";
import Team from "./Team";
import CTA from "./CTA";

export default function Index() {
  return (
    <main className="font-sans text-gray-900">
      <Hero />
      <Story />
      <WhyUs />
      <Team />
      <CTA />
    </main>
  );
}
