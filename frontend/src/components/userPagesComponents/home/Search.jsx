import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { handleSelectOption } from "../../../utils/feature";

const Search = ({ icon: Icon, label, value, placeholder, options, isInput, onChange, onSelect, isOpen, toggleDropdown, isLast }) => (
  <div className={`relative flex items-center gap-3 px-6 py-2 w-full md:flex-1 cursor-pointer group ${!isLast ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`} onClick={toggleDropdown}>
    <div className="bg-blue-50 p-2 rounded-full text-blue-600 shrink-0">
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </div>
    <div className="text-left flex-1">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <div className="flex items-center justify-between">
        {isInput ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent outline-none text-sm font-semibold text-gray-800 placeholder:text-gray-400 w-full"
          />
        ) : (
          <p className="text-sm font-semibold text-gray-800">{value || placeholder}</p>
        )}
        <ChevronDownIcon className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </div>

    {isOpen && (
      <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-2xl rounded-xl border border-gray-100 py-2 z-50">
        {options.map((item) => (
          <div
            key={item}
            className="px-4 py-2 hover:bg-blue-50 text-sm font-medium text-gray-700 transition-colors"
            onClick={(e) => handleSelectOption(e, item, onSelect)}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);
export default Search;
