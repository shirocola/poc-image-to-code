import React from 'react';
import { DashboardData } from '../types/dashboard';
import SimpleChart from './SimpleChart';
import styles from '../styles/ChartsSection.module.css';

interface ChartsSectionProps {
  data: DashboardData;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({ data }) => {
  return (
    <div className={styles.chartsContainer}>
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Monthly Revenue Trend</h3>
        <SimpleChart 
          data={data.monthlyTrend} 
          type="line" 
          height={300}
        />
      </div>
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Sales by Category</h3>
        <SimpleChart 
          data={data.categoryBreakdown} 
          type="bar" 
          height={300}
        />
      </div>
    </div>
  );
};

export default ChartsSection;