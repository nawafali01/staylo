import React from 'react';
import { XMarkIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { closeGenerateReportsModal } from '../../../redux/slices/modalSlice';
import { monthlyReportData } from '../../../data/index';
import PerformanceGraph from '../../../assets/svg/PerformanceGraph';

const GenerateReportsModal = ({ isOpen }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeGenerateReportsModal());
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] transition-opacity"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto pointer-events-auto border border-slate-200 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white border-b border-slate-100 px-8 py-6 flex items-start justify-between rounded-t-3xl border-slate-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-xl">
                <ChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Performance Reports
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Analytical overview of your portfolio performance
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

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Revenue</span>
                <div className="text-3xl font-bold text-slate-900 mt-1">$42,500</div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-bold mt-2">
                  <ArrowTrendingUpIcon className="w-4 h-4" />
                  +12.5%
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Avg. Occupancy</span>
                <div className="text-3xl font-bold text-slate-900 mt-1">84%</div>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-bold mt-2">
                  <ArrowTrendingUpIcon className="w-4 h-4" />
                  +5.2%
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Revenue Growth (2024)</h4>
              <PerformanceGraph data={monthlyReportData} />
            </div>

            <div className="bg-blue-600 p-6 rounded-2xl text-white">
              <h5 className="font-bold text-lg mb-1">Portfolio Insight</h5>
              <p className="text-blue-100 text-sm leading-relaxed">
                Your revenue has increased by 15% this quarter compared to the last. Most of your traffic is coming from premium architectural enthusiasts.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/30"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateReportsModal;
