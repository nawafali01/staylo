export default function StorySection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
          alt="Architecture"
          className="rounded-2xl w-full object-cover h-80"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-xl px-5 py-3 shadow-lg">
          <p className="text-3xl font-black text-gray-900">150+</p>
          <p className="text-xs text-gray-500 mt-1">Curated Properties across Europe and North America</p>
        </div>
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">The Story of Curation</h2>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          Founded by a collective of architects and real estate visionaries, Architectural Curator began with a simple premise: rentals should be as inspiring as the destinations they inhabit. We moved away from the quantity-first model to focus on spaces that possess a unique soul and structural integrity.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9V9h2v4zm0-6H9V5h2v2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Mission statement</p>
              <p className="text-gray-500 text-xs mt-1">To empower travelers and long-term residents with access to architecturally significant homes through a seamless, tech-enabled platform.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Vision statement</p>
              <p className="text-gray-500 text-xs mt-1">Defining the future of luxury living by making high-design accessibility a standard for the global rental market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
