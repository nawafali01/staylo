const MethodButton = ({ method, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${isActive
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-100 text-gray-400 hover:border-gray-200"
            }`}
    >
        {icon}
        {method.label}
    </button>
);

export default MethodButton;
