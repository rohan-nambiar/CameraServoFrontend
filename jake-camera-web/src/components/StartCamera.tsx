// StartCamera.jsx or StartCamera.tsx
import React from 'react';
import './StartCamera.css'; // Ensure you have a corresponding CSS file or include these styles in App.css
import FeatureToggle from './FeatureToggle'; // Import FeatureToggle component
import FeatureSlider from './FeatureSlider'; // Import FeatureSlider component


function StartCamera() {
  // Add more endpoints as necessary
  const toggles = [
    { name: "XCLK Frequency", endpoint: "control", variable: "xclk" },
    { name: "Pixel Format", endpoint: "control", variable: "pixformat" },
    { name: "Frame Size", endpoint: "control", variable: "framesize" },
    { name: "Brightness", endpoint: "control", variable: "brightness" },
    { name: "Contrast", endpoint: "control", variable: "contrast" },
    { name: "Saturation", endpoint: "control", variable: "saturation" },
    { name: "Sharpness", endpoint: "control", variable: "sharpness" },
    { name: "Special Effect", endpoint: "control", variable: "special_effect" },
    { name: "White Balance Mode", endpoint: "control", variable: "wb_mode" },
    { name: "Automatic White Balance", endpoint: "control", variable: "awb" },
    { name: "AWB Gain", endpoint: "control", variable: "awb_gain" },
    { name: "Automatic Exposure Control", endpoint: "control", variable: "aec" },
    { name: "Second Stage Automatic Exposure Control", endpoint: "control", variable: "aec2" },
    { name: "AE Level", endpoint: "control", variable: "ae_level" },
    { name: "AEC Value", endpoint: "control", variable: "aec_value" },
    { name: "Automatic Gain Control", endpoint: "control", variable: "agc" },
    { name: "AGC Gain", endpoint: "control", variable: "agc_gain" },
    { name: "Gain Ceiling", endpoint: "control", variable: "gainceiling" },
    { name: "Black Pixel Correction", endpoint: "control", variable: "bpc" },
    { name: "White Pixel Correction", endpoint: "control", variable: "wpc" },
    { name: "Raw Gamma", endpoint: "control", variable: "raw_gma" },
    { name: "Lens Correction", endpoint: "control", variable: "lenc" },
    { name: "Horizontal Mirror", endpoint: "control", variable: "hmirror" },
    { name: "Downsize Control", endpoint: "control", variable: "dcw" },
    { name: "Color Bar Test Pattern", endpoint: "control", variable: "colorbar" },
  ];

  const sliders = [
    { name: "Frame Rate", endpoint: "control", variable: "framerate", min: 1, max: 120 },
    { name: "Image Quality", endpoint: "control", variable: "quality", min: 4, max: 63 },
    { name: "Automatic Exposure Control", endpoint: "control", variable: "aec", min: 0, max: 1200 },
    { name: "Gain Ceiling", endpoint: "control", variable: "gainceiling", min: 2, max: 128 },

  ];

      return (
    <div className="StartCamera-container">
      <div className="StartCamera-header">
        <h1 className="StartCamera-title">Camera Control Panel</h1>
        <p className="StartCamera-description">
          Manage your camera settings and streaming options.
        </p>
      </div>
      <div className="StartCamera-controls">
        <button className="button capture">Capture</button>
        <button className="button start">Start Streaming</button>
        <button className="button stop">Stop Streaming</button>
      </div>
      <div className="StartCamera-features">
        <h2>Camera Features</h2>
        <div className="feature-list">
          <div className="feature-toggles">
            {toggles.map((toggle) => (
              <FeatureToggle
                key={toggle.name}
                feature={toggle.name}
                endpoint={toggle.endpoint}
                variable={toggle.variable}
              />
            ))}
          </div>
          <div className="feature-sliders">
            {sliders.map((slider) => (
              <FeatureSlider
                key={slider.name}
                feature={slider.name}
                endpoint={slider.endpoint}
                variable={slider.variable}
                min={slider.min}
                max={slider.max}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartCamera;