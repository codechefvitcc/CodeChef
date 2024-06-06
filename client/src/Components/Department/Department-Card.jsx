import React, { useState } from 'react';
import Popup from './Popup';
import '../../Styles/Department/Department-Card.css';

function DeptCard({ name, image: Icon, description, members, lead1, lead2 }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLeadClick = (e) => {
    // Prevent propagation to parent elements
    e.stopPropagation();
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  return (
    <div>
      <div className="department-card">
        <div className="card-top">
          <h3>{name}</h3>
          {Icon && (
            <span className="icon">
              <Icon size="38px" />
            </span>
          )}
        </ div>
        <p>{description}</p>
        <div className="leads-container">
          {/* Lead 1 */}
          <div className="lead">
            <img src={lead1.image} alt={lead1.name} className="lead-image" />
            <a href={lead1.linkedIn} target="_blank" rel="noopener noreferrer" className="lead-name" onClick={handleLeadClick}>
              {lead1.name}
            </a>
          </div>
          {/* Lead 2 (if exists) */}
          {lead2 && (
            <div className="lead">
              <img src={lead2.image} alt={lead2.name} className="lead-image" />
              <a href={lead2.linkedIn} target="_blank" rel="noopener noreferrer" className="lead-name" onClick={handleLeadClick}>
                {lead2.name}
              </a>
            </div>
          )}
        </div>
        <button className="member-count-button" onClick={handleButtonClick}>
          {members.length} Members
        </button>
      </div>

      {isPopupOpen && <Popup name={name} members={members} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

export default DeptCard;