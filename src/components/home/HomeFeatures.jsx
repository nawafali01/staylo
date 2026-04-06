import React from "react";
import { featuresData, featureIconMap } from "../../data";

const HomeFeatures = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple. Fast. Reliable.
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Three easy steps to your new home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((item) => {
            const Icon = featureIconMap[item.icon];
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50/50"
              >
                <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                  {Icon ? <Icon className="w-12 h-12 text-blue-600" /> : null}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomeFeatures;