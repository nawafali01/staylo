const MessageModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl animate-in zoom-in duration-200">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{message?.name || "Unknown Sender"}</h2>
            <p className="text-sm text-gray-500 mt-1">{message?.time}</p>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-400">
            &times;
          </button>
        </div>
        <div className="p-6">
          <h4 className="text-blue-600 font-semibold mb-4">
            {message?.subject}
          </h4>
          <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-100 pl-4">
            "{message?.fullMessage || message?.preview || "No message content available."}"
          </p>
        </div>
        <div className="p-4 border-t flex justify-end gap-2 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 font-medium"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
