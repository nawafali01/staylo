import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipboardDocumentCheckIcon, DocumentChartBarIcon } from "@heroicons/react/24/outline";
import { openApproveListingsModal, openGenerateReportsModal } from "../../../redux/slices/modalSlice";
import ApproveListingsModal from "../../modal/ownerDashboardmodal/ApproveListingsModal";
import GenerateReportsModal from "../../modal/ownerDashboardmodal/GenerateReportsModal";
import StatsOverview from "./StatsOverview";
import RecentActivity from "./RecentActivity";
import PriorityProperties from "./PriorityProperties";
import RecentUsersTable from "./RecentUsersTable";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { approveListingsModalOpen, generateReportsModalOpen } = useSelector(
    (state) => state.modal
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header with buttons */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back, <span className="font-semibold">Alexander Wright</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(openApproveListingsModal())}
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2 transition-all active:scale-95 bg-white"
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
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-5">
          <RecentActivity />
        </div>
        <div className="lg:col-span-7">
          <PriorityProperties />
        </div>
      </div>

      <RecentUsersTable />

      {/* Modals */}
      <ApproveListingsModal isOpen={approveListingsModalOpen} />
      <GenerateReportsModal isOpen={generateReportsModalOpen} />
    </div>
  );
};

export default AdminDashboard;
