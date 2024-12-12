import React, { useState } from 'react';
import './FaqPage.css';

// Desktop Assets
import FAQText from '../assets/S3_FAQ.png';

// Mobile Assets
import MobileFAQText from '../assets/MS3_FAQ.png';

const isMobile = window.innerWidth <= 751; // Check if the device is mobile

const FaqPage = () => {

    const faqQuestions = [
        "What's a hack?",
        "Does it cost anything?",
        "Any travel reimbursement?",
        "Will there be food?",
        "Do I need experience?",
        "Are there teams?",
        "What should I bring?",
        "What is the code of conduct?",
        "Who can attend?",
        "Can I start my project before?",
        "Do I need to stay the whole time?",
        "Can't find your question?"
    ];

    const faqAnswers = [
        "A hack is something that is jury-rigged inelegantly but effectively, usually as a temporary solution to a problem. Like duct taping a hole in a sinking boat to keep it afloat.",
        "Admissions is completely free for all students!",
        "At this time, we will not be providing travel reimbursements.",
        "We will supply food for Saturday's lunch, dinner, and Sunday's breakfast with plenty of snacks and drinks throughout. All free of charge!",
        "No experience is needed. Whether you're a coder, an artist, or a writer, you'll get to work with various mentors, attend workshops, interact with companies, and learn alongside fellow participants.",
        "We encourage everyone to work with a team! Teams may contain up to 4 people. We will also be offering a team-building session at the beginning of the hacking period.",
        "You should bring a laptop, chargers, toiletries, a change of clothes, sleeping bag, pillow, and anything else you would need for an overnight weekend. Keep in mind that Hacklahoma will last for 24hrs.",
        "Hacklahoma welcomes students from all backgrounds and values the importance of a safe and all-inclusive space. Anyone attending must adhere to the MLH Code of Conduct.",
        "Any student over the age of 18 can participate, regardless of major, background, or skill level.",
        "No, you cannot work or copy past projects. You can brainstorm ideas and collect whatever software and tools you need, as long as the project is completely new.",
        "No, you're not confined here. Feel free to go home and get some rest, but be back in time for judging!",
        "If your question wasn't answered, please feel free to contact us via Instagram, Twitter, Facebook or send us an email to hacklahoma@ou.edu"
    ];

    const pastelColors = ['#FAEDCB', '#C9E4DE', '#C6DEF1', '#DBCDF0', '#F2C6DE', '#F7D9C4'];

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);
    };

    const closeModal = () => {
        setSelectedQuestionIndex(null);
    };

    // Group questions into rows of two
    const rows = [];
    for (let i = 0; i < faqQuestions.length; i += 2) {
        rows.push(faqQuestions.slice(i, i + 2));
    }

    return (
        <div className="faq-page">

            {/* Desktop Layout */}
            <div className="faq-page-desktop">

                <img className="FAQText" src={FAQText} alt="FAQText" />

                <div className="faq-container">
                    {/* Map over the rows */}
                    {rows.map((rowQuestions, rowIndex) => (
                        <div
                            className={`faq-row ${rowIndex % 2 === 0 ? 'row-shifted' : ''}`}
                            key={rowIndex}
                        >
                            {rowQuestions.map((question, index) => (
                                <div
                                    className="faq-section"
                                    key={rowIndex * 2 + index}
                                    style={{ backgroundColor: pastelColors[(rowIndex * 2 + index) % pastelColors.length] }}
                                    onClick={() => handleQuestionClick(rowIndex * 2 + index)}
                                >
                                    {question}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            {/* Mobile Layout */}
            <div className="faq-page-mobile">

                <img className="FAQText" src={MobileFAQText} alt="FAQText" />

                <div className="faq-container-mobile">
                    {/* Map over the rows */}
                    {rows.map((rowQuestions, rowIndex) => (
                        <div
                            className={`faq-row-mobile ${rowIndex % 2 === 0 ? 'row-shifted-mobile' : ''}`}
                            key={rowIndex}
                        >
                            {rowQuestions.map((question, index) => (
                                <div
                                    className="faq-section-mobile"
                                    key={rowIndex * 2 + index}
                                    style={{ backgroundColor: pastelColors[(rowIndex * 2 + index) % pastelColors.length] }}
                                    onClick={() => handleQuestionClick(rowIndex * 2 + index)}
                                >
                                    {question}
                                </div>
                            ))}
                        </div>
                        ))}
                    </div>
                    
                </div>

            {/* Modal */}
            {selectedQuestionIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className={isMobile ? "modal-close-mobile" : "modal-close"}
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <div className="modal-text">
                            {faqAnswers[selectedQuestionIndex]}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default FaqPage;
