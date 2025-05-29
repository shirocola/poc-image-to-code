export interface SalesData {
  id: string;
  date: string;
  product: string;
  category: string;
  salesperson: string;
  amount: number;
  quantity: number;
  region: string;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  month?: string;
}

export interface DashboardData {
  totalRevenue: number;
  totalSales: number;
  averageOrderValue: number;
  monthlyTrend: ChartDataPoint[];
  categoryBreakdown: ChartDataPoint[];
  recentSales: SalesData[];
}