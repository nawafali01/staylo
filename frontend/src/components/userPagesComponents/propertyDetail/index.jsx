import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Booking from "./Booking";
import Map from "./Map";
import { usePropertyDetail } from "../../../utils/feature";

const Index = () => {
  const { property } = usePropertyDetail();

  if (!property)
    return (
      <p className="text-center mt-20 text-gray-500 text-xl font-medium">
        Property not found!
      </p>
    );

  return (
    <>
      <Hero property={property} />
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-6 py-8 max-w-7xl mx-auto w-full">
        <div className="flex-1 min-w-0">
          <Info property={property} />
          <Map property={property} />
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="md:sticky md:top-6">
            <Booking property={property} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
