import React from 'react';

const PendingTasksChart = () => {
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        <g transform="translate(100, 100)">
          {/* High priority slice - 40% */}
          <path d="M0,0 L0,-80 A80,80 0 0,1 69.28,40 Z" fill="#dc3545" />
          <text x="30" y="-30" fontSize="12" fill="white">High: 40%</text>
         
          {/* Medium priority slice - 35% */}
          <path d="M0,0 L69.28,40 A80,80 0 0,1 -69.28,40 Z" fill="#fd7e14" />
          <text x="0" y="50" fontSize="12" fill="white">Medium: 35%</text>
         
          {/* Low priority slice - 25% */}
          <path d="M0,0 L-69.28,40 A80,80 0 0,1 0,-80 Z" fill="#28a745" />
          <text x="-40" y="-20" fontSize="12" fill="white">Low: 25%</text>
        </g>
      </svg>
    </div>
  );
};

export default PendingTasksChart;