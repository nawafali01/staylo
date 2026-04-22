import { ClipboardDocumentCheckIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

const Header = ({ name }) => (
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="text-gray-600 mt-1">
        Welcome back, <span className="text-blue-600 font-medium">{name}</span>
      </p>
    </div>
    <div className="flex gap-3">
      <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2">
        <ClipboardDocumentCheckIcon className="w-5 h-5" /> Approve Listings
      </button>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
        <DocumentChartBarIcon className="w-5 h-5" /> Generate Reports
      </button>
    </div>
  </div>
);

export default Header;