import React from 'react';
import './SponsorPage.css';

import SpecialThanks from '../assets/SS_SpecialThanks.png';
import MadeWithLove from '../assets/SS_MadeWithLove.png';

import Sponsor1 from '../assets/SS_Sponsor1.png';
import Sponsor2 from '../assets/SS_Sponsor2_Google.png';

const SponsorPage = () => {
    return (
        <div className="sponsor-page">

            {/* Desktop Layout */}
            <div className="sponsor-page-desktop">
                <img className="SpecialThanks" src={SpecialThanks} alt="SpecialThanks" />
                <img className="MadeWithLove" src={MadeWithLove} alt="MadeWithLoveInNorman" />

                <img className="Sponsor1" src={Sponsor1} alt="Sponsor1 (Home Creations)" />
                <img className="Sponsor2" src={Sponsor2} alt="Sponsor2 (Google)" />
            </div>

            {/* Mobile Layout */}
            <div className="sponsor-page-mobile">
                <img className="SpecialThanks" src={SpecialThanks} alt="SpecialThanks" />
                <img className="MadeWithLove" src={MadeWithLove} alt="MadeWithLoveInNorman" />

                <img className="Sponsor1" src={Sponsor1} alt="Sponsor1 (Home Creations)" />
                <img className="Sponsor2" src={Sponsor2} alt="Sponsor2 (Google)" />
            </div>

        </div>
    );
};

export default SponsorPage;