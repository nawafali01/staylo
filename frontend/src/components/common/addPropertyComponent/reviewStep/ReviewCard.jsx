import { EditIcon } from "../../../../assets/svg";

export default function ReviewCard({ title, subtitle, onEdit, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors"
        >
          <EditIcon className="w-3.5 h-3.5" />
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}
