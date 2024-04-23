// FeatureToggle.tsx
import React, { useState } from 'react';
import './FeatureToggle.css';

interface FeatureToggleProps {
  feature: string;
  endpoint: string;
  variable: string;
}

const FeatureToggle: React.FC<FeatureToggleProps> = ({ feature, endpoint, variable }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleFeature = async () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);

    const url = `http://192.168.76.213/${endpoint}?state=${newValue ? 1 : 0}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // If you need to use the data, you can process it here
    } catch (error) {
      console.error('Error:', error);
      setIsEnabled(!newValue); // Reset toggle on error
    }
  };

  return (
    <div className="feature-toggle-container">
      <span className="feature-name">{feature}</span>
      <label className="feature-switch">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={toggleFeature}
          className="feature-switch-input"
        />
        <span className="feature-slider round"></span>
      </label>
    </div>
  );
};

export default FeatureToggle;
