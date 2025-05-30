import React from 'react';

interface MetricPanelProps {
  mainNumber: string;
  label: string;
  className?: string;
}

const MetricPanel: React.FC<MetricPanelProps> = ({ mainNumber, label, className = "main-metric" }) => {
  return (
    <div className={className}>
      <span className="main-number">{mainNumber}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
};

export default MetricPanel;