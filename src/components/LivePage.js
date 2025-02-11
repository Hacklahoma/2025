import React, { useState } from 'react';
import './LivePage.css';

// Schedule events with location defaulting to "TBD"
const scheduleItems = [
  {
    time: "9:30am",
    title: "Doors Open / Check In",
    location: "TBD",
    description: "Registration and check in. Please be on time!"
  },
  {
    time: "11:30am",
    title: "Opening Ceremony",
    location: "TBD",
    description: "Welcome remarks and an introduction to the hackathon."
  },
  {
    time: "12:00pm",
    title: "Hacking Begins",
    location: "TBD",
    description: "Kick off the hackathon and start working on your projects."
  },
  {
    time: "1:00pm",
    title: "Lunch",
    location: "TBD",
    description: "Enjoy a catered lunch provided by the organizers."
  },
  {
    time: "2:00pm",
    title: "GitHub Copilot Workshop by MLH",
    location: "TBD",
    description: "Learn how GitHub Copilot can boost your coding productivity."
  },
  {
    time: "3:00pm",
    title: "How to Build Effective AI Agents Workshop by Central.co",
    location: "TBD",
    description: "Discover best practices for building AI agents."
  },
  {
    time: "4:00pm",
    title: "Built on Ethereum Workshop by Founder of BuidlGuidl",
    location: "TBD",
    description: "Explore blockchain development and Ethereum-based applications."
  },
  {
    time: "5:00pm",
    title: "Interview Prep Workshop by Big Tech Industry Professional",
    location: "TBD",
    description: "Gain insights on preparing for technical interviews."
  },
  {
    time: "6:00pm",
    title: "Intro to Linux Workshop by Nima",
    location: "TBD",
    description: "Learn the basics of Linux and navigating the command line."
  },
  {
    time: "7:00pm",
    title: "Dinner",
    location: "TBD",
    description: "Dinner will be served."
  },
  {
    time: "8:00pm",
    title: "Chess Tournament",
    location: "TBD",
    description: "Join in for a friendly chess tournament."
  },
  {
    time: "12:00am",
    title: "Midnight Snack",
    location: "TBD",
    description: "Grab a late-night snack to keep you going."
  },
  {
    time: "9:30am",
    title: "Brunch",
    location: "TBD",
    description: "Enjoy a delicious brunch."
  },
  {
    time: "12:00pm",
    title: "Hacking Ends",
    location: "TBD",
    description: "Wrap up your projects and prepare for final submissions."
  },
  {
    time: "12:30pm",
    title: "Judging",
    location: "TBD",
    description: "Judges deliberate and evaluate your projects."
  },
  {
    time: "2:00pm",
    title: "Closing Ceremony",
    location: "TBD",
    description: "Winners are announced and the event concludes."
  },
];

// Sample announcements
const announcementItems = [
  
];

const LivePage = () => {
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState('');

  const openModal = (item, type) => {
    setModalData(item);
    setModalType(type);
  };

  const closeModal = () => {
    setModalData(null);
    setModalType('');
  };

  return (
    <div className="live-page">
      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-details">
              {modalType === 'schedule' ? (
                <>
                  <h2>{modalData.title}</h2>
                  <p><strong>Time:</strong> {modalData.time}</p>
                  <p><strong>Location:</strong> {modalData.location || 'TBD'}</p>
                  <p>{modalData.description}</p>
                </>
              ) : (
                <>
                  <h2>{modalData.title}</h2>
                  <p><strong>Time:</strong> {modalData.time}</p>
                  <p>{modalData.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="live-page-desktop">
        <div className="desktop-container">
          {/* Schedule on the left */}
          <div className="schedule-section">
            <h1>Schedule</h1>
            <div className="schedule-list-container">
              <ul className="schedule-list">
                {scheduleItems.map((item, index) => (
                  <li key={index} className="schedule-item" onClick={() => openModal(item, 'schedule')}>
                    <div className="schedule-item-time">{item.time}</div>
                    <div className="schedule-item-title">{item.title}</div>
                    <div className="schedule-item-location">{item.location || 'TBD'}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Announcements on the right */}
          <div className="announcements-section">
            <h1>Announcements</h1>
            <ul className="announcements-list">
              {announcementItems.map((item, index) => (
                <li key={index} className="announcement-item" onClick={() => openModal(item, 'announcement')}>
                  <div className="announcement-item-time">{item.time}</div>
                  <div className="announcement-item-title">{item.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="live-page-mobile">
        {/* Announcements on top */}
        <div className="announcements-section">
          <h1>Announcements</h1>
          <ul className="announcements-list">
            {announcementItems.map((item, index) => (
              <li key={index} className="announcement-item" onClick={() => openModal(item, 'announcement')}>
                <div className="announcement-item-time">{item.time}</div>
                <div className="announcement-item-title">{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Schedule below */}
        <div className="schedule-section">
          <h1>Schedule</h1>
          <div className="schedule-list-container">
            <ul className="schedule-list">
              {scheduleItems.map((item, index) => (
                <li key={index} className="schedule-item" onClick={() => openModal(item, 'schedule')}>
                  <div className="schedule-item-time">{item.time}</div>
                  <div className="schedule-item-title">{item.title}</div>
                  <div className="schedule-item-location">{item.location || 'TBD'}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePage;