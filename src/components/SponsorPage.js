import React from "react";
import "./SponsorPage.css";

// Import assets
import SpecialThanks from "../assets/SS_SpecialThanks.png";
import MadeWithLove from "../assets/SS_MadeWithLove.png";

import Sponsor1 from "../assets/SS_Sponsor1.png";
import Sponsor2 from "../assets/SS_Sponsor2_Google.png";

const SponsorPage = () => {
  // Define sponsors with constraints
  const sponsors = [
    { src: Sponsor1, alt: "Sponsor 1 (Home Creations)" },
    { src: Sponsor2, alt: "Sponsor 2 (Google)" },
  ];

  return (
    <div className="sponsor-page">
      {/* Special Thanks */}
      <img className="SpecialThanks" src={SpecialThanks} alt="Special Thanks" />

      {/* Sponsor Grid */}
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            className="sponsor-image"
            src={sponsor.src}
            alt={sponsor.alt}
          />
        ))}
      </div>

      {/* Made With Love */}
      <img
        className="MadeWithLove"
        src={MadeWithLove}
        alt="Made With Love In Norman"
      />
    </div>
  );
};

export default SponsorPage;
