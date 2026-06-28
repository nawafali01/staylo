const FormInput = ({
  label,
  value,
  onChange,
  type = "text",
  optional = false,
  readOnly = false,
  actionLabel,
  onAction,
}) => {
  return (
    <div>
    
      <label className="block text-[11px] font-semibold text-gray-500 tracking-wider mb-1.5 uppercase">
        {label}
        {optional && (
          <span className="text-gray-400 font-normal ml-1 normal-case">
            (optional)
          </span>
        )}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`w-full text-sm text-gray-900 bg-white rounded-lg px-3.5 py-2.5 outline-none transition
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${actionLabel ? "pr-20" : ""}
            ${readOnly ? "bg-gray-50 cursor-not-allowed" : ""}
          `}
        />

        {actionLabel && (
          <button
            onClick={onAction}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
