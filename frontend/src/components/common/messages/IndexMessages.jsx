import { useSelector } from "react-redux"; // 👈 Redux se logged-in user nikalne ke liye
import { toast } from "react-hot-toast";
import { useChatMessages } from "../../../utils/feature";
import { tabsConfig } from "../../../data";
import ConversationItem from "./MessageConversationItem";
import ChatHeader from "./MessageChatHeader";
import ChatMessages from "./MessageChatMessages";
import ChatInput from "./MessageChatInput";
import { SearchIcon } from "../../../assets/svg";

const IndexMessages = ({ dashboardType = "owner" }) => {
  const { state, actions } = useChatMessages(dashboardType);

  // 👥 Redux se current logged-in user (Alex Rivers) ka data uthaya
  const { user } = useSelector((state) => state.auth);

  const {
    activeTab,
    activeChatId,
    searchQuery,
    filteredThreads,
    activeChatPartner,
    currentMessages,
    threads
  } = state;

  // 🔥 AUTOMATIC LIVE TESTING FUNCTION (No Postman Needed!)
  const triggerAutoChatTest = async () => {
    if (!user) return toast.error("Jaani pehle login kar lo!");

    const testPayload = {
      receiverId: user._id, // 💡 Jugaar: Apni hi ID ko receiver bana rahe hain taake thread create ho jaye
      subject: "Inquiry about Downtown Luxury Apartment",
      text: "Salam Alex! Yeh automatic live test message hai database thread check karne ke liye.",
    };

    try {
      const response = await fetch("http://localhost:8000/api/v1/bookings/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}` // LocalStorage se direct token uthaya
        },
        body: JSON.stringify(testPayload),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("🔥 Boom! Database mein conversation successfully create ho gayi hai! Ab page refresh (F5) karo.");
      } else {
        toast.error("Backend Error: " + result.message);
      }
    } catch (error) {
      console.error("Test failed:", error);
      toast.error("Backend server nahi chal raha ya Port galat hai!");
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <div className="w-[280px] border-r border-slate-100 flex flex-col shrink-0">
        <div className="px-4 pt-5 pb-3">
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight mb-3">Messages</h2>

          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
            <SearchIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              className="bg-transparent text-xs text-slate-600 outline-none flex-1"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => actions.setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-1 px-4 pb-3">
          {tabsConfig.map((tab) => {
            const badgeCount = tab.id === "unread"
              ? threads.filter(t => t.unread).length
              : null;

            return (
              <button
                key={tab.id}
                onClick={() => actions.setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${activeTab === tab.id ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100"
                  }`}
              >
                {tab.label}
                {badgeCount > 0 && (
                  <span className={`text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ${activeTab === tab.id ? "bg-white text-blue-600" : "bg-orange-400 text-white"
                    }`}>
                    {badgeCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {filteredThreads.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-8">No conversations found</p>
          ) : (
            filteredThreads.map((thread) => (
              <ConversationItem
                key={thread.id}
                conversation={thread}
                isActive={thread.id === activeChatId}
                onClick={() => actions.setActiveChatId(thread.id)}
              />
            ))
          )}
        </div>
      </div>

      {activeChatPartner ? (
        <div className="flex-1 flex flex-col overflow-hidden">
          <ChatHeader
            user={activeChatPartner}
            onArchive={() => toast.success("Archived!")}
            onBlock={() => toast.error("Blocked!")}
          />
          <div className="flex-1 overflow-hidden flex flex-col bg-slate-50">
            <ChatMessages messages={currentMessages} activeUser={activeChatPartner} />
            <ChatInput onSend={actions.handleSend} />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-slate-300 text-sm">
          Select a conversation to start chatting
        </div>
      )}
    </div>
  );
};

export default IndexMessages;