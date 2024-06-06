import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types";

import Popup from './Popup';
import '../../Styles/Department/Department-Card.css';

function DeptCard({ name, icon, description, members, lead }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  const transition = {
    duration: 0.75,
  }

  return (
    <div>
      <AnimatePresence>
        <motion.div 
          className="department-card"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}  // Trigger animation more than once
          variants={cardVariants}
          transition={transition}
        >
          <div className="card-top">
            <h3>{name}</h3>
            {icon && (
              <span className="icon">
                {React.createElement(icon, { size: "38px" })}
              </span>
            )}
          </div>
          <p>{description}</p>
          <div className="lead-section flex justify-between">
            {lead.map((ele, index) => (
              <div className="flex items-center" key={index}>
                <img
                  src={ele.leadImg}
                  className="rounded-full mx-1"
                  style={{
                    height: "38px",
                    width: "50px",
                    objectFit: "cover",
                  }}
                  alt={ele.leadName}
                />
                <div>
                  <p
                    className="card-subtitle"
                    style={{
                      fontWeight: "500",
                      fontSize: "14px !important",
                      color: "#546e7a !important",
                    }}
                  >
                    <a
                      target="_blank"
                      href={ele.leadLinkedIn}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {ele.leadName}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="member-count-button" onClick={handleButtonClick}>
            {members.length} Members
          </button>
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence>
        {isPopupOpen && (
          <Popup
            name={name}
            members={members}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// prop type is defined here to overcome the issue one get the try to use "map" function on an array of data (no need to pay much attention to it)
DeptCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  description: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      regNo: PropTypes.string.isRequired,
      linkedIn: PropTypes.string.isRequired,
    })
  ).isRequired,
  lead: PropTypes.arrayOf(
    PropTypes.shape({
      leadName: PropTypes.string.isRequired,
      leadImg: PropTypes.string.isRequired,
      leadLinkedIn: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default DeptCard;