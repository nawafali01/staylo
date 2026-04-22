import MessageList from "./MessageList";
import { messages } from "../../../../data/index";

const UserDashboardMessages = () => {
  return (
    <>
      {" "}
      {/* Extra divs nikaal diye kyunke layout flex sambhaal raha hai */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Messages</h1>
      <p className="text-sm text-gray-500 mb-6">
        Welcome back, Alex Rivera. You have{" "}
        <span className="text-blue-600 font-medium cursor-pointer">
          2 unread messages
        </span>
        .
      </p>
      <MessageList messages={messages} />
      <div className="flex justify-center mt-8">
        <button className="px-8 py-2.5 bg-gray-200 border border-gray-300 rounded-lg text-sm text-gray-800 hover:bg-gray-300 transition-colors">
          Load Older Conversations
        </button>
      </div>
    </>
  );
};

export default UserDashboardMessages;
