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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data?: any;
  options?: any;
}

const Chart: React.FC<ChartProps> = ({ data, options }) => {
  const defaultData = {
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

  const defaultOptions = {
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

  return (
    <div className="chart-container">
      <Bar data={data || defaultData} options={options || defaultOptions} />
    </div>
  );
};

export default Chart;