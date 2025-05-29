import { useMemo } from 'react';
import { DashboardData, SalesData } from '../types/dashboard';

export const useDashboardData = (): DashboardData => {
  return useMemo(() => {
    // Sample sales data
    const recentSales: SalesData[] = [
      {
        id: '1',
        date: '2024-05-28',
        product: 'Premium Wireless Headphones',
        category: 'Electronics',
        salesperson: 'John Smith',
        amount: 299.99,
        quantity: 1,
        region: 'North America'
      },
      {
        id: '2',
        date: '2024-05-28',
        product: 'Smart Watch Series X',
        category: 'Electronics',
        salesperson: 'Sarah Johnson',
        amount: 899.99,
        quantity: 2,
        region: 'Europe'
      },
      {
        id: '3',
        date: '2024-05-27',
        product: 'Ergonomic Office Chair',
        category: 'Furniture',
        salesperson: 'Mike Davis',
        amount: 450.00,
        quantity: 1,
        region: 'North America'
      },
      {
        id: '4',
        date: '2024-05-27',
        product: 'Gaming Laptop Pro',
        category: 'Electronics',
        salesperson: 'Emily Chen',
        amount: 1299.99,
        quantity: 1,
        region: 'Asia Pacific'
      },
      {
        id: '5',
        date: '2024-05-26',
        product: 'Coffee Maker Deluxe',
        category: 'Appliances',
        salesperson: 'David Wilson',
        amount: 179.99,
        quantity: 3,
        region: 'Europe'
      },
      {
        id: '6',
        date: '2024-05-26',
        product: 'Standing Desk Converter',
        category: 'Furniture',
        salesperson: 'Lisa Anderson',
        amount: 299.99,
        quantity: 2,
        region: 'North America'
      },
      {
        id: '7',
        date: '2024-05-25',
        product: 'Bluetooth Speaker',
        category: 'Electronics',
        salesperson: 'Tom Brown',
        amount: 89.99,
        quantity: 5,
        region: 'Asia Pacific'
      },
      {
        id: '8',
        date: '2024-05-25',
        product: 'Memory Foam Mattress',
        category: 'Furniture',
        salesperson: 'Jennifer Taylor',
        amount: 799.99,
        quantity: 1,
        region: 'Europe'
      }
    ];

    // Calculate totals
    const totalRevenue = recentSales.reduce((sum, sale) => sum + sale.amount * sale.quantity, 0);
    const totalSales = recentSales.length;
    const averageOrderValue = totalRevenue / totalSales;

    // Monthly trend data (simulated YTD data)
    const monthlyTrend = [
      { label: 'Jan', value: 125000 },
      { label: 'Feb', value: 148000 },
      { label: 'Mar', value: 162000 },
      { label: 'Apr', value: 185000 },
      { label: 'May', value: 198000 }
    ];

    // Category breakdown
    const categoryBreakdown = [
      { label: 'Electronics', value: 450000 },
      { label: 'Furniture', value: 280000 },
      { label: 'Appliances', value: 125000 },
      { label: 'Office Supplies', value: 89000 }
    ];

    return {
      totalRevenue: 918000, // YTD total
      totalSales: 342, // YTD total sales count
      averageOrderValue,
      monthlyTrend,
      categoryBreakdown,
      recentSales
    };
  }, []);
};