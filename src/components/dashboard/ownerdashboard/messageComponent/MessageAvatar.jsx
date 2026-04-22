import { avatarColors } from "../../../../data/index";

const MessageAvatar = ({ name, size = "md", online = false }) => {
  const initials = name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("")
    .slice(0, 2);

  const color = avatarColors[name.charCodeAt(0) % avatarColors.length];

  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-12 h-12 text-sm",
  };


  return (
    <div className="relative shrink-0">
      <div
        className={`${sizeMap[size]} ${color} rounded-full flex items-center justify-center font-bold text-white`}
      >
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full" />
      )}
    </div>
  );
};

export default MessageAvatar;
