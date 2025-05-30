import React from 'react';
import Chart from './Chart';
import MetricPanel from './MetricPanel';
import ProgressBar from './ProgressBar';
import BrandBreakdown from './BrandBreakdown';
import OpportunityPanel from './OpportunityPanel';
import ChangeIndicator from './ChangeIndicator';
import SecondaryMetric from './SecondaryMetric';
import Footer from './Footer';
import './Dashboard.css';


const Dashboard: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  const brandData = [
    { name: 'Roya', value: '$4.5M', amount: 4.5 },
    { name: 'Bjorn 2.0', value: '$1.2M', amount: 1.2 },
    { name: 'Wolfsten', value: '$0.8M', amount: 0.8 },
    { name: 'Luffe', value: '$0.2M', amount: 0.2 },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Invoiced Panel */}
        <div className="panel invoiced-panel">
          <div className="panel-content">
            <div className="panel-left">
              <h2 className="panel-title">Invoiced</h2>
              <MetricPanel mainNumber="$6.7M" label="YTD" />
              <ProgressBar percentage={95} target="$7M" />
            </div>
            <div className="panel-right">
              <BrandBreakdown brandData={brandData} />
            </div>
          </div>
        </div>

        {/* Orders Panel */}
        <div className="panel orders-panel">
          <div className="panel-content">
            <div className="panel-left">
              <h2 className="panel-title">Orders</h2>
              <MetricPanel mainNumber="$7.1M" label="YTD" />
              <ChangeIndicator type="positive" value="$1.3M v LY" />
              <SecondaryMetric number="$1.02M" label="Total order book" />
            </div>
          </div>
        </div>

        {/* Chart Panels */}
        <div className="chart-panels">
          <div className="chart-panel">
            <Chart />
          </div>
          <div className="chart-panel">
            <Chart />
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="right-panels">
          <OpportunityPanel 
            title="Opps at 90%" 
            value="$264K" 
            number="23"
          />

          <OpportunityPanel 
            title="Opps created this month" 
            value="$3.7M" 
            number="256"
          />

          <OpportunityPanel 
            title="Opps created this year" 
            value="$56M" 
            number="4,781"
            changeIndicators={[
              { type: 'negative', value: '3.9% vs LY' },
              { type: 'positive', value: '14% vs LY' }
            ]}
          />
        </div>
      </div>

      <Footer currentTime={currentTime} />
    </div>
  );
};

export default Dashboard;