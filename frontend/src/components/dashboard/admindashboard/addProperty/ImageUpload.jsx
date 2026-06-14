import React from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

const ImageUpload = () => {
  return (
    <div className="w-96">
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition-all">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <CloudArrowUpIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Upload Images
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Drag and drop high-resolution
            </p>
            <p className="text-sm text-gray-600 mb-4">
              architectural photography here.
            </p>
            <p className="text-xs text-gray-500">JPG, PNG up to 20MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
