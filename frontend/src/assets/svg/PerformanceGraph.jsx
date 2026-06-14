import React from 'react';

const PerformanceGraph = ({ data }) => {
  if (!data || data.length === 0) return null;

  const width = 500;
  const height = 200;
  const padding = 40;
  
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const points = data.map((d, i) => {
    const x = padding + (i * (width - 2 * padding) / (data.length - 1));
    const y = height - padding - ((d.value - minValue) / range * (height - 2 * padding));
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        {/* Gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {[0, 1, 2, 3].map(i => {
          const y = padding + (i * (height - 2 * padding) / 3);
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Line */}
        <polyline
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          className="drop-shadow-sm"
        />

        {/* Area fill */}
        <polyline
          fill="url(#areaGradient)"
          stroke="none"
          points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
        />

        {/* Data Points */}
        {data.map((d, i) => {
          const x = padding + (i * (width - 2 * padding) / (data.length - 1));
          const y = height - padding - ((d.value - minValue) / range * (height - 2 * padding));
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="#fff"
              stroke="#3b82f6"
              strokeWidth="2"
              className="hover:r-6 transition-all cursor-pointer"
            />
          );
        })}

        {/* Labels */}
        {data.map((d, i) => {
          const x = padding + (i * (width - 2 * padding) / (data.length - 1));
          return (
            <text
              key={i}
              x={x}
              y={height - padding / 2}
              textAnchor="middle"
              className="text-[10px] fill-slate-400 font-medium"
            >
              {d.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default PerformanceGraph;
