export function getAvatarData(name, colors) {
    const safeName = name || "User";
    const initials = safeName
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const color = colors[safeName.charCodeAt(0) % colors.length];

    return { initials, color };
}