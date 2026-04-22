import { aboutFeatures, aboutFeatureIconList } from "../../../data/index.js";

export default function AboutWhyUs() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-start">
          Why Choose Us
        </h2>
        

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {aboutFeatures.map((feature, idx) => {
            const Icon = aboutFeatureIconList[feature.icon];
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
