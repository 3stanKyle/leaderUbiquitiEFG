import React from 'react';
import './LicensingModels.css';

const LicensingModels = () => {
  return (
    <section className="licensing-models-section">
      <div className="licensing-models-grid">
        <div className="licensing-models-card ubiquiti">
          <h2>Ubiquiti EFG Licensing Model</h2>
          <p className="subtitle">Revolutionary approach to enterprise security licensing</p>
          
          <div className="feature-list">
            <div className="feature">
              <h3>License-Free Operation</h3>
              <p>The EFG offers license-free, real-time inspection of encrypted packets, enhanced by NeXT AI Inspection (SSL/TLS decryption).</p>
            </div>
            
            <div className="feature">
              <h3>No Recurring Costs</h3>
              <p>Once purchased, the EFG and its features are available without additional licensing fees.</p>
            </div>
            
            <div className="feature">
              <h3>Included Features</h3>
              <p>Advanced security features like intrusion prevention, deep packet inspection, and application filtering are included without extra charges.</p>
            </div>
          </div>
        </div>

        <div className="licensing-models-card fortinet">
          <h2>Fortinet Licensing Model</h2>
          <p className="subtitle">Traditional enterprise licensing approach</p>
          
          <div className="feature-list">
            <div className="feature">
              <h3>Enterprise Agreement (EA)</h3>
              <p>Fortinet offers an account-based model that covers support and licenses for existing and future estate growth.</p>
            </div>
            
            <div className="feature">
              <h3>Subscription-Based</h3>
              <p>Many of Fortinet's advanced features require ongoing subscriptions or licenses.</p>
            </div>
            
            <div className="feature">
              <h3>Tiered Options</h3>
              <p>Fortinet provides various tiers of protection, such as IPS, ATP, UTP, and Enterprise Protection, each with different feature sets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingModels;