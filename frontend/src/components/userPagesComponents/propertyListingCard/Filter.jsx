import { MapPinIcon } from "@heroicons/react/24/outline";

const Filter = ({ data }) => {
  return (
    <div className="w-64 border rounded-xl p-5 shadow-md sticky top-24 bg-white h-fit">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-lg">Filter</h1>
        <button className="text-blue-600 p-1 rounded-lg">Clear all</button>
      </div>

      <div>
        <p className="text-xs text-black font-semibold mb-1">LOCATION</p>
        <div className="flex items-center border border-gray-200 rounded-lg pl-1 bg-gray-200">
          <MapPinIcon className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Where to?"
            className="outline-none w-full text-sm p-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-black font-semibold">PRICE RANGE</p>
          <p className="text-blue-600 text-sm">$50-$4500</p>
        </div>
        <input
          type="range"
          min="500"
          max="4500"
          defaultValue="2500"
          className="w-full mt-2 accent-blue-500 appearance-none bg-gray-200 rounded-full h-2"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-black">BEDROOMS</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {data?.bedrooms?.map((option) => (
            <button
              key={option}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm font-medium bg-gray-500 text-white"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold">PROPERTY TYPE</p>
        <div className="mt-2 space-y-2">
          {data?.propertyTypes?.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-black font-semibold">Available Now Only</p>
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Filter;
