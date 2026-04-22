import { earningsSummaryChartData, payoutData } from "../../../../data/index.js";

const EarningsSummary = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm h-full">
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Earnings Summary</h3>
        <h2 className="text-4xl font-extrabold text-blue-600 tracking-tight">{payoutData.totalEarnings}</h2>
      </div>

      <div className="flex items-end justify-between h-48 gap-3 mb-10 px-2">
        {earningsSummaryChartData.map((item, i) => (
          <div key={i} className="flex-1 group relative">
            <div 
              style={{ height: `${item.height}%` }} 
              className={`w-full rounded-t-xl transition-all duration-500 cursor-pointer ${i === earningsSummaryChartData.length - 1 ? 'bg-orange-800' : 'bg-blue-100 group-hover:bg-blue-200'}`}
            ></div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase">
              {item.month}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest mb-1">Available for Payout</p>
          <h4 className="text-2xl font-bold text-gray-900">{payoutData.availableAmount}</h4>
        </div>
        <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
          <span className="text-xl">💳</span>
        </div>
      </div>


      <button className="w-full py-4 bg-orange-800 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-100 hover:bg-orange-900 transition-all active:scale-[0.98]">
        Request Payout
      </button>
    </div>
  );
};

export default EarningsSummary;
