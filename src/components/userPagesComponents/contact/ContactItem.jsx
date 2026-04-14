import { useState } from "react";

export default function ContactItem({ icon, label, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-start gap-4 px-4 py-4 rounded-xl transition-all duration-200 cursor-default
        ${hovered ? "bg-blue-50" : "bg-transparent"}`}
    >
      <div
        className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all duration-200
          ${hovered ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-0.5">
          {label}
        </p>
        <div className="text-sm font-medium text-slate-800 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
