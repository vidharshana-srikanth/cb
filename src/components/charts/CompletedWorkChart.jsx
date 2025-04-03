import React from 'react';

const CompletedWorkChart = () => {
  const data = [
    { month: 'Jan', bugs: 45, features: 20, docs: 15 },
    { month: 'Feb', bugs: 38, features: 25, docs: 18 },
    { month: 'Mar', bugs: 30, features: 30, docs: 20 },
    { month: 'Apr', bugs: 25, features: 35, docs: 22 }
  ];
 
  const width = 400;
  const height = 200;
  const padding = 40;
  const barWidth = (width - 2 * padding) / data.length / 3;
 
  const maxValue = Math.max(...data.flatMap(d => [d.bugs + d.features + d.docs]));
  const yScale = (value) => height - padding - (value / maxValue) * (height - 2 * padding);
 
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 400 200">
        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#ccc" />
        {/* X-axis */}
        <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#ccc" />
       
        {/* Bars */}
        {data.map((d, i) => {
          const x = padding + i * ((width - 2 * padding) / data.length);
          const bugHeight = (d.bugs / maxValue) * (height - 2 * padding);
          const featureHeight = (d.features / maxValue) * (height - 2 * padding);
          const docHeight = (d.docs / maxValue) * (height - 2 * padding);
         
          return (
            <g key={i}>
              <rect
                x={x + 8}
                y={height - padding - bugHeight - featureHeight - docHeight}
                width={barWidth - 4}
                height={docHeight}
                fill="#36b9cc"
              />
              <rect
                x={x + 8}
                y={height - padding - bugHeight - featureHeight}
                width={barWidth - 4}
                height={featureHeight}
                fill="#1cc88a"
              />
              <rect
                x={x + 8}
                y={height - padding - bugHeight}
                width={barWidth - 4}
                height={bugHeight}
                fill="#4e73df"
              />
              <text x={x + barWidth/2} y={height - padding + 15} textAnchor="middle" fontSize="10">{d.month}</text>
            </g>
          );
        })}
       
        {/* Legend */}
        <rect x={width - 100} y={10} width="10" height="10" fill="#4e73df" />
        <text x={width - 85} y={18} fontSize="10">Bugs Fixed</text>
       
        <rect x={width - 100} y={25} width="10" height="10" fill="#1cc88a" />
        <text x={width - 85} y={33} fontSize="10">Features</text>
       
        <rect x={width - 100} y={40} width="10" height="10" fill="#36b9cc" />
        <text x={width - 85} y={48} fontSize="10">Documents</text>
      </svg>
    </div>
  );
};

export default CompletedWorkChart;