export const Label = ({ children }) => (
  <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5">
    {children}
  </label>
);

export const InputField = ({ label, ...props }) => (
  <div className="w-full">
    <Label>{label}</Label>
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300 ${props.className}`}
    />
  </div>
);

export const SelectField = ({ label, options, ...props }) => (
  <div className="relative w-full">
    <Label>{label}</Label>
    <select
      {...props}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-4 bottom-3 text-slate-400 text-[10px]">
      ▼
    </span>
  </div>
);
