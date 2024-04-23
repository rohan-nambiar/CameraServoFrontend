// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import StartCamera from './components/StartCamera';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Link styled as a button that navigates to the StartCamera component */}
          <Link to="/start-camera" className="App-link">Start</Link>
        </header>
        {/* Define Routes within Routes component */}
        <Routes>
          <Route path="/start-camera" element={<StartCamera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
