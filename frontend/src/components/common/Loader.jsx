import React from "react";

const Loader = ({ className = "", size = "w-5 h-5", color = "text-white" }) => {
  return (
    <div
      className={`${size} border-2 border-current border-t-transparent rounded-full animate-spin ${color} ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
