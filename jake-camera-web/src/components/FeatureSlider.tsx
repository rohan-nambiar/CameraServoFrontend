// FeatureSlider.tsx
import React, { useState } from 'react';
import './FeatureSlider.css';

interface FeatureSliderProps {
  feature: string;
  endpoint: string;
  variable: string;
  min: number;
  max: number;
}

const FeatureSlider: React.FC<FeatureSliderProps> = ({ feature, endpoint, variable, min, max }) => {
  const [value, setValue] = useState<number>(min);

  const handleSliderChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);

    const url = `http://192.168.121.213/${endpoint}?var=${variable}&val=${newValue}`;

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
      // Optionally reset the slider to previous value or show an error
    }
  };

  return (
    <div className="feature-slider-container">
      <label htmlFor={variable} className="feature-label">{feature}</label>
      <input
        type="range"
        id={variable}
        className="feature-range-input"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
      />
      <span className="feature-value">{value}</span>
    </div>
  );
};

export default FeatureSlider;
