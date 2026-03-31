import { NavLink } from "react-router-dom";
import {
  Squares2X2Icon,
  CalendarIcon,
  HeartIcon,
  EnvelopeIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
import { sidebarLinks } from "../../data/index";

const iconMap = {
  dashboard: Squares2X2Icon,
  bookings: CalendarIcon,
  saved: HeartIcon,
  messages: EnvelopeIcon,
  settings: Cog6ToothIcon,
};

export default function Sidebar(){
    return (
        <aside className="w-56 min-h-screen bg-white flex flex-col justify-between py-8 px-4 border-r border-slate-100">
           <div>
            <h1 className="text-blue-600 font-bold text-xl mb-10 px-2">RentArchitect</h1>
            <nav className="flex flex-col gap-1">
              {sidebarLinks.map(({label, path, icon}) => {
                 const Icon = iconMap[icon];
                 return (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all
                  ${isActive ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:bg-slate-50"}`
                }
              >
                <Icon className="w-4 h-4" />
                {label.toUpperCase()}
              </NavLink>
            );
          })}

            </nav>
            </div>
            <button className="bg-blue-600 text-white py-3 text-sm font-bold rounded-xl">
                 List Your Property
            </button>
        </aside>
    )
}
