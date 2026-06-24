import React, { useState } from "react"; // useState add kiya fake loading ke liye
import Search from "./Search";
import { locations, priceRanges, propertyTypeNames } from "../../../data";
import {
  CheckBadgeIcon,
  MapPinIcon,
  BanknotesIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useHomeHero } from "../../../utils/feature";
import Loader from "../../common/Loader";

const Hero = () => {
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

  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };

  return (
    <section className="w-full bg-[linear-gradient(to_bottom,#60a5fa,#ffffff)] flex justify-center items-start px-5 py-10">
      <div className="text-center max-w-5xl md:mt-20 mt-8 flex flex-col items-center">
        <p className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/60 shadow-lg text-blue-600 text-sm uppercase font-semibold hover:scale-105 transition-transform cursor-default">
          <CheckBadgeIcon className="w-5 h-5 text-blue-500 animate-pulse" />{" "}
          PREMIUM PROPERTY MANAGEMENT
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-black mt-6 leading-tight">
          Find Your Next Home,{" "}
          <span className="text-blue-500">Effortlessly</span>
        </h1>

        <p className="text-lg text-gray-800 max-w-2xl mt-4">
          A modern, premium property booking platform...
        </p>

        <div className="mt-12 w-full max-w-5xl bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center border border-gray-50">
          <Search
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

          <Search
            icon={BanknotesIcon}
            label="Price Range"
            value={price}
            options={priceRanges}
            onSelect={handleSelect(setPrice)}
            isOpen={activeDropdown === "price"}
            toggleDropdown={() => toggleDropdown("price")}
          />

          <Search
            icon={HomeIcon}
            label="Property Type"
            value={propertyType}
            options={propertyTypeNames}
            isLast={true}
            onSelect={handleSelect(setPropertyType)}
            isOpen={activeDropdown === "property"}
            toggleDropdown={() => toggleDropdown("property")}
          />

          <button
            onClick={handleSearchClick}
            disabled={isSearching}
            className={`w-full md:w-auto px-6 py-2 md:px-10 md:py-4 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ml-0 md:ml-2 
              ${isSearching ? "bg-blue-400 cursor-wait" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 hover:shadow-2xl text-white"}`}
          >
            {isSearching ? (
              <Loader />
            ) : (
              <>
                <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
                <span className="font-bold">Search</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
