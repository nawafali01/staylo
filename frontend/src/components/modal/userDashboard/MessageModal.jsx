import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import socket from "../../../services/socket.js";

const MessageModal = ({ message, onClose }) => {
  const [replyText, setReplyText] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: "initial",
      senderName: message?.name || "Unknown Sender",
      senderId: message?.senderId,
      text: message?.fullMessage || message?.preview || "No message content.",
      timestamp: message?.time || new Date().toLocaleTimeString(),
      isInitial: true
    }
  ]);

  const messagesEndRef = useRef(null);
  const currentLoggedInUser = JSON.parse(localStorage.getItem("user"));
  const myId = currentLoggedInUser?._id || "logged_in_user_id";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  useEffect(() => {
    if (!socket) return;

    const handleIncomingMessage = (data) => {
      if (data.conversationId === message.id) {
        setConversations((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleIncomingMessage);

    return () => {
      socket.off("receive_message", handleIncomingMessage);
    };
  }, [message.id]);

  const handleSendReply = (e) => {
    e.stopPropagation();
    if (!replyText.trim()) return;

    const payload = {
      conversationId: message.id,
      senderId: myId,
      senderName: currentLoggedInUser?.name || "Alex Rivera",
      receiverId: message.senderId || "receiver_id_placeholder",
      text: replyText,
      subject: `RE: ${message.subject}`,
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", payload);

    setConversations((prev) => [...prev, payload]);
    setReplyText("");
  };

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative z-[110] bg-white w-full max-w-lg h-[80vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-slate-200 animate-in fade-in zoom-in duration-200">

        <div className="p-4 border-b flex justify-between items-center bg-white shadow-sm shrink-0">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{message?.name || "Unknown Sender"}</h2>
            <p className="text-xs text-green-500 font-medium">Active Chat Thread</p>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 p-2">&times;</button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {conversations.map((msg, index) => {
            const isMe = msg.senderId === myId;

            return (
              <div key={index} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                {msg.isInitial && (
                  <span className="text-xs font-semibold text-blue-600 mb-1 px-1">
                    Subject: {message?.subject}
                  </span>
                )}

                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isMe
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                >
                  <p>{msg.text}</p>
                </div>

                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white flex items-end gap-2 shrink-0">
          <textarea
            rows="1"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendReply(e);
              }
            }}
            placeholder="Type a message..."
            className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm resize-none max-h-24 transition-all"
          />
          <button
            onClick={handleSendReply}
            className="px-5 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 transition active:scale-95 shadow-md shadow-blue-100 h-full"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default MessageModal;