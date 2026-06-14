export default function InfoField({ label, value, big }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className={`font-bold text-gray-900 ${big ? "text-base" : "text-sm"}`}>
        {value}
      </p>
    </div>
  );
}
