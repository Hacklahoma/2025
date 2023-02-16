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
            <a
                href="https://www.paycom.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Paycom"
                  src='/images/sponsors_and_partners/paycom.png'
              />
            </a>
            <a
                href="https://interworks.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Interworks"
                  src='/images/sponsors_and_partners/interworks-logo.png'
              />
            </a>
            <a
                href="https://www.kochind.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Koch"
                  src='/images/sponsors_and_partners/koch.png'
              />
            </a>
            <a
                href="https://www.homecreations.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Home Creations"
                  src='/images/sponsors_and_partners/homecreations-logo.png'
              />
            </a>
            <a
                href="https://www.ou.edu/coe"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Gallogly College of Engineering"
                  src='/images/sponsors_and_partners/gcoe.png'
              />
            </a>
            <a
                href="https://www.northropgrumman.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  alt="Northrop Grumman"
                  src='/images/sponsors_and_partners/NorthropGrumman.png'
              />
            </a>
          </div>
        </div>
        <h2>Partners</h2>
        <div className="container">
          <div className="tier tier2">
            <a
              href="http://hackp.ac/mlh-StandOutStickers-hackathons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Standout Stickers"
                src='/images/sponsors_and_partners/StandoutStickers_Logo.png'
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