import React from 'react';
import styles from '../styles/DashboardHeader.module.css';

const DashboardHeader: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentYear = new Date().getFullYear();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Sales YTD Dashboard</h1>
          <p className={styles.subtitle}>Year-to-Date Performance Overview for {currentYear}</p>
        </div>
        <div className={styles.dateSection}>
          <span className={styles.dateLabel}>Last Updated:</span>
          <span className={styles.date}>{currentDate}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;