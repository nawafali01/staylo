import React from "react";
import PropertyForm from "./PropertyForm";
import ImageUpload from "./ImageUpload";

const AddProperty = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-20 px-10 pb-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Add New Property
          </h1>
          <p className="text-lg text-gray-600">
            Create a new listing in your architectural portfolio.
          </p>
        </div>
        <div className="flex gap-8">
          <PropertyForm />
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
