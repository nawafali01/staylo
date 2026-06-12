import { earningsSummaryChartData, payoutData } from "../../../../data/index.js";

const EarningsSummary = () => {
  return (
    <div className="bg-white rounded-4xl p-6 border border-gray-100 shadow-md h-full overflow-hidden">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Earnings Summary</p>
          <h2 className="text-3xl font-extrabold text-blue-600 tracking-tight">{payoutData.totalEarnings}</h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          +12.4%
          <span className="text-gray-400">this month</span>
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6 h-40 items-end">
        {earningsSummaryChartData.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="relative w-full h-full flex items-end">
              <div
                style={{ height: `${item.height}%` }}
                className={`w-full rounded-t-3xl transition-all duration-500 ${i === earningsSummaryChartData.length - 1 ? 'bg-orange-500' : 'bg-blue-500/20 group-hover:bg-blue-400/30'}`}
              />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[11px] text-gray-600 font-semibold px-2 py-1 rounded-full shadow-sm">
                {item.value}
              </div>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-3xl p-4 bg-orange-50 border border-orange-100 flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest mb-1">Available for Payout</p>
          <h4 className="text-2xl font-bold text-gray-900">{payoutData.availableAmount}</h4>
        </div>
        <div className="p-3 bg-orange-100 rounded-2xl text-orange-600">
          <span className="text-xl">💳</span>
        </div>
      </div>

      <button className="w-full py-3 bg-orange-800 text-white rounded-2xl font-bold text-sm shadow-lg shadow-orange-100/40 hover:bg-orange-900 transition-all active:scale-[0.98]">
        Request Payout
      </button>
    </div>
  );
};

export default EarningsSummary;
