import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../../../data";
import Summary from "./Summary";
import Header from "./Header";
import ReservationPanel from "./ReservationPanel";
import Calendar from "./Calendar";
import { getPropertyById } from "../../../utils/feature";

const Index = () => {
  const { id } = useParams();
  const property = getPropertyById(properties, id);

  if (!property) return <p className="text-center py-10">Property not found!</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 max-w-5xl mx-auto">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="flex flex-col gap-5">
          <Summary property={property} />
          <Calendar />
        </div>
        <div className="flex flex-col gap-5">
          <ReservationPanel property={property} />
        </div>
      </div>
    </div>
  );
};

export default Index;
