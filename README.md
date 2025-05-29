# Sales YTD Dashboard

A comprehensive Year-to-Date sales dashboard built with React and TypeScript, designed to match modern dashboard designs and provide real-time sales insights.

## Features

- **📊 Interactive Dashboard**: Year-to-date sales performance overview
- **💰 Key Metrics**: Revenue, sales count, average order value, and growth indicators
- **📈 Visual Charts**: Line charts for trends and bar charts for category breakdown
- **📋 Sales Table**: Detailed transaction listing with sorting and formatting
- **📱 Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox
- **🎨 Modern UI**: Professional gradient design with hover effects
- **⚡ High Performance**: Built with Vite for fast development and builds
- **🔒 Type Safety**: Full TypeScript implementation with strict typing

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Full type safety and developer experience
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling with modern CSS features
- **Custom SVG Charts** - Lightweight charts without external dependencies

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── DashboardHeader.tsx
│   ├── MetricsCards.tsx
│   ├── ChartsSection.tsx
│   ├── SimpleChart.tsx
│   └── SalesTable.tsx
├── pages/               # Page components
│   └── SalesYTDDashboard.tsx
├── hooks/               # Custom React hooks
│   └── useDashboardData.ts
├── types/               # TypeScript type definitions
│   └── dashboard.ts
├── styles/              # CSS modules
│   ├── *.module.css
│   ├── App.css
│   └── index.css
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd poc-image-to-code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Dashboard Components

### Header Section
- Dynamic title with current year
- Last updated timestamp
- Gradient background design

### Metrics Cards
- **Total Revenue**: YTD revenue with percentage change
- **Total Sales**: Number of transactions
- **Average Order Value**: Revenue per transaction
- **Monthly Growth**: Growth percentage indicator

### Charts Section
- **Monthly Revenue Trend**: Line chart showing monthly progression
- **Sales by Category**: Bar chart of category breakdown
- **Interactive Elements**: Hover effects and data tooltips

### Sales Table
- Recent transaction details
- Sortable columns
- Formatted currency and dates
- Category badges
- Responsive table design

## Data Structure

The dashboard uses TypeScript interfaces for type safety:

```typescript
interface SalesData {
  id: string;
  date: string;
  product: string;
  category: string;
  salesperson: string;
  amount: number;
  quantity: number;
  region: string;
}
```

## Customization

### Adding New Metrics
1. Update the `DashboardData` interface in `src/types/dashboard.ts`
2. Add calculation logic in `src/hooks/useDashboardData.ts`
3. Create new metric cards in `src/components/MetricsCards.tsx`

### Styling Changes
- Modify CSS modules in `src/styles/` directory
- Update color schemes in CSS custom properties
- Adjust responsive breakpoints in media queries

### Data Integration
- Replace mock data in `useDashboardData.ts` with API calls
- Add loading states and error handling
- Implement data fetching with useEffect hooks

## Performance Optimizations

- **React.memo**: Prevents unnecessary re-renders
- **useMemo**: Memoizes expensive calculations
- **CSS Modules**: Prevents style conflicts and enables tree shaking
- **Vite**: Fast bundling and hot module replacement

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.