import React from 'react';
import { DashboardData } from '../types/dashboard';
import styles from '../styles/MetricsCards.module.css';

interface MetricsCardsProps {
  data: DashboardData;
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ data }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const metrics = [
    {
      title: 'Total Revenue',
      value: formatCurrency(data.totalRevenue),
      change: 12.5,
      changeType: 'increase' as const,
      icon: '💰'
    },
    {
      title: 'Total Sales',
      value: data.totalSales.toLocaleString(),
      change: 8.3,
      changeType: 'increase' as const,
      icon: '📊'
    },
    {
      title: 'Average Order Value',
      value: formatCurrency(data.averageOrderValue),
      change: -2.1,
      changeType: 'decrease' as const,
      icon: '🛒'
    },
    {
      title: 'Monthly Growth',
      value: '15.2%',
      change: 5.7,
      changeType: 'increase' as const,
      icon: '📈'
    }
  ];

  return (
    <div className={styles.metricsContainer}>
      {metrics.map((metric, index) => (
        <div key={index} className={styles.metricCard}>
          <div className={styles.cardHeader}>
            <span className={styles.icon}>{metric.icon}</span>
            <h3 className={styles.title}>{metric.title}</h3>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.value}>{metric.value}</div>
            <div className={`${styles.change} ${styles[metric.changeType]}`}>
              <span className={styles.changeIcon}>
                {metric.changeType === 'increase' ? '↗' : '↘'}
              </span>
              {Math.abs(metric.change)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;