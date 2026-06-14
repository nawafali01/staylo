import { DoubleLinkIcon, PlayCircleIcon } from "../../../../../assets/svg";

export default function MediaLinksForm({ data, onChange }) {
  return (
    <>
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Video Tour
          </label>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            OPTIONAL
          </span>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 flex items-center gap-2 h-11 px-4 rounded-xl border border-gray-200 bg-gray-50">
            <DoubleLinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={data.videoUrl || ""}
              onChange={(event) =>
                onChange({ ...data, videoUrl: event.target.value })
              }
              placeholder="YouTube or Vimeo URL"
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="px-4 h-11 rounded-xl bg-gray-800 text-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-900 transition-colors">
            <PlayCircleIcon className="w-4 h-4" />
            Preview
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">
          Videos provide an immersive experience and increase engagement by 300%.
        </p>
      </div>

      <div className="border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Virtual Tour
          </label>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            OPTIONAL
          </span>
        </div>
        <div className="flex items-center gap-2 h-11 px-4 rounded-xl border border-gray-200 bg-gray-50">
          <span className="text-gray-400">🔗</span>
          <input
            type="text"
            value={data.virtualTourUrl || ""}
            onChange={(event) =>
              onChange({ ...data, virtualTourUrl: event.target.value })
            }
            placeholder="Matterport or 360 Tour Link"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}
