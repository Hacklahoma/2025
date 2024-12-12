import React from "react";
import "./SponsorPage.css";

import SpecialThanks from "../assets/SS_SpecialThanks.png";
import MadeWithLove from "../assets/SS_MadeWithLove.png";

import Sponsor1 from "../assets/SS_Sponsor1.png";
import Sponsor2 from "../assets/SS_Sponsor2_Google.png";

const SponsorPage = () => {
  const sponsors = [
    { src: Sponsor1, alt: "Sponsor1 (Home Creations)" },
    { src: Sponsor2, alt: "Sponsor2 (Google)" },
    // Add more sponsors here by extending the array
  ];

  return (
    <div className="sponsor-page">
      {/* Header section */}
      <img className="SpecialThanks" src={SpecialThanks} alt="Special Thanks" />

      {/* Sponsor grid */}
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

      {/* Footer section */}
      <img
        className="MadeWithLove"
        src={MadeWithLove}
        alt="Made With Love In Norman"
      />
    </div>
  );
};

export default SponsorPage;
