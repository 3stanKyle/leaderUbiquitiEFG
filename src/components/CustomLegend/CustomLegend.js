import React from 'react';
import './CustomLegend.css';

export const CustomLegend = (props) => {
  const { payload } = props;
  
  return (
    <ul className="custom-legend">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="custom-legend-item">
          <img 
            src={entry.dataKey === 'ubiquiti' 
              ? 'https://content.leadermarketing.com.au/assets/uploads/ui-icon-blue-24px.png'
              : 'https://content.leadermarketing.com.au/assets/uploads/Fortinet-logomark-rgb-red.png'
            }
            alt={entry.dataKey === 'ubiquiti' ? 'Ubiquiti' : 'Fortinet'}
          />
          <span>{entry.dataKey === 'ubiquiti' ? 'Ubiquiti EFG' : 'Fortinet'}</span>
        </li>
      ))}
    </ul>
  );
};