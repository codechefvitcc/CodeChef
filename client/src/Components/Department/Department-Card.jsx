import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import Popup from "./Popup";
import "../../Styles/Department/Department-Card.css";
import { ImageLoaderComponent } from "../../Utility";

function DeptCard({ name, icon, description, memberCount, allMembers, currentLeads }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const departmentLeads = currentLeads.filter((lead) => lead.position === name);

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
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="department-card"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }} // Trigger animation more than once
          variants={cardVariants}
          transition={transition}
        >
          <div className="card-top">
            <h3>{name}</h3>
            {icon && (
              <span className="icon">
                <img src={icon} alt="Icon" height={"50px"} width={"50px"} />
              </span>
            )}
          </div>
          <p>{description}</p>
          <div className="w-full">
            <div className="lead-section flex justify-between mb-2 flex-col sm:flex-row">
              {departmentLeads?.map((lead, index) => (
                <div
                  className="flex items-center mt-1 mb-1 sm:mt-0 sm:mb-0"
                  key={index}
                >
                  <ImageLoaderComponent 
                    url={lead.imageUrl}
                    hashCode={lead.imageHashCode}
                    alt={lead.name}
                    className="rounded-full mx-1 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] object-cover"
                    blurWidth={'45px'}
                    blurHeight={'45px'}
                    rounded={true}
                  />
                  <div className="ml-1">
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
                        href={lead.linkedin}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <span className="sm:text-[12px] xl:text-[14px] capitalize">
                          {lead.name}
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="member-count-button w-full"
              onClick={handleButtonClick}
            >
              {memberCount === 1
                ? `${memberCount} Member`
                : `${memberCount} Members`}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isPopupOpen && (
          <Popup
            name={name}
            members={allMembers}
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
