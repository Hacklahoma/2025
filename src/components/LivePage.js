import React, { useState } from 'react';
import './LivePage.css';

// Your schedule items
const scheduleItems = [
  {
    time: "9:30am",
    title: "Doors Open / Check In",
    location: "Devon Energy Hall",
    description: "Registration and check in. Please be on time!"
  },
  {
    time: "11:30am",
    title: "Opening Ceremony",
    location: "Devon Energy Hall Atrium",
    description: "Welcome remarks and an introduction to the hackathon."
  },
  {
    time: "12:00pm",
    title: "Hacking Begins :)",
    location: "Devon 130",
    description: "Start working on projects! Still looking for teammates? Join us for some team building in DEH 130!"
  },
  {
    time: "1:00pm",
    title: "Lunch",
    location: "Devon Energy Hall",
    description: "Chow down on some delicious shawarmas courtesy of Abu Omar Halal! (Chicken & vegan options, no beef)"
  },
  {
    time: "2:00pm",
    title: "GitHub Copilot Workshop by MLH",
    location: "Devon 120",
    description: "Learn how GitHub Copilot can boost your coding productivity."
  },
  {
    time: "3:00pm",
    title: "How to Build Effective AI Agents Workshop by Central.co",
    location: "Devon 130",
    description: "Discover best practices for building AI agents."
  },
  {
    time: "4:00pm",
    title: "Built on Ethereum Workshop by Founder of BuidlGuidl",
    location: "Devon 120",
    description: "Explore blockchain development and Ethereum-based applications."
  },
  {
    time: "5:00pm",
    title: "Interview Prep Workshop by Big Tech Industry Professional",
    location: "Devon 130",
    description: "Gain insights on preparing for technical interviews."
  },
  {
    time: "6:00pm",
    title: "Intro to Linux Workshop by Nima",
    location: "Devon 120",
    description: "Learn the basics of Linux and navigating the command line."
  },
  {
    time: "7:00pm",
    title: "Dinner",
    location: "Devon Energy Hall",
    description: "Take a break and grab some pizza!"
  },
  {
    time: "7:30pm",
    title: "Super Fun Mini Event :)",
    location: "Devon 130",
    description: "You won't want to miss this! Be there!"
  },
  {
    time: "8:00pm",
    title: "Chess Tournament",
    location: "Devon Energy Hall Atrium",
    description: "Join in for a friendly chess tournament."
  },
  {
    time: "9:00pm",
    title: "Super Smash Tournament",
    location: "Devon Energy Hall Atrium",
    description: "Join in for a friendly Super Smash tournament!"
  },  
  {
    time: "12:00am",
    title: "Midnight Snack",
    location: "Devon Energy Hall",
    description: "Grab some milk tea and cookies :O"
  },
  {
    time: "9:30am",
    title: "Brunch",
    location: "Devon Energy Hall",
    description: "Enjoy a delicious brunch."
  },
  {
    time: "11:00am",
    title: "Devpost Submission (Soft) Deadline",
    location: "Devpost",
    description: "Make sure to submit projects by noon!"
  },
  {
    time: "12:00pm",
    title: "Hacking Ends!",
    location: "Devpost",
    description: "Wrap up your projects and prepare for final submissions."
  },
  {
    time: "12:30pm",
    title: "Judging / Project Expo",
    location: "REPF 200 (2nd Floor)",
    description: "Judges deliberate and evaluate your projects."
  },
  {
    time: "2:30pm",
    title: "Closing Ceremony",
    location: "Devon Energy Hall Atrium",
    description: "Winners are announced and the event concludes."
  },
];

// Find the index of the first item with time "12:00am"
const midnightIndex = scheduleItems.findIndex(item => item.time === "12:00am");

// Split the schedule into Saturday and Sunday lists
const saturdayScheduleItems = midnightIndex !== -1 
  ? scheduleItems.slice(0, midnightIndex) 
  : scheduleItems;
const sundayScheduleItems = midnightIndex !== -1 
  ? scheduleItems.slice(midnightIndex) 
  : [];

const announcementItems = []; // Your announcement items

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
          {/* Schedule Section */}
          <div className="schedule-section">
            <h1>Saturday Schedule</h1>
            <div className="schedule-list-container">
              <ul className="schedule-list">
                {saturdayScheduleItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="schedule-item" 
                    onClick={() => openModal(item, 'schedule')}
                  >
                    <div className="schedule-item-time">{item.time}</div>
                    <div className="schedule-item-title">{item.title}</div>
                    <div className="schedule-item-location">{item.location || 'TBD'}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="schedule-section">
            <h1>Sunday Schedule</h1>
            <div className="schedule-list-container">
              <ul className="schedule-list">
                {sundayScheduleItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="schedule-item" 
                    onClick={() => openModal(item, 'schedule')}
                  >
                    <div className="schedule-item-time">{item.time}</div>
                    <div className="schedule-item-title">{item.title}</div>
                    <div className="schedule-item-location">{item.location || 'TBD'}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="announcements-section">
            <h1>Announcements</h1>
            <ul className="announcements-list">
              {announcementItems.map((item, index) => (
                <li 
                  key={index} 
                  className="announcement-item" 
                  onClick={() => openModal(item, 'announcement')}
                >
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
              <li 
                key={index} 
                className="announcement-item" 
                onClick={() => openModal(item, 'announcement')}
              >
                <div className="announcement-item-time">{item.time}</div>
                <div className="announcement-item-title">{item.title}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Section */}
        <div className="schedule-section">
          <h1>Saturday Schedule</h1>
          <div className="schedule-list-container">
            <ul className="schedule-list">
              {saturdayScheduleItems.map((item, index) => (
                <li 
                  key={index} 
                  className="schedule-item" 
                  onClick={() => openModal(item, 'schedule')}
                >
                  <div className="schedule-item-time">{item.time}</div>
                  <div className="schedule-item-title">{item.title}</div>
                  <div className="schedule-item-location">{item.location || 'TBD'}</div>
                </li>
              ))}
            </ul>
          </div>
          <h1>Sunday Schedule</h1>
          <div className="schedule-list-container">
            <ul className="schedule-list">
              {sundayScheduleItems.map((item, index) => (
                <li 
                  key={index} 
                  className="schedule-item" 
                  onClick={() => openModal(item, 'schedule')}
                >
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
