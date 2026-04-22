import { Link, useLocation } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  CubeIcon,
  Squares2X2Icon,
  BookOpenIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import { userDashboardSidebarLinksData } from "../../../data/index";

export default function Sidebar() {
  const location = useLocation();

  const icons = {
    dashboard: Squares2X2Icon,
    bookings: BookOpenIcon,
    saved: HeartIcon,
    messages: ChatBubbleOvalLeftIcon,
    settings: Cog6ToothIcon,
  };

  const links = userDashboardSidebarLinksData.map((link) => ({
    ...link,
    icon: icons[link.id],
  }));

  return (
    <aside className="w-64 bg-slate-900 min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <CubeIcon className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">
          Staylo
        </span>
      </div>

      <nav className="flex-1 space-y-1.5">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-colors ${isActive ? "text-white" : "text-slate-500 group-hover:text-white"}`}
              />
              <span className="text-sm font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all font-semibold text-sm group">
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-slate-500 group-hover:text-red-500" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
