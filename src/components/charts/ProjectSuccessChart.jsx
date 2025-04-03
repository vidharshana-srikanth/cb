import React from 'react';

const ProjectSuccessChart = () => {
  const projects = ['Project A', 'Project B', 'Project C', 'Project D'];
  const successRates = [85, 65, 92, 78];
  const failureRates = [15, 35, 8, 22];
 
  const barHeight = 30;
  const width = 400;
  const height = 200;
  const padding = 40;
 
  return (
    <div className="chart">
      <svg width="100%" height="100%" viewBox="0 0 400 200">
        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#ccc" />
        {/* X-axis */}
        <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#ccc" />
       
        {/* Bars */}
        {projects.map((project, i) => {
          const y = padding + i * (barHeight + 10);
         
          return (
            <g key={i}>
              <text x={padding - 5} y={y + barHeight/2 + 5} textAnchor="end" fontSize="12">{project}</text>
             
              {/* Success bar */}
              <rect
                x={padding}
                y={y}
                width={(width - 2 * padding) * (successRates[i] / 100)}
                height={barHeight}
                fill="#28a745"
              />
              <text
                x={padding + (width - 2 * padding) * (successRates[i] / 100) - 25}
                y={y + barHeight/2 + 5}
                fontSize="12"
                fill="white"
              >
                {successRates[i]}%
              </text>
             
              {/* Failure bar */}
              <rect
                x={padding + (width - 2 * padding) * (successRates[i] / 100)}
                y={y}
                width={(width - 2 * padding) * (failureRates[i] / 100)}
                height={barHeight}
                fill="#dc3545"
              />
              <text
                x={padding + (width - 2 * padding) * (successRates[i] / 100) + (width - 2 * padding) * (failureRates[i] / 100) - 20}
                y={y + barHeight/2 + 5}
                fontSize="12"
                fill="white"
              >
                {failureRates[i]}%
              </text>
            </g>
          );
        })}
       
        {/* Legend */}
        <rect x={width - 100} y="10" width="15" height="15" fill="#28a745" />
        <text x={width - 80} y="22" fontSize="12">Success</text>
       
        <rect x={width - 100} y="30" width="15" height="15" fill="#dc3545" />
        <text x={width - 80} y="42" fontSize="12">Failure</text>
      </svg>
    </div>
  );
};

export default ProjectSuccessChart;