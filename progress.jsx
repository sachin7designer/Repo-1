import React from 'react';

const Progress = ({ value = 0, className = '' }) => {
  return (
    <div className={`w-full bg-gray-800 rounded-full h-3 overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 ease-out rounded-full glow-cyan"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

export { Progress };

