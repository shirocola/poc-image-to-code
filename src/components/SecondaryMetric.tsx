import React from 'react';

interface SecondaryMetricProps {
  number: string;
  label: string;
}

const SecondaryMetric: React.FC<SecondaryMetricProps> = ({ number, label }) => {
  return (
    <div className="secondary-metric">
      <span className="secondary-number">{number}</span>
      <span className="secondary-label">{label}</span>
    </div>
  );
};

export default SecondaryMetric;