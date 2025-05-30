import React from 'react';
import ChangeIndicator from './ChangeIndicator';

interface ChangeIndicatorData {
  type: 'positive' | 'negative';
  value: string;
}

interface OpportunityPanelProps {
  title: string;
  value: string;
  number: string;
  changeIndicators?: ChangeIndicatorData[];
}

const OpportunityPanel: React.FC<OpportunityPanelProps> = ({ 
  title, 
  value, 
  number, 
  changeIndicators 
}) => {
  return (
    <div className="panel opportunity-panel">
      <div className="opportunity-content">
        <div className="opportunity-header">
          <span className="opportunity-title">{title}</span>
          <span className="opportunity-value">{value}</span>
        </div>
        <span className="opportunity-number">{number}</span>
        {changeIndicators && changeIndicators.length > 0 && (
          <div className="change-indicators">
            {changeIndicators.map((indicator, index) => (
              <ChangeIndicator
                key={index}
                type={indicator.type}
                value={indicator.value}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OpportunityPanel;