import React from 'react';

interface FooterProps {
  leftText?: string;
  currentTime: string;
}

const Footer: React.FC<FooterProps> = ({ 
  leftText = "Sales YTD Powered by Geckoboard", 
  currentTime 
}) => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span className="footer-text">{leftText}</span>
      </div>
      <div className="footer-right">
        <span className="footer-time">{currentTime}</span>
      </div>
    </div>
  );
};

export default Footer;