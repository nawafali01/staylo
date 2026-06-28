import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Form from "./Form";
import Map from "./Map";

export default function Index() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-10 items-start">
        <Info />
        <Form />
      </div>

      <Map />
    </div>
  );
}
