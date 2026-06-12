import React, { useState } from "react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import {
  bedRoomOptions,
  bathRoomOptions,
  initialFormData,
} from "../../../../data/index";

const PropertyForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 bg-white rounded-2xl p-10 shadow-sm">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Property Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="E.g. The Glass Pavilion Residence"
          className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-gray-200 focus:outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Monthly Rent ($)
          </label>
          <input
            type="number"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={handleChange}
            placeholder="4500"
            className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-gray-200 focus:outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Silver Lake, Los Angeles"
            className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-gray-200 focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Bedrooms
          </label>
          <div className="relative">
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 focus:bg-gray-200 focus:outline-none transition-all appearance-none cursor-pointer"
            >
              {bedRoomOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Bathrooms
          </label>
          <div className="relative">
            <select
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 focus:bg-gray-200 focus:outline-none transition-all appearance-none cursor-pointer"
            >
              {bathRoomOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>


      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Property Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the architectural highlights..."
          rows="6"
          className="w-full px-5 py-4 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-gray-200 focus:outline-none transition-all resize-none"
        />
      </div>


      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => {
            setFormData(initialFormData);
          }}
          className="px-8 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
          onClick={() => console.log("Submitting Data:", formData)}
        >
          Add Property
        </button>
      </div>
    </div>
  );
};

export default PropertyForm;
