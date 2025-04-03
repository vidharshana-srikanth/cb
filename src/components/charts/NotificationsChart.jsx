import React from 'react';

const NotificationsChart = () => {
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        <g transform="translate(100, 100)">
          {/* Mentions - 45% */}
          <path d="M0,0 L0,-80 A80,80 0 0,1 56.56,56.56 Z" fill="#4e73df" />
          <text x="20" y="-40" fontSize="10" fill="white">Mentions 45%</text>
         
          {/* Meetings - 20% */}
          <path d="M0,0 L56.56,56.56 A80,80 0 0,1 -27.36,74.8 Z" fill="#1cc88a" />
          <text x="30" y="40" fontSize="10" fill="white">Meetings 20%</text>
         
          {/* Deadlines - 25% */}
          <path d="M0,0 L-27.36,74.8 A80,80 0 0,1 -80,0 Z" fill="#36b9cc" />
          <text x="-50" y="40" fontSize="10" fill="white">Deadlines 25%</text>
         
          {/* Updates - 10% */}
          <path d="M0,0 L-80,0 A80,80 0 0,1 0,-80 Z" fill="#f6c23e" />
          <text x="-40" y="-30" fontSize="10" fill="white">Updates 10%</text>
         
          {/* Donut hole */}
          <circle cx="0" cy="0" r="40" fill="var(--card-bg)" />
        </g>
      </svg>
    </div>
  );
};

export default NotificationsChart;