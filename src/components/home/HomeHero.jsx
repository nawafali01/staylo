import React from "react";
import HomeSearch from "./HomeSearch";
import { locations, priceRanges, propertyTypes } from "../../data";
import {
  CheckBadgeIcon,
  MapPinIcon,
  BanknotesIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useHomeHero } from "../../utils/feature";

const HomeHero = () => {
  const {
    activeDropdown,
    location,
    setLocation,
    price,
    setPrice,
    propertyType,
    setPropertyType,
    toggleDropdown,
    handleSelect,
  } = useHomeHero();

  return (
    <section className="min-h-screen w-full bg-[linear-gradient(to_bottom,#60a5fa,#ffffff)] flex justify-center items-start px-5 py-10">
      <div className="text-center max-w-5xl mt-20 flex flex-col items-center">
        <p className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/60 shadow-lg text-blue-600 text-sm uppercase font-semibold">
          <CheckBadgeIcon className="w-5 h-5 text-blue-500" /> PREMIUM PROPERTY
          MANAGEMENT
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-black mt-6 leading-tight">
          Find Your Next Home,{" "}
          <span className="text-blue-500">Effortlessly</span>
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mt-4">
          A modern, premium property booking platform...
        </p>

        <div className="mt-12 w-full max-w-5xl bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center border border-gray-50">
          <HomeSearch
            icon={MapPinIcon}
            label="Location"
            value={location}
            placeholder="Where to?"
            isInput={true}
            options={locations}
            onChange={setLocation}
            onSelect={handleSelect(setLocation)}
            isOpen={activeDropdown === "location"}
            toggleDropdown={() => toggleDropdown("location")}
          />

          <HomeSearch
            icon={BanknotesIcon}
            label="Price Range"
            value={price}
            options={priceRanges}
            onSelect={handleSelect(setPrice)}
            isOpen={activeDropdown === "price"}
            toggleDropdown={() => toggleDropdown("price")}
          />

          <HomeSearch
            icon={HomeIcon}
            label="Property Type"
            value={propertyType}
            options={propertyTypes}
            isLast={true}
            onSelect={handleSelect(setPropertyType)}
            isOpen={activeDropdown === "property"}
            toggleDropdown={() => toggleDropdown("property")}
          />

          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ml-0 md:ml-2">
            <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
            <span className="font-bold">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
