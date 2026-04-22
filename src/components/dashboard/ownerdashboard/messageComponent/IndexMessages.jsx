import { useState } from "react";
import ConversationItem from "./MessageConversationItem";
import ChatHeader from "./MessageChatHeader";
import ChatMessages from "./MessageChatMessages";
import ChatInput from "./MessageChatInput";
import { chatThreads, messageHistory, inboxFilters } from "../../../../data";
import { SearchIcon } from "../../../../assets/svg";

const IndexMessages = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeChatId, setActiveChatId] = useState(1);
  const [threads, setThreads] = useState(chatThreads);
  const [history, setHistory] = useState(messageHistory);
  const [searchQuery, setSearchQuery] = useState("");

  const activeChatPartner = threads.find((thread) => thread.id === activeChatId);
  const currentMessages = history[activeChatId] || [];

  const filteredThreads = threads.filter((thread) => {
    const matchSearch =
      thread.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.property.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "unread") return matchSearch && thread.unread;
    if (activeTab === "archived") return false;
    return matchSearch;
  });

  const handleSend = (text) => {
    const newMessage = {
      id: Date.now(),
      type: "sent",
      text,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };

    setHistory((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage],
    }));

    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === activeChatId ? { ...thread, preview: text, time: "Just now" } : thread,
      ),
    );
  };

  const handleArchive = () => alert("Conversation archived!");
  const handleBlock = () => alert("User blocked!");

  const tabs = inboxFilters.map((tab) => ({
    ...tab,
    badge:
      tab.id === "unread" ? threads.filter((thread) => thread.unread).length : tab.badge,
  }));

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <div className="w-[280px] border-r border-slate-100 flex flex-col shrink-0">
        <div className="px-4 pt-5 pb-3">
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight mb-3">
            Messages
          </h2>
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
            <SearchIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input

              className="bg-transparent text-xs text-slate-600 outline-none flex-1"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-1 px-4 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:bg-slate-100"
                }`}
            >
              {tab.label}
              {tab.badge ? (
                <span
                  className={`text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ${activeTab === tab.id
                      ? "bg-white text-blue-600"
                      : "bg-orange-400 text-white"
                    }`}
                >
                  {tab.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {filteredThreads.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-8">
              No conversations found
            </p>
          ) : (
            filteredThreads.map((thread) => (
              <ConversationItem
                key={thread.id}
                conversation={thread}
                isActive={thread.id === activeChatId}
                onClick={() => setActiveChatId(thread.id)}
              />
            ))

          )}
        </div>
      </div>

      {activeChatPartner ? (
        <div className="flex-1 flex flex-col overflow-hidden">
          <ChatHeader
            user={activeChatPartner}
            onArchive={handleArchive}
            onBlock={handleBlock}
          />
          <div className="flex-1 overflow-hidden flex flex-col bg-slate-50">
            <ChatMessages
              messages={currentMessages}
              activeUser={activeChatPartner}
            />
            <ChatInput onSend={handleSend} />
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
