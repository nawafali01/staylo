import React from 'react';
import { avatarSizeMap, userAvatarColors } from "../../../data";
import { getAvatarData } from "../../../utils/helpers";

function Avatar({ name = "User", size = "md", online = false }) {
  const { initials, color } = getAvatarData(name, userAvatarColors);

  const avatarClass = avatarSizeMap[size] || avatarSizeMap.md;

  return (
    <div className="relative shrink-0">
      <div
        className={`${avatarClass} ${color} rounded-full flex items-center justify-center font-bold text-white shadow-sm transition-all`}
      >
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm" />
      )}
    </div>
  );
}

export default Avatar;
