export default function AboutCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl px-10 py-16 text-center">
        <h2 className="text-3xl font-bold text-white leading-snug">
          Ready to find your next architectural exhibit?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition text-sm">
            Browse Gallery
          </button>
          <button className="border border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-blue-700 transition text-sm">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
