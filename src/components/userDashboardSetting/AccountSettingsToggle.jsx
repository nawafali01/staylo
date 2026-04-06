const ToggleSwitch = ({ value, onChange }) => {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-11 h-6 flex items-center rounded-full transition-colors duration-200 
        ${value ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <span
        className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-200
          ${value ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  );
};

export default ToggleSwitch;