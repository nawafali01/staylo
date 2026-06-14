import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const PropertySearch = () => {
  return (
    <>
      <div className="flex items-center gap-4 ">
        <div className="flex justify-between items-center bg-gray-50 border border-gray-400 gap-2 p-3 rounded-2xl w-full">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by City,neighbour"
              className="w-full pl-10 pr-4 py-2.5   rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sorted by:</span>
            <select className="border border-gray-200 rounded-xl text-sm px-3 py-2 focus:outline-none bg-white">
              <option>Newest Listing</option>
              <option>Price: Low to High</option>
              <option>Price:High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySearch;
