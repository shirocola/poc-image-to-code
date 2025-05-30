import React from 'react';

interface ProgressBarProps {
  percentage: number;
  target: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, target }) => {
  return (
    <div className="progress-bar">
      <div className="progress-info">
        <span className="progress-percentage">{percentage}%</span>
        <span className="progress-target">{target}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;