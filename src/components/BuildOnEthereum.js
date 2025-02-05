// src/components/BuildOnEthereum.js
import React from 'react';
import './BuildOnEthereum.css';
import DrMaiti from '../assets/anindya.jpg';
import Scott from '../assets/scott.jpg';

function BuildOnEthereum() {
  return (
    <div className="eth-page">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Build on Ethereum</h1>
        <h2>at Hacklahoma 2025</h2>
        <p>
          Dive into the world of Web3 at Oklahoma’s largest hackathon!<br />
          Win <strong>$1,000</strong> sponsored by the Ethereum Foundation’s Ecosystem Support Program.
        </p>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="container">
        {/* INTRO / SPONSOR */}
        <p>
          Welcome to the <strong>“Built on Ethereum” Track</strong> at <strong>Hacklahoma</strong>!
          We’re here to help you discover the power of decentralized apps (dApps).
          Whether you’re a total newbie or a seasoned coder, this is your chance to build something
          on Ethereum and compete for a <strong>$1,000 cash prize</strong>—generously sponsored by the
          <em> Ethereum Foundation’s Ecosystem Support Program</em>.
        </p>

        {/* WHAT IS A dApp */}
        <h2 className="section-title">What Is a dApp?</h2>
        <p>
          A <strong>dApp</strong> (decentralized application) is software that runs on a blockchain—no single party owns 
          or controls it. dApps can offer tamper-proof data, transparent operations, and global accessibility.
          But you don’t have to make your project entirely decentralized to benefit from blockchain features!
        </p>

        {/* 2x2 GRID OF KEY FEATURES */}
        <h3 className="subsection-title">Key Features</h3>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Permanence &amp; Ownership</h3>
            <p>Build solutions where users genuinely own assets or data that live persistently on the blockchain.</p>
          </div>
          <div className="feature-box">
            <h3>Composability</h3>
            <p>Leverage open-source, on-chain components to easily integrate with existing protocols and services.</p>
          </div>
          <div className="feature-box">
            <h3>Tamper-Proof Data</h3>
            <p>Store critical info on Ethereum for verifiable, trustless operations and transparent record-keeping.</p>
          </div>
          <div className="feature-box">
            <h3>Resilience</h3>
            <p>Decentralized networks ensure uptime and resistance to single points of failure or censorship.</p>
          </div>
        </div>

        {/* PARTIAL INTEGRATION SECTION */}
        <h3 className="subsection-title">Partial dApps (web2.5?)</h3>
        <p>
          Not ready to build an entire dApp? You can still benefit from web3 by integrating:
        </p>
        <br />
        <ul>
          <li>
            <strong>Decentralized Storage:</strong> Store files on{' '}
            <a href="https://www.ethswarm.org/build">Swarm</a> or similar networks for censorship resistance.
          </li>
          <li>
            <strong>Decentralized Identity:</strong> Use{' '}
            <a href="https://ens.domains/">ENS (Ethereum Name Service)</a> or other identity solutions for secure, user-friendly logins.
          </li>
        </ul>
        <br />
        <p>
          These dApp elements can make your project more robust and future-proof without needing to overhaul your entire architecture.
        </p>

        {/* WORKSHOPS SECTION */}
        <div className="workshops">
          <h2 className="section-title">Workshops</h2>

          {/* Workshop 1 */}
          <div className="workshop">
            <div className="workshop-header">
              <div className="calendar-box">
                <div className="calendar-date">
                  <div className="calendar-day">10</div>
                  <div className="calendar-month">FEB</div>
                </div>
                <div className="calendar-details">
                  <div className="calendar-weekday">Monday</div>
                  <div className="calendar-time">18:00</div>
                  <div className="calendar-location">DEH 130</div>
                </div>
              </div>
              <h3>Workshop 1: Intro to web3</h3>
            </div>
            <p>
              Led by Scott Seidenberger, this is a pre-Hacklahoma workshop designed to give you an introduction to web3 and the problems
              that it solves. We will get hands on with some demos, create our first wallets, and even get a Proof-of-Attendance (PoA) NFT!
            </p>
          </div>

          {/* Workshop 2 */}
          <div className="workshop">
            <div className="workshop-header">
              <div className="calendar-box">
                <div className="calendar-date">
                  <div className="calendar-day">15</div>
                  <div className="calendar-month">FEB</div>
                </div>
                <div className="calendar-details">
                  <div className="calendar-weekday">Saturday</div>
                  <div className="calendar-time">16:00</div>
                  <div className="calendar-location">Hacklahoma</div>
                </div>
              </div>
              <h3>Workshop 2: Building on Ethereum</h3>
            </div>
            <p>
              Led by the founder of <strong>BuidlGuidl</strong>, this session covers the fundamentals of dApp development on Ethereum and how to deploy
              your first smart contract. Held during the Hacklahoma event, there is no better expert to help you understand how to get started with developing on Ethereum.
            </p>
          </div>
        </div>

        {/* MENTORS SECTION */}
        <div className="mentors-section">
          <h2 className="section-title">Mentors</h2>
          <p>
            Our mentor squad is here to help you every step of the way. Have questions about smart contracts, tokens, or design?
            We’ve got you covered!
          </p>
          <div className="mentors">
            <div className="mentor-card">
              <img src={Scott} alt="Scott Seidenberger" />
              <h3>Scott Seidenberger</h3>
              <h5>PhD Candidate, DSA</h5>
              <p>
                Scott has several years of experience with Ethereum and the web3 community. He professionally operates Ethereum validators as a service, has
                funded research by the Ethereum Foundation, and has architected resilient distributed systems for the US Govt. He is excited to help
                mentor any team building on Ethereum.
              </p>
            </div>
            <div className="mentor-card">
              <img src={DrMaiti} alt="Anindya Maiti" />
              <h3>Dr. Anindya Maiti</h3>
              <h5>Asst. Prof., CS</h5>
              <p>
                For many years, Professor Maiti has been serving decentralized communities, operating decentralized nodes for several
                protocol networks. He teaches the graduate level course in Blockchains and Cryptocurrencies at OU, and even has designed and produced
                an educational blockchain themed board game!
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <br />
        <p>
          Ready to <em>supercharge</em> your hackathon project?<br />
          <a href="https://discord.gg/4rMdUbBuA2" className="cta-button">Join us on Discord</a>
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        &copy; 2025 Hacklahoma
      </footer>
    </div>
  );
}

export default BuildOnEthereum;
