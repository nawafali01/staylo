import { Outlet } from "react-router-dom";
import SideBar from "../common/SideBar";
import DashboardNavbar from "../common/DashboardNavbar";

export default function DashboardLayout({
  links,
  userName,
  userRole,
  userImage,
  searchPlaceholder,
  isAdmin,
}) {
  return (
    <div className="flex">
      <SideBar links={links} isAdmin={isAdmin} />

      <div className="flex-1 flex flex-col min-h-screen bg-slate-50">
        <DashboardNavbar
          userName={userName}
          userRole={userRole}
          userImage={userImage}
          searchPlaceholder={searchPlaceholder}
        />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
