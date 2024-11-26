import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../common/Card';
import './LicensingComparison.css';

export const LicensingComparison = () => (
  <Card>
    <CardHeader>
      <CardTitle>
        Licensing Comparison
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Ubiquiti EFG</th>
              <th>Fortinet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Licensing Model</td>
              <td className="highlight">License-Free</td>
              <td>Subscription-Based</td>
            </tr>
            <tr>
              <td>Deep Packet Inspection</td>
              <td className="highlight">Included</td>
              <td>Additional License</td>
            </tr>
            <tr>
              <td>Zero-day Protection</td>
              <td className="highlight">Included</td>
              <td>Additional License</td>
            </tr>
            <tr>
              <td>Management Interface</td>
              <td>UniFi Network</td>
              <td>FortiManager</td>
            </tr>
            <tr>
              <td>Setup Complexity</td>
              <td className="highlight">Simple</td>
              <td>Complex</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);