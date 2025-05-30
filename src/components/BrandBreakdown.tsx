import React from 'react';

interface BrandData {
  name: string;
  value: string;
  amount: number;
}

interface BrandBreakdownProps {
  brandData: BrandData[];
}

const BrandBreakdown: React.FC<BrandBreakdownProps> = ({ brandData }) => {
  const maxBrandAmount = Math.max(...brandData.map(brand => brand.amount));

  return (
    <div className="brand-breakdown">
      <h3 className="breakdown-title">By brand</h3>
      {brandData.map((brand, index) => (
        <div key={index} className="brand-item">
          <div className="brand-info">
            <span className="brand-name">{brand.name}</span>
            <div className="brand-bar">
              <div 
                className="brand-bar-fill"
                style={{ width: `${(brand.amount / maxBrandAmount) * 100}%` }}
              ></div>
            </div>
            <span className="brand-value">{brand.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandBreakdown;