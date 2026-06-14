import MessageAvatar from "./MessageAvatar";
import { useChatScroll } from "../../../../utils/feature";

const DateLabel = ({ label }) => (
  <div className="flex items-center justify-center my-4">
    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 rounded-full px-3 py-1 tracking-wide">
      {label}
    </span>
  </div>
);

const SystemMessage = ({ text }) => (
  <div className="flex justify-center my-3">
    <span className="text-[11px] text-slate-500 bg-slate-100 rounded-full px-4 py-1.5 max-w-xs text-center">
      {text}
    </span>
  </div>
);

const ChatMessages = ({ messages, activeUser }) => {
  const bottomRef = useChatScroll(messages);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
      {messages.map((msg) => (
        <div key={msg.id}>
          {msg.showDateLabel && <DateLabel label={msg.showDateLabel} />}
          {msg.type === "system" && <SystemMessage text={msg.text} />}


          {msg.type === "sent" && (
            <div className="flex justify-end mb-2">
              <div className="max-w-[65%]">
                <div className="bg-blue-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                  {msg.text}
                </div>
                <p className="text-[10px] text-slate-400 text-right mt-1 mr-1">{msg.time}</p>
              </div>
            </div>
          )}

          {msg.type === "received" && (
            <div className="flex items-end gap-2 mb-2">
              <MessageAvatar name={activeUser.name} size="sm" />
              <div className="max-w-[65%]">
                <div className="bg-white border border-slate-100 text-slate-700 text-sm rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  {msg.text}
                </div>
                <p className="text-[10px] text-slate-400 mt-1 ml-1">{msg.time}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessages;