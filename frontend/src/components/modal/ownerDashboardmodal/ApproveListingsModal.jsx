import React from "react";
import { XMarkIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { closeApproveListingsModal } from "../../../redux/slices/modalSlice";
import { approvedUsersList } from "../../../data/index";

const ApproveListingsModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeApproveListingsModal());
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden pointer-events-auto border border-slate-200 flex flex-col animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white border-b border-slate-100 px-8 py-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-2 rounded-xl">
                <CheckBadgeIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Approved Listings
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  List of successfully verified and approved users
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-xl transition-all duration-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 pt-4">
            <div className="space-y-4">
              {approvedUsersList.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {user.name}
                      </h4>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-slate-900 block">
                      {user.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider mt-1">
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveListingsModal;
