import {
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { openApproveListingsModal, openGenerateReportsModal } from "../../../../redux/slices/modalSlice";
import ApproveListingsModal from "../../../modal/ownerDashboardmodal/ApproveListingsModal";
import GenerateReportsModal from "../../../modal/ownerDashboardmodal/GenerateReportsModal";

const Header = ({ name }) => {
  const dispatch = useDispatch();
  const { approveListingsModalOpen, generateReportsModalOpen } = useSelector((state) => state.modal);

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back, <span className="text-blue-600 font-medium">{name}</span>
        </p>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={() => dispatch(openApproveListingsModal())}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95"
        >
          <ClipboardDocumentCheckIcon className="w-5 h-5" /> Approve Listings
        </button>
        <button 
          onClick={() => dispatch(openGenerateReportsModal())}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
        >
          <DocumentChartBarIcon className="w-5 h-5" /> Generate Reports
        </button>
      </div>

      {/* Modals */}
      <ApproveListingsModal isOpen={approveListingsModalOpen} />
      <GenerateReportsModal isOpen={generateReportsModalOpen} />
    </div>
  );
};

export default Header;
