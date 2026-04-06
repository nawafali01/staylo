import MessageList from "./MessageList";
import { messages } from "../../data/index";
import DashboardNavbar from "../dashboard/userdashboard/DashboardNavbar";
import Sidebar from "../dashboard/userdashboard/Sidebar";

const UserDashboardMessages = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />

        <div className="flex-1 overflow-y-auto p-7">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Messages
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Welcome back, Alex Rivera. You have{" "}
            <span className="text-blue-600 font-medium cursor-pointer">
              2 unread messages
            </span>
            .
          </p>

          <MessageList messages={messages} />

          <div className="flex justify-center mt-8">
            <button className="px-8 py-2.5 bg-gray-200 border border-gray-300 rounded-lg text-sm text-gray-800 hover:bg-gray-200 transition-colors">
              Load Older Conversations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardMessages;
