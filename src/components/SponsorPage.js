import React from 'react';
import './SponsorPage.css';

// Desktop Images
import SpecialThanks from '../assets/SS_SpecialThanks.png';
import MadeWithLove from '../assets/SS_MadeWithLove.png';

// Mobile Images
import MobileText from '../assets/MSS_Text.png';

// Sponsors
import HomeCreations from '../assets/Sponsors/HomeCreations.png';
import Paycom from '../assets/Sponsors/Paycom.png';
import Google from '../assets/Sponsors/Google.png';
import BakerHughes from '../assets/Sponsors/BakerHughes.png';
import Devon from '../assets/Sponsors/Devon.png';
import Williams from '../assets/Sponsors/Williams.png';
import Boeing from '../assets/Sponsors/Boeing.png';
import CocaCola from '../assets/Sponsors/CocaCola.png';

const SponsorPage = () => {

    return (
        <div className="sponsor-page">

            {/* Desktop Layout */}
            <div className="sponsor-page-desktop">

                <img className="SpecialThanks" src={SpecialThanks} alt="SpecialThanks" />
                <img className="MadeWithLove" src={MadeWithLove} alt="MadeWithLoveInNorman" />

                <div className="logo-grid-container">
                    <div className="logo-grid-desktop">
                        <a href="https://www.homecreations.com" target="_blank" rel="noopener noreferrer">
                            <img src={HomeCreations} alt="Home Creations" style={{ gridColumn: "1", gridRow: "1" }} />
                        </a>
                        <a href="https://www.paycom.com" target="_blank" rel="noopener noreferrer">
                            <img src={Paycom} alt="Paycom" style={{ gridColumn: "2", gridRow: "1" }} />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={Google} alt="Google" style={{ gridColumn: "3", gridRow: "1" }} />
                        </a>
                        <a href="https://www.bakerhughes.com" target="_blank" rel="noopener noreferrer">
                            <img src={BakerHughes} alt="Baker Hughes" style={{ gridColumn: "4", gridRow: "1" }} />
                        </a>
                        <a href="https://www.devonenergy.com" target="_blank" rel="noopener noreferrer">
                            <img src={Devon} alt="Devon" style={{ gridColumn: "1", gridRow: "2" }} />
                        </a>
                        <a href="https://www.williams.com" target="_blank" rel="noopener noreferrer">
                            <img src={Williams} alt="Williams" style={{ gridColumn: "2", gridRow: "2" }} />
                        </a>
                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer">
                            <img src={Boeing} alt="Boeing" style={{ gridColumn: "3", gridRow: "2" }} />
                        </a>
                        <a href="https://www.coca-cola.com" target="_blank" rel="noopener noreferrer">
                            <img src={CocaCola} alt="Coca Cola" style={{ gridColumn: "4", gridRow: "2" }} />
                        </a>
                    </div>
                </div>


            </div>

            {/* Mobile Layout */}
            <div className="sponsor-page-mobile">

                <img className="SpecialThanks" src={MobileText} alt="MobileText" />

                <div className="logo-grid-container">
                    <div className="logo-grid-mobile">
                        <a href="https://www.homecreations.com" target="_blank" rel="noopener noreferrer">
                            <img src={HomeCreations} alt="Home Creations" style={{ gridColumn: "1", gridRow: "1" }} />
                        </a>
                        <a href="https://www.paycom.com" target="_blank" rel="noopener noreferrer">
                            <img src={Paycom} alt="Paycom" style={{ gridColumn: "2", gridRow: "1" }} />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <img src={Google} alt="Google" style={{ gridColumn: "1", gridRow: "2" }} />
                        </a>
                        <a href="https://www.bakerhughes.com" target="_blank" rel="noopener noreferrer">
                            <img src={BakerHughes} alt="Baker Hughes" style={{ gridColumn: "2", gridRow: "2" }} />
                        </a>
                        <a href="https://www.devonenergy.com" target="_blank" rel="noopener noreferrer">
                            <img src={Devon} alt="Devon" style={{ gridColumn: "1", gridRow: "3" }} />
                        </a>
                        <a href="https://www.williams.com" target="_blank" rel="noopener noreferrer">
                            <img src={Williams} alt="Williams" style={{ gridColumn: "2", gridRow: "3" }} />
                        </a>
                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer">
                            <img src={Boeing} alt="Boeing" style={{ gridColumn: "1", gridRow: "4" }} />
                        </a>
                        <a href="https://www.coca-cola.com" target="_blank" rel="noopener noreferrer">
                            <img src={CocaCola} alt="Coca Cola" style={{ gridColumn: "2", gridRow: "4" }} />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SponsorPage;