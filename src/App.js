// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation'; 
import LandingPage from './components/LandingPage';
import RatBreak from './components/RatBreak';
import AboutPage from './components/AboutPage';
import FaqPage from './components/FaqPage';
import Youtube from './components/Youtube';
import SponsorPage from './components/SponsorPage';

import LivePage from './components/LivePage';

import BuildOnEthereum from './components/BuildOnEthereum'; 

function App() {
  return (
    <>
      <Navigation />
      <Routes>

        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <LandingPage />
              <RatBreak />
              <AboutPage />
              <FaqPage />
              <Youtube />
              <SponsorPage />
            </div>
          }
        />

        {/* Live Page */}
        <Route
          path="/live"
          element={
            <div className="App">
              <LivePage />
            </div>
          } 
        />

        {/* Ethereum Page */}
        <Route path="/builtonethereum" element={<BuildOnEthereum />} />

      </Routes>
    </>
  );
}

export default App;
