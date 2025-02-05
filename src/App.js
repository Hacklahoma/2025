// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import RatBreak from './components/RatBreak';
import AboutPage from './components/AboutPage';
import FaqPage from './components/FaqPage';
import SponsorPage from './components/SponsorPage';
import BuildOnEthereum from './components/BuildOnEthereum'; 

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <LandingPage />
            <RatBreak />
            <AboutPage />
            <FaqPage />
            <SponsorPage />
          </div>
        }
      />
      <Route path="/builtonethereum" element={<BuildOnEthereum />} />
    </Routes>
  );
}

export default App;
