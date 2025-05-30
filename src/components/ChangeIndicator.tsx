import React from 'react';

interface ChangeIndicatorProps {
  type: 'positive' | 'negative';
  value: string;
  className?: string;
}

const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ type, value, className = "change-indicator" }) => {
  return (
    <div className={`${className} ${type}`}>
      <span className="change-arrow">{type === 'positive' ? '▲' : '▼'}</span>
      <span className="change-value">{value}</span>
    </div>
  );
};

export default ChangeIndicator;