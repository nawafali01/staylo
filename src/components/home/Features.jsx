import React from 'react';
import { featuresData } from './featuresData'; // Data import kiya

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple. Fast. Reliable.
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg ">
            Three easy steps to your new home.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50/50"
            >
              {/* Icon */}
              <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                {item.icon}
              </div>
              
              {/* Heading */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;