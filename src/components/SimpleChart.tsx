import React from 'react';
import { ChartDataPoint } from '../types/dashboard';
import styles from '../styles/SimpleChart.module.css';

interface SimpleChartProps {
  data: ChartDataPoint[];
  type: 'line' | 'bar';
  height: number;
}

const SimpleChart: React.FC<SimpleChartProps> = ({ data, type, height }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const padding = 20;
  const chartHeight = height - padding * 2;
  const chartWidth = 400;
  const barWidth = chartWidth / data.length - 10;

  const formatValue = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  if (type === 'bar') {
    return (
      <div className={styles.chartContainer}>
        <svg width={chartWidth + padding * 2} height={height} className={styles.chart}>
          {data.map((point, index) => {
            const barHeight = (point.value / maxValue) * chartHeight;
            const x = padding + index * (chartWidth / data.length);
            const y = height - padding - barHeight;
            
            return (
              <g key={index}>
                <rect
                  x={x + 5}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill="#4F46E5"
                  className={styles.bar}
                />
                <text
                  x={x + barWidth / 2 + 5}
                  y={height - 5}
                  textAnchor="middle"
                  className={styles.label}
                >
                  {point.label}
                </text>
                <text
                  x={x + barWidth / 2 + 5}
                  y={y - 5}
                  textAnchor="middle"
                  className={styles.value}
                >
                  {formatValue(point.value)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  // Line chart
  const points = data.map((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = height - padding - (point.value / maxValue) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={styles.chartContainer}>
      <svg width={chartWidth + padding * 2} height={height} className={styles.chart}>
        <polyline
          points={points}
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3"
          className={styles.line}
        />
        {data.map((point, index) => {
          const x = padding + (index / (data.length - 1)) * chartWidth;
          const y = height - padding - (point.value / maxValue) * chartHeight;
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="#4F46E5"
                className={styles.point}
              />
              <text
                x={x}
                y={height - 5}
                textAnchor="middle"
                className={styles.label}
              >
                {point.label}
              </text>
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                className={styles.value}
              >
                {formatValue(point.value)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SimpleChart;