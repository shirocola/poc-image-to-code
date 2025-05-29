import React from 'react';
import MetricsCards from '../components/MetricsCards';
import ChartsSection from '../components/ChartsSection';
import SalesTable from '../components/SalesTable';
import DashboardHeader from '../components/DashboardHeader';
import { useDashboardData } from '../hooks/useDashboardData';
import styles from '../styles/SalesYTDDashboard.module.css';

const SalesYTDDashboard: React.FC = () => {
  const dashboardData = useDashboardData();

  return (
    <div className={styles.dashboard}>
      <DashboardHeader />
      <div className={styles.content}>
        <MetricsCards data={dashboardData} />
        <ChartsSection data={dashboardData} />
        <SalesTable data={dashboardData.recentSales} />
      </div>
    </div>
  );
};

export default SalesYTDDashboard;