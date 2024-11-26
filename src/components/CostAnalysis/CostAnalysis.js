// components/CostAnalysis/CostAnalysis.js
import React from 'react';
import './CostAnalysis.css';

export const CostAnalysis = () => {
  const analysisPoints = [
    {
      title: "Upfront vs. Recurring Costs",
      content: "The EFG model favors businesses looking to minimize ongoing expenses. Once purchased, there are no additional licensing costs for advanced features.",
      icon: "https://ui.com/microsite/static/media/checkmark.fcc4b94e.svg"
    },
    {
      title: "Scalability",
      content: "For growing businesses, the EFG's pricing model allows for easier budgeting and expansion without worrying about increasing annual license costs.",
      icon: "https://ui.com/microsite/static/media/throughput.08572a15.svg"
    },
    {
      title: "Performance",
      content: "The EFG provides 12.5 Gbps routing capability with IPS/IDS enabled, supporting over 5,000 simultaneous network clients.",
      icon: "https://ui.com/microsite/static/media/internet-shield.87b1cdab.svg"
    },
    {
      title: "Return on Investment",
      content: "With its cost-effective pricing and high performance, the EFG delivers exceptional value for businesses of all sizes.",
      icon: "https://ui.com/microsite/static/media/profitability.522dfb47.svg"
    }
  ];

  return (
    <div className="cost-analysis-section">
      <div className="cost-analysis-header">
        <h2>Total Cost of Ownership (TCO)</h2>
        <p className="cost-analysis-subheadline">
          The Ubiquiti EFG presents a significantly lower TCO over time. 
          A simple calculation shows that over a 10-year period, the EFG would cost only 9.09% of what 
          a comparable Fortinet solution would cost.
        </p>
      </div>

      <div className="analysis-grid">
        {analysisPoints.map((point, index) => (
          <div key={index} className="analysis-item">
            <div className="analysis-icon">
              <img 
                src={point.icon} 
                alt={point.title}
                style={{ 
                  filter: 'brightness(0) invert(1)',
                  width: '48px',
                  height: '48px'
                }} 
              />
            </div>
            <h3 className="analysis-title">{point.title}</h3>
            <p className="analysis-content">{point.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostAnalysis;