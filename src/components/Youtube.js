import React from 'react';
import './Youtube.css';

const Youtube = () => {

    return (
        <div className="youtube-page">

            {/* Desktop Layout */}
            <div className="youtube-page-desktop">

                <iframe src="https://www.youtube.com/embed/-lK1zw-V1EY?si=_R9R1NW_W5SYokCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

            {/* Mobile Layout */}
            <div className="youtube-page-mobile">

                <iframe src="https://www.youtube.com/embed/-lK1zw-V1EY?si=_R9R1NW_W5SYokCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

        </div>
      );
};

export default Youtube;