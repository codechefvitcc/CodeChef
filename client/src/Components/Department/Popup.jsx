import React from 'react';
import { motion } from 'framer-motion';
import '../../Styles/Department/Popup.css'; // Retain for overflow styling and any specific adjustments
import { RxCross1 } from "react-icons/rx";

// Variants for the backdrop animation
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Variants for the modal animation
const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '0',
    transition: { delay: 0.5 }
  },
};

function Popup({ name, members, onClose }) {
  return (
    <motion.div 
      className="backdrop fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
      variants={backdropVariants} 
      initial="hidden" 
      animate="visible" 
      exit="hidden"
      onClick={onClose}
    >
      <motion.div 
        className="modal relative bg-white p-5 rounded-lg text-center w-full z-20"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-2xl font-bold mb-4">{name} Members</h2> {/* Added Tailwind classes for heading */}
        <span className="close-icon absolute top-2 right-2 text-2xl cursor-pointer" onClick={onClose}>
          <RxCross1 />
        </span>
        <table className="members-display table-auto w-full border-collapse mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Registration no.</th>
              <th className="px-4 py-2 border">LinkedIn link</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{member.name}</td>
                <td className="px-4 py-2 border">{member.regNo}</td>
                <td className="px-4 py-2 border">
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    LinkedIn
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Popup;