import MessageAvatar from "./MessageAvatar";
import {
  HomeSmallIcon,
  ArchiveIcon,
  BlockIcon,
  MoreIcon
} from "../../../assets/svg";

function MessageChatHeader({ user, onArchive, onBlock }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 bg-white">
      <MessageAvatar name={user.name} size="lg" online />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-slate-800">{user.name}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <HomeSmallIcon className="w-3 h-3 text-slate-400" />
          <p className="text-xs text-blue-500 font-medium">{user.property}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition"
        >
          View Booking
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition"
        >
          View Property
        </button>
      </div>

      <div className="flex items-center gap-1 ml-1">
        <button
          type="button"
          onClick={onArchive}
          title="Archive conversation"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
        >
          <ArchiveIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onBlock}
          title="Block user"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition"
        >
          <BlockIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          title="More options"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
        >
          <MoreIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default MessageChatHeader;