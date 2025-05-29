import React from 'react';
import { SalesData } from '../types/dashboard';
import styles from '../styles/SalesTable.module.css';

interface SalesTableProps {
  data: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3 className={styles.tableTitle}>Recent Sales</h3>
        <span className={styles.tableSubtitle}>Latest transactions from this month</span>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Category</th>
              <th>Salesperson</th>
              <th>Region</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sale) => (
              <tr key={sale.id}>
                <td>{formatDate(sale.date)}</td>
                <td className={styles.productName}>{sale.product}</td>
                <td>
                  <span className={styles.categoryBadge}>{sale.category}</span>
                </td>
                <td>{sale.salesperson}</td>
                <td>{sale.region}</td>
                <td className={styles.quantity}>{sale.quantity}</td>
                <td className={styles.amount}>{formatCurrency(sale.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;