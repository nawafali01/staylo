import { SimpleCheckIcon } from "../../../../assets/svg";

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-8 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <SimpleCheckIcon className="w-8 h-8 text-green-500 stroke-[2.5]" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Property Submitted Successfully!
        </h2>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          Your listing is now being processed. Our team will verify the details
          shortly.
        </p>

        <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 mb-6">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Property ID:
          </span>
          <span className="text-sm font-bold text-orange-600">
            #P{Math.floor(10000 + Math.random() * 90000)}
          </span>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors mb-3 text-sm"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-xl transition-colors text-sm"
        >
          Add Another Property
        </button>
      </div>
    </div>
  );
}
