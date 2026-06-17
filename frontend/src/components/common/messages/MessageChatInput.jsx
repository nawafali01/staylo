import { useState } from "react";
import {
  AttachmentIcon,
  EmojiIcon,
  SendIcon
} from "../../../assets/svg";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  }

  function handleKey(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="px-4 py-3 border-t border-slate-100 bg-white">
      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition">

        <button
          type="button"
          title="Attach file"
          className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-500 transition rounded-lg"
        >
          <AttachmentIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          title="Emoji"
          className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-yellow-400 transition rounded-lg"
        >
          <EmojiIcon className="w-4 h-4" />
        </button>

        <input
          className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
          placeholder="Type your message here..."
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKey}
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          className="w-9 h-9 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition active:scale-95"
        >
          <SendIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;