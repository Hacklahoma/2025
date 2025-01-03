import React from 'react';
import './LandingPage.css'; // You’ll add your CSS here

// Desktop Assets
import HacklahomaTitle from '../assets/S1_HacklahomaTitle.png';
import HacklahomaTitle2025 from '../assets/S1_2025Title.png';
import HacklahomaSubtitle from '../assets/S1_HacklahomaSubtitle.png';

import City from '../assets/S1_City.png';
import Clouds from '../assets/S1_Clouds.png';

import MLHBanner from '../assets/S1_MLH-Banner.png';
import ScissorTail from "../assets/S1_ScissorTailLogo.png";

import ApplyButton from "../assets/S1_ApplyButton.png";

// Mobile Assets
import MobileHacklahomaTitle from "../assets/MS1_Title.png";
import MobileHacklahomaTitle2025 from "../assets/MS1_2025.png";
import MobileHacklahomaSubtitle from "../assets/MS1_Subtitle.png";

import MobileCity from "../assets/MS1_City.png";
import MobileClouds from "../assets/MS1_Clouds.png";

import MobileMLHBanner from "../assets/MS1_MLHBanner.png";
import MobileScissorTail from "../assets/MS1_Logo.png";

const LandingPage = () => {

    return (
        <div className="landing-page">

            {/* Desktop Layout */}
            <div className="landing-page-desktop">

                <img className="title HacklahomaTitle" src={HacklahomaTitle} alt="Hacklahoma Title" />
                <img className="title HacklahomaTitle2025" src={HacklahomaTitle2025} alt="Hacklahoma Title 2025" />
                
                <img className="subtitle HacklahomaSubtitle" src={HacklahomaSubtitle} alt="Hacklahoma Subtitle" />

                <img className="city City" src={City} alt="City" />
                <img className="city Clouds" src={Clouds} alt="Clouds" />

                <img className="mlhBanner" src={MLHBanner} alt="MLHBanner" />
                <img className="logo ScissorTail" src={ScissorTail} alt="ScissorTail Logo" />

                <a className="apply-button" href="https://register.hacklahoma.org">
                    <img src={ApplyButton} alt="Apply Button" />
                </a>

            </div>

            {/* Mobile Layout */}
            <div className="landing-page-mobile">

                <img className="title HacklahomaTitle" src={MobileHacklahomaTitle} alt="Hacklahoma Title" />
                <img className="title HacklahomaTitle2025" src={MobileHacklahomaTitle2025} alt="Hacklahoma Title 2025" />

                <img className="subtitle HacklahomaSubtitle" src={MobileHacklahomaSubtitle} alt="Hacklahoma Subtitle" />

                <img className="city City" src={MobileCity} alt="City" />
                <img className="city Clouds" src={MobileClouds} alt="Clouds" />

                <img className="mlhBanner" src={MobileMLHBanner} alt="MLHBanner" />
                <img className="logo ScissorTail" src={MobileScissorTail} alt="ScissorTail Logo" />

                <a className="apply-button-mobile" href="https://register.hacklahoma.org">
                    <img src={ApplyButton} alt="Apply Button" />
                </a>

            </div>

        </div>
      );
};

export default LandingPage;
