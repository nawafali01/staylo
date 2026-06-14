const MessageCard = ({ message, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group mb-4"
    >
      {message.unread && (
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-blue-600 rounded-r-lg" />
      )}

      <div className="flex items-center gap-5">
        <div className="relative">
          <img
            src={message.image}
            alt={message.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            {message.name}
          </h3>
          <p className="text-blue-600 font-semibold text-[15px] mt-0.5">
            {message.subject}
          </p>
          <p className="text-gray-400 text-sm mt-1 line-clamp-1 max-w-[500px]">
            {message.preview}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
          {message.time}
        </span>

        <div className="flex gap-3 items-center">
          {message.unread && (
            <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded font-black uppercase tracking-tighter">
              Unread
            </span>
          )}

          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            View Full Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default MessageCard;
