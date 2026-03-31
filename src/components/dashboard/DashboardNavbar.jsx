import { BellIcon, QuestionMarkCircleIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function DashboardNavbar(){
    return(
        <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 w-96">
            <MagnifyingGlassIcon className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search properties, bookings, or documents..."
          className="bg-transparent text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
        />
      </div>
      <div className="flex items-center gap-3">
         <button className="p-2 rounded-full">
          <BellIcon className="w-5 h-5 text-slate-500" />
        </button>
        <button className="p-2 rounded-full ">
          <QuestionMarkCircleIcon className="w-5 h-5 text-slate-500" />
        </button>
        <button className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white text-sm font-bold">
          A
        </button>
      </div>
        </div>
    )
}