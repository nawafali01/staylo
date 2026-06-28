import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { homeProperties, propertyCardIconMap } from '../../../data';

const PropertyCards = () => {
  return (
    <section className="p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <header>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 transition hover:text-blue-500 cursor-pointer">
            Featured Properties
          </h2>
          <p className="text-gray-500">Hand picked premium rental just for you.</p>
        </header>
        <Link to="/properties" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition">
          View all properties <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeProperties.map((property) => (
          <article key={property.id} className="group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">

            <div className="relative overflow-hidden cursor-pointer">
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className={`absolute top-4 left-4 z-20 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0
                px-3 py-1 rounded-md flex items-center gap-2 shadow-lg font-bold text-[10px] tracking-wider uppercase
                ${property.status === 'Available' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                {property.status === 'Available' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                )}
                <span>{property.status}</span>
              </div>

              <div className="absolute bottom-4 right-4 text-white/90 backdrop-blur-sm bg-blue-600 px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                {property.price}
                <span className="text-[10px] font-medium ml-1 text-blue-100">/mo</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 transition-colors group-hover:text-blue-600 cursor-pointer">
                {property.title}
              </h3>

              <div className="flex items-center gap-1 text-gray-400 mb-4">
                <MapPinIcon className="h-4 w-4" />
                <span className="text-xs">{property.location}</span>
              </div>

              <div className="border-t border-gray-100 mb-5"></div>

              <footer className="flex justify-between text-gray-600">
                {property.stats.map((stat, index) => {
                  const Icon = propertyCardIconMap[stat.icon];
                  return (
                    <div key={index} className="flex flex-col items-center gap-1">
                      {Icon && <Icon className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />}
                      <span className="text-[10px] font-medium text-gray-700 uppercase">{stat.label}</span>
                    </div>
                  );
                })}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PropertyCards;
