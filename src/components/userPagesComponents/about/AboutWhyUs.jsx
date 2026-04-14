import { aboutFeatures, aboutFeatureIcons } from "../../data";

export default function AboutWhyUs() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-start">
          Why Choose Us
        </h2>
        

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {aboutFeatures.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6">
              <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <span
                  className="inline-block"
                  dangerouslySetInnerHTML={{ __html: aboutFeatureIcons[f.icon] }}
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-sm">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-500 text-xs leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
