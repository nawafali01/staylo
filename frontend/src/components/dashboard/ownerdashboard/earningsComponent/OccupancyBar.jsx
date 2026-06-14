export default function OccupancyBar({ percent }) {
    return (
        <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}