import { Link, useLocation } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import Button from "./Button";

export default function SideBar({ links, isAdmin }) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-900 h-screen sticky top-0 p-6 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-10 px-2 shrink-0">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <CubeIcon className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">
          Staylo
        </span>
      </div>

      <nav className="flex-1 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
        {links?.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.label}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
            >
              {Icon && (
                <Icon
                  className={`h-5 w-5 transition-colors ${isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-white"
                    }`}
                />
              )}
              <span className="text-sm font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-slate-800 space-y-2 mt-auto shrink-0">
        {isAdmin && (
          <Link to="/admin/add-property">
            <Button
              variant="primary"
              className="flex items-center gap-3 px-4 py-3 mb-2 w-full justify-start text-sm font-semibold text-slate-400 hover:text-white"
            >
              <PlusCircleIcon className="h-5 w-5 text-slate-500" />
              ADD NEW PROPERTY
            </Button>
          </Link>
        )}

        <Button
          variant="secondary"
          className="flex items-center gap-3 px-4 py-3 w-full justify-start text-sm font-semibold text-slate-400 hover:text-white"
        >
          <QuestionMarkCircleIcon className="h-5 w-5 text-slate-500" />
          SUPPORT
        </Button>

        <Button
          variant="secondary"
          className="flex items-center gap-3 px-4 py-3 w-full justify-start text-sm font-semibold text-slate-400 hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-slate-500" />
          LOGOUT
        </Button>
      </div>
    </aside>
  );
}
