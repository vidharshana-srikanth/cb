import React from 'react';

const WorkloadHeatmap = () => {
  const data = [
    { team: 'Development', mon: 80, tue: 85, wed: 90, thu: 70, fri: 60 },
    { team: 'Design', mon: 60, tue: 70, wed: 75, thu: 80, fri: 65 },
    { team: 'Marketing', mon: 50, tue: 60, wed: 70, thu: 75, fri: 80 },
    { team: 'Support', mon: 70, tue: 75, wed: 65, thu: 60, fri: 55 }
  ];
 
  const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const cellSize = 40;
  const width = 350;
  const height = 200;
 
  const getColor = (value) => {
    if (value >= 85) return '#dc3545'; // High workload - red
    if (value >= 70) return '#fd7e14'; // Medium-high - orange
    if (value >= 55) return '#f6c23e'; // Medium - yellow
    return '#28a745'; // Low - green
  };
 
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 350 200">
        {/* Header */}
        <text x="70" y="25" fontSize="12" fontWeight="bold">Mon</text>
        // components/charts/WorkloadHeatmap.jsx (continued)
        <text x="120" y="25" fontSize="12" fontWeight="bold">Tue</text>
        <text x="170" y="25" fontSize="12" fontWeight="bold">Wed</text>
        <text x="220" y="25" fontSize="12" fontWeight="bold">Thu</text>
        <text x="270" y="25" fontSize="12" fontWeight="bold">Fri</text>
       
        {/* Heatmap cells */}
        {data.map((row, rowIndex) => (
          <g key={rowIndex}>
            <text x="20" y={50 + rowIndex * cellSize + 25} fontSize="12">{row.team}</text>
            {days.map((day, colIndex) => (
              <g key={`${rowIndex}-${colIndex}`}>
                <rect
                  x={70 + colIndex * cellSize}
                  y={50 + rowIndex * cellSize}
                  width={cellSize - 5}
                  height={cellSize - 5}
                  fill={getColor(row[day])}
                  rx="4"
                />
                <text
                  x={70 + colIndex * cellSize + cellSize/2 - 5}
                  y={50 + rowIndex * cellSize + cellSize/2 + 5}
                  fontSize="12"
                  fill="white"
                >
                  {row[day]}%
                </text>
              </g>
            ))}
          </g>
        ))}
       
        {/* Legend */}
        <rect x="20" y="180" width="15" height="15" fill="#28a745" />
        <text x="40" y="192" fontSize="10">Low</text>
       
        <rect x="80" y="180" width="15" height="15" fill="#f6c23e" />
        <text x="100" y="192" fontSize="10">Medium</text>
       
        <rect x="160" y="180" width="15" height="15" fill="#fd7e14" />
        <text x="180" y="192" fontSize="10">High</text>
       
        <rect x="240" y="180" width="15" height="15" fill="#dc3545" />
        <text x="260" y="192" fontSize="10">Critical</text>
      </svg>
    </div>
  );
};

export default WorkloadHeatmap;