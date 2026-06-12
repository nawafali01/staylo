import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { closeAddPropertyModal } from "../../../redux/slices/modalSlice";
import AddPropertyFeature from "../../common/addPropertyComponent/Index";

const AddPropertyModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeAddPropertyModal());
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-6 flex items-start justify-between rounded-t-3xl z-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Add New Property
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Fill in the details to list your asset
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-xl transition-all duration-200 flex-shrink-0"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8">
            <AddPropertyFeature onSuccess={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPropertyModal;
