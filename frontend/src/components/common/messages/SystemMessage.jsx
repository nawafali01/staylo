import React from 'react';

const SystemMessage = ({ text }) => (
  <div className="flex justify-center my-3">
    <span className="text-[11px] text-slate-500 bg-slate-100 rounded-full px-4 py-1.5 max-w-xs text-center">
      {text}
    </span>
  </div>
);

export default SystemMessage;
