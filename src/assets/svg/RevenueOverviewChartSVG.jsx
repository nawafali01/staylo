import React from 'react';

export const RevenueSVG = (props) => (
  <svg
    viewBox="0 0 560 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Revenue Overview Chart"
    style={{ overflow: 'visible' }}
    {...props}
  >
    <defs>
      <linearGradient id="revenueFillGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.00" />
      </linearGradient>
    </defs>

    <path
      d="M40 130 C90 110 140 80 190 90 C240 100 290 50 340 30 C390 10 440 60 490 40 C515 30 535 20 520 15 L520 160 L40 160 Z"
      fill="url(#revenueFillGradient)"
    />

    <path
      d="M40 130 C90 110 140 80 190 90 C240 100 290 50 340 30 C390 10 440 60 490 40 C515 30 535 20 520 15"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g>
      <circle cx="40" cy="130" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="40" cy="130" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    <g>
      <circle cx="140" cy="80" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="140" cy="80" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    <g>
      <circle cx="240" cy="100" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="240" cy="100" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    <g>
      <circle cx="340" cy="30" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="340" cy="30" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    <g>
      <circle cx="440" cy="60" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="440" cy="60" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>

    <g>
      <circle cx="520" cy="15" r="8" fill="#3b82f6" opacity="0.15" className="animate-pulse" />
      <circle cx="520" cy="15" r="6" fill="#3b82f6" opacity="0.15" />
      <circle cx="520" cy="15" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
    </g>
  </svg>
);
