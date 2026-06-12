import { Link } from "react-router-dom";
export default function AboutHero() {
  return (
    <section className="bg-gray-50 py-24 text-center px-4">
      <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase border border-blue-200 px-3 py-1 rounded-full">
        Our Philosophy
      </span>
      <h1 className="mt-6 text-5xl font-black text-gray-900 leading-tight">
        About Our <span className="text-blue-600">Platform</span>
      </h1>
      <p className="mt-4 max-w-md mx-auto text-gray-500 text-base leading-relaxed">
        We curate living spaces that bridge the gap between architectural
        excellence and everyday comfort. Discover the story behind our boutique
        rental ecosystem.
      </p>
      <Link
        to="/properties"
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition inline-block"
      >
        Explore Properties
      </Link>
    </section>
  );
}
