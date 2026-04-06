export default function SavedInsights(){
    return(
        <div className="grid grid-cols-3 gap-4 mt-6">
        <div  className="bg-blue-400 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white"> Smart Insights</h3>
        <p className="text-xs text-blue-200 mt-1"> Properties in Aspen are currently seeing high demand. Book a tour soon to secure your spot.</p>
        </div>
        <div className="bg-orange-400 rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <span className="text-2xl mb-2">🏅</span> 
        <h3 className="text-sm font-semibold text-gray-200">Premium Agent</h3>
        <p className="text-xs text-gray-400 mt-1">Dedicated concierge for your saved homes.</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-5 flex flex-col justify-center">
        <p className="text-xs text-gray-400 uppercase tracking-wide">Market Value</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">+12.4%</h3>
        <p className="text-xs text-gray-400 mt-1">Average increase in Malibu area.</p>
      </div>

        </div>
    )
}
