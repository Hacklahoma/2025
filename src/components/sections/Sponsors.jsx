import React from 'react';
import '../../styles/sponsors.scss';
import Section from '../Section';

/**
 * Contains all the header needs
 */
const Sponsors = () => (
  <div>
    <Section>
      <div id="sponsors" className="sponsors">
        <h2>Sponsors</h2>
        <div className="container">
        <div className="tier tier1">
            
           
          </div>
        </div>
        <h2>Partners</h2>
        <div className="container">
          <div className="tier tier2">
            <a
              href="https://mule.to/p2iu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="stickermule"
                src='/images/sponsors_and_partners/sticker-mule-logo.png'
              />
            </a>
            <a href="https://mlh.io" target="_blank" rel="noopener noreferrer">
              <img alt="mlh" src='/images/sponsors_and_partners/mlh.png' />
            </a>
          </div>
        </div>

      </div>
    </Section>
  </div>
);

export default Sponsors;