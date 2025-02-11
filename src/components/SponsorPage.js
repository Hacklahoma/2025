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
import Koch from '../assets/Sponsors/Koch.png';
import StandOutStickers from '../assets/Sponsors/StandOutStickers.png';
import Ether from '../assets/Sponsors/Ethereum.png'
import GCOE from '../assets/Sponsors/GCOE.png'

const SponsorPage = () => {

    return (
        <div className="sponsor-page">

            {/* Desktop Layout */}
            <div className="sponsor-page-desktop">

                <img className="SpecialThanks" src={SpecialThanks} alt="SpecialThanks" />
                <img className="MadeWithLove" src={MadeWithLove} alt="MadeWithLoveInNorman" />

                <div className="logo-grid-container">
                    <div className="logo-grid-desktop">
                        
                        <a href="https://esp.ethereum.foundation/" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "1" }}>
                            <img src={Ether} alt="Ethereum Foundation"  />
                        </a>

                        <a href="https://www.bakerhughes.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "1" }}>
                            <img src={BakerHughes} alt="Baker Hughes"  />
                        </a>

                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "1" }}>
                            <img src={Boeing} alt="Boeing"  />
                        </a>

                        <a href="https://www.paycom.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "4", gridRow: "1" }}>
                            <img src={Paycom} alt="Paycom"  />
                        </a>

                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "5", gridRow: "1" }}>
                            <img src={Google} alt="Google"  />
                        </a>

                        <a href="https://www.devonenergy.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "2" }}>
                            <img src={Devon} alt="Devon"  />
                        </a>

                        <a href="https://www.williams.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "2" }}>
                            <img src={Williams} alt="Williams"  />
                        </a>

                        <a href="https://www.coca-cola.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "2" }}>
                            <img src={CocaCola} alt="Coca Cola"  />
                        </a>

                        <a href="https://www.kochinc.com/" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "4", gridRow: "2" }}>
                            <img src={Koch} alt="Koch"  />
                        </a>

                        <a href="https://www.homecreations.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "5", gridRow: "2" }}>
                            <img src={HomeCreations} alt="Home Creations"  />
                        </a>

                        <a href="https://www.ou.edu/coe" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1/5", gridRow: "3" }}>
                            <img src={GCOE} alt="Gallogly College of Engineering"  />
                        </a>

                        <a href="https://hackp.ac/mlh-StandOutStickers-hackathons" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "5", gridRow: "3" }}>
                            <img src={StandOutStickers} alt="Stand Out Stickers"  />
                        </a>

                    </div>
                </div>


            </div>

            {/* Mobile Layout */}
            <div className="sponsor-page-mobile">

                <img className="SpecialThanks" src={MobileText} alt="MobileText" />

                <div className="logo-grid-container">
                    <div className="logo-grid-mobile">

                        <a href="https://esp.ethereum.foundation/" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "1" }}>
                            <img src={Ether} alt="Ethereum Foundation"  />
                        </a>

                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "1" }}>
                            <img src={Boeing} alt="Boeing"  />
                        </a>

                        <a href="https://www.bakerhughes.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "1" }}>
                            <img src={BakerHughes} alt="Baker Hughes"  />
                        </a>

                        <a href="https://www.coca-cola.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "2" }}>
                            <img src={CocaCola} alt="Coca Cola"  />
                        </a>

                        <a href="https://www.paycom.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "2" }}>
                            <img src={Paycom} alt="Paycom"  />
                        </a>

                        <a href="https://www.devonenergy.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "2" }}>
                            <img src={Devon} alt="Devon"  />
                        </a>

                        <a href="https://www.williams.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "3" }}>
                            <img src={Williams} alt="Williams"  />
                        </a>

                        <a href="https://www.kochinc.com/" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "3" }}>
                            <img src={Koch} alt="Koch"  />
                        </a>

                        <a href="https://www.homecreations.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "3" }}>
                            <img src={HomeCreations} alt="Home Creations"  />
                        </a>

                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "1", gridRow: "4" }}>
                            <img src={Google} alt="Google"  />
                        </a>

                        <a href="https://www.ou.edu/coe" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "2", gridRow: "4" }}>
                            <img src={GCOE} alt="Gallogly College of Engineering"  />
                        </a>

                        <a href="https://hackp.ac/mlh-StandOutStickers-hackathons" target="_blank" rel="noopener noreferrer" style={{ gridColumn: "3", gridRow: "4" }}>
                            <img src={StandOutStickers} alt="Stand Out Stickers"  />
                        </a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default SponsorPage;