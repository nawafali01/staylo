import MessageAvatar from "./MessageAvatar";

const ConversationItem = ({ conversation, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition border-l-[3px] ${
      isActive
        ? "bg-blue-50 border-blue-600"
        : "border-transparent hover:bg-slate-50"
    }`}
  >
    <MessageAvatar name={conversation.name} size="md" online={conversation.unread} />
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-1 mb-0.5">
        <span
          className={`text-sm font-semibold truncate ${
            isActive ? "text-blue-700" : "text-slate-800"
          }`}
        >
          {conversation.name}
        </span>
        <span className="text-[11px] text-slate-400 shrink-0">{conversation.time}</span>
      </div>
      <p className="text-xs text-blue-500 font-medium truncate mb-0.5">
        {conversation.property}
      </p>
      <p className="text-xs text-slate-400 truncate">{conversation.preview}</p>
    </div>
    {conversation.unread && (
      <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
    )}
  </button>
);


export default ConversationItem;
