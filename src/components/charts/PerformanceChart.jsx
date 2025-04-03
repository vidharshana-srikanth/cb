import React from 'react';

const PerformanceChart = () => {
  const data = [65, 70, 68, 72, 78, 80, 85];
  const width = 200;
  const height = 150;
  const padding = 30;
 
  const xScale = (i) => padding + i * ((width - 2 * padding) / (data.length - 1));
  const yScale = (value) => height - padding - ((value - 60) / 30) * (height - 2 * padding);
 
  // Generate path data
  let pathData = `M ${xScale(0)} ${yScale(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    pathData += ` L ${xScale(i)} ${yScale(data[i])}`;
  }
 
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 200 150">
        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#ccc" />
        {/* X-axis */}
        <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#ccc" />
       
        {/* Performance line */}
        <path d={pathData} fill="none" stroke="#4e73df" strokeWidth="2" />
       
        {/* Data points */}
        {data.map((value, i) => (
          <circle key={i} cx={xScale(i)} cy={yScale(value)} r="3" fill="#4e73df" />
        ))}
       
        {/* Labels */}
        <text x={width/2} y={height-5} textAnchor="middle" fontSize="10">Time</text>
        <text x="5" y={height/2} transform={`rotate(-90, 5, ${height/2})`} textAnchor="middle" fontSize="10">Efficiency %</text>
      </svg>
    </div>
  );
};

export default PerformanceChart;