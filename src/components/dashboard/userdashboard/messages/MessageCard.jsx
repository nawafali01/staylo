const MessageCard = ({ message }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4 hover:shadow-md transition-shadow ${message.unread ? "border-l-4 border-l-blue-600" : ""}`}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        {message.image ? (
          <img
            src={message.image}
            alt={message.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
            {message.initials}
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-gray-900 text-sm">
            {message.name}
          </span>
          <span className="text-xs text-gray-400">{message.time}</span>
        </div>
        <p
          className={`text-sm mb-1 ${message.unread ? "text-blue-600 font-medium" : "text-gray-500"}`}
        >
          {message.subject}
        </p>
        <p className="text-xs text-gray-400 truncate">{message.preview}</p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {message.unread && (
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            UNREAD
          </span>
        )}
        <button
          className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${message.unread ? "bg-blue-600 text-white hover:bg-blue-700" : "text-blue-600 hover:underline"}`}
        >
          View Full Message
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
