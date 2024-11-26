// components/CostComparison/CostComparison.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '../common/Card';
import { CustomLegend } from '../CustomLegend/CustomLegend';
import './CostComparison.css';

export const CostComparison = () => {
  const costData = Array.from({ length: 10 }, (_, i) => ({
    year: `Year ${i + 1}`,
    ubiquiti: 500 * (i + 1),
    fortinet: 5500 * (i + 1),
  }));

  return (
    <div className="cost-comparison-section">
      <div className="cost-comparison-header">
        <h2>Significant Cost Savings with Ubiquiti EFG</h2>
        <p className="cost-comparison-subheadline">
          Get 10 years of Ubiquiti EFG coverage for the price of a single year of Fortinet coverage. ($500/year vs $5,500/year)
        </p>
      </div>

      <Card>
        <CardContent>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  formatter={(value) => `$${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#F3F4F6' }}
                />
                <Legend content={<CustomLegend />} />
                <Line 
                  type="monotone" 
                  dataKey="ubiquiti" 
                  name="Ubiquiti EFG" 
                  stroke="#3B82F6" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="fortinet" 
                  name="Fortinet" 
                  stroke="#EF4444" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostComparison;