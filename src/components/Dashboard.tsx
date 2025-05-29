import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BrandData {
  name: string;
  value: string;
  amount: number;
}

const Dashboard: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021',
        data: [0.8, 0.6, 0.9, 0.7, 0.5, 0.8, 0.6, 0.7, 0.9, 0.8, 0.6, 0.5],
        backgroundColor: '#10C8F9',
        borderRadius: 2,
        maxBarThickness: 20,
      },
      {
        label: '2020',
        data: [0.6, 0.4, 0.7, 0.5, 0.3, 0.6, 0.4, 0.5, 0.7, 0.6, 0.4, 0.3],
        backgroundColor: '#FFE156',
        borderRadius: 2,
        maxBarThickness: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          color: '#FFFFFF',
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: '#181B3A',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#10C8F9',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#B7B7C9',
          font: {
            size: 11,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          color: '#B7B7C9',
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return '$' + value + 'M';
          },
        },
        grid: {
          color: '#2A2F5A',
          lineWidth: 1,
        },
      },
    },
  };

  const brandData: BrandData[] = [
    { name: 'Roya', value: '$4.5M', amount: 4.5 },
    { name: 'Bjorn 2.0', value: '$1.2M', amount: 1.2 },
    { name: 'Wolfsten', value: '$0.8M', amount: 0.8 },
    { name: 'Luffe', value: '$0.2M', amount: 0.2 },
  ];

  const maxBrandAmount = Math.max(...brandData.map(brand => brand.amount));

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Invoiced Panel */}
        <div className="panel invoiced-panel">
          <div className="panel-content">
            <div className="panel-left">
              <h2 className="panel-title">Invoiced</h2>
              <div className="main-metric">
                <span className="main-number">$6.7M</span>
                <span className="metric-label">YTD</span>
              </div>
              <div className="progress-bar">
                <div className="progress-info">
                  <span className="progress-percentage">95%</span>
                  <span className="progress-target">$7M</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            <div className="panel-right">
              <div className="chart-container">
                <Bar data={monthlyData} options={chartOptions} />
              </div>
              <div className="brand-breakdown">
                <h3 className="breakdown-title">By brand</h3>
                {brandData.map((brand, index) => (
                  <div key={index} className="brand-item">
                    <div className="brand-info">
                      <span className="brand-name">{brand.name}</span>
                      <div className="brand-bar">
                        <div 
                          className="brand-bar-fill"
                          style={{ width: `${(brand.amount / maxBrandAmount) * 100}%` }}
                        ></div>
                      </div>
                      <span className="brand-value">{brand.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orders Panel */}
        <div className="panel orders-panel">
          <div className="panel-content">
            <div className="panel-left">
              <h2 className="panel-title">Orders</h2>
              <div className="main-metric">
                <span className="main-number">$7.1M</span>
                <span className="metric-label">YTD</span>
              </div>
              <div className="change-indicator positive">
                <span className="change-arrow">▲</span>
                <span className="change-value">$1.3M v LY</span>
              </div>
              <div className="secondary-metric">
                <span className="secondary-number">$1.02M</span>
                <span className="secondary-label">Total order book</span>
              </div>
            </div>
            <div className="panel-right">
              <div className="chart-container">
                <Bar data={monthlyData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="right-panels">
          <div className="panel opportunity-panel">
            <div className="opportunity-content">
              <div className="opportunity-header">
                <span className="opportunity-title">Opps at 90%</span>
                <span className="opportunity-value">$264K</span>
              </div>
              <span className="opportunity-number">23</span>
            </div>
          </div>

          <div className="panel opportunity-panel">
            <div className="opportunity-content">
              <div className="opportunity-header">
                <span className="opportunity-title">Opps created this month</span>
                <span className="opportunity-value">$3.7M</span>
              </div>
              <span className="opportunity-number">256</span>
            </div>
          </div>

          <div className="panel opportunity-panel">
            <div className="opportunity-content">
              <div className="opportunity-header">
                <span className="opportunity-title">Opps created this year</span>
                <span className="opportunity-value">$56M</span>
              </div>
              <span className="opportunity-number">4,781</span>
              <div className="change-indicators">
                <div className="change-indicator negative">
                  <span className="change-arrow">▼</span>
                  <span className="change-value">3.9% vs LY</span>
                </div>
                <div className="change-indicator positive">
                  <span className="change-arrow">▲</span>
                  <span className="change-value">14% vs LY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-left">
          <span className="footer-text">Sales YTD Powered by Geckoboard</span>
        </div>
        <div className="footer-right">
          <span className="footer-time">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;