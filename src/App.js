import React from 'react';
import { CostComparison } from './components/CostComparison/CostComparison';
import { PerformanceMetrics } from './components/PerformanceMetrics/PerformanceMetrics';
import { LicensingComparison } from './components/LicensingComparison/LicensingComparison';
import LicensingModels from './components/LicensingModels/LicensingModels';
import { CostAnalysis } from './components/CostAnalysis/CostAnalysis';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

const App = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="header">
            <h1>Ubiquiti EFG vs Fortinet</h1>
            <p>The cost difference between Ubiquiti's EFG and Fortinet's solutions is substantial and could be a game-changer for many businesses, especially those looking to optimize their IT security budgets. The EFG's license-free model offers a compelling value proposition, potentially delivering enterprise-grade security at a fraction of the cost of traditional solutions over time.</p>
          </div>
          
          <CostComparison />
          <CostAnalysis />
          <PerformanceMetrics />
          <LicensingComparison />
          <LicensingModels />
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default App;