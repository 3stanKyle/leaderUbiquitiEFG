// components/PerformanceMetrics/PerformanceMetrics.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitleWithIcon, CardContent } from '../common/Card';
import { CustomLegend } from '../CustomLegend/CustomLegend';
import './PerformanceMetrics.css';

export const PerformanceMetrics = () => {
  const metrics = {
    throughput: [
      { category: 'IPS/IDS Throughput (Gbps)', ubiquiti: 12.5, fortinet: 10 }
    ],
    clients: [
      { category: 'Maximum Clients', ubiquiti: 5000, fortinet: 4000 }
    ],
    routing: [
      { category: 'Routing Speed (Gbps)', ubiquiti: 12.5, fortinet: 10 }
    ]
  };

  const MetricCard = ({ title, data, icon }) => (
    <Card>
      <CardHeader>
        <CardTitleWithIcon iconUrl={icon}>
          {title}
        </CardTitleWithIcon>
      </CardHeader>
      <CardContent>
        <div className="performance-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="category" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  color: '#F3F4F6' 
                }} 
              />
              <Legend content={<CustomLegend />} />
              <Bar 
                dataKey="ubiquiti" 
                fill="#3B82F6"
                onMouseOver={(data, index) => {
                  document.querySelectorAll('.recharts-bar-rectangle').forEach(rect => {
                    if (rect.getAttribute('data-key') === 'ubiquiti') {
                      rect.style.fill = 'rgba(59, 130, 246, 0.8)'; // Lighter blue on hover
                    }
                  });
                }}
                onMouseOut={(data, index) => {
                  document.querySelectorAll('.recharts-bar-rectangle').forEach(rect => {
                    if (rect.getAttribute('data-key') === 'ubiquiti') {
                      rect.style.fill = '#3B82F6'; // Original blue
                    }
                  });
                }}
              />
              <Bar 
                dataKey="fortinet" 
                fill="#EF4444"
                onMouseOver={(data, index) => {
                  document.querySelectorAll('.recharts-bar-rectangle').forEach(rect => {
                    if (rect.getAttribute('data-key') === 'fortinet') {
                      rect.style.fill = 'rgba(239, 68, 68, 0.8)'; // Lighter red on hover
                    }
                  });
                }}
                onMouseOut={(data, index) => {
                  document.querySelectorAll('.recharts-bar-rectangle').forEach(rect => {
                    if (rect.getAttribute('data-key') === 'fortinet') {
                      rect.style.fill = '#EF4444'; // Original red
                    }
                  });
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="metrics-grid">
      <MetricCard 
        title="IPS/IDS Throughput"
        data={metrics.throughput}
        icon="https://ui.com/microsite/static/media/internet-shield.87b1cdab.svg"
      />
      <MetricCard 
        title="Maximum Clients"
        data={metrics.clients}
        icon="https://ui.com/microsite/static/media/clients2.13f79bf8.svg"
      />
      <MetricCard 
        title="Routing Speed"
        data={metrics.routing}
        icon="https://ui.com/microsite/static/media/throughput.08572a15.svg"
      />
    </div>
  );
};

export default PerformanceMetrics;