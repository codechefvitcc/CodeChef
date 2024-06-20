import React from 'react';
import { motion } from 'framer-motion';
import '../../Styles/Department/Popup.css'; // Retain for overflow styling and any specific adjustments
import { RxCross1 } from "react-icons/rx";

// Variants for the backdrop animation
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.6 } },
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
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: { ease: "easeOut" }
  }
};

function Popup({ name, members, onClose }) {

  const department = members.find(dept => dept.departmentName === name);
  const departmentMembers = department.members;

  return (
    <motion.div 
      className="backdrop fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
      variants={backdropVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit"
      onClick={onClose}
    >
      <motion.div 
        className="modal relative bg-white p-5 rounded-lg text-center w-full z-20"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-md sm:text-2xl font-bold whitespace-normal">{name} Members</h2>
        <span className="close-icon absolute top-1 right-1 text-lg sm:text-2xl cursor-pointer" onClick={onClose}>
          <RxCross1 />
        </span>
        <table className="members-display table-auto w-full border-collapse mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              {/* <th className="px-4 py-2 border">Registration no.</th> */}
              <th className="px-4 py-2 border">LinkedIn link</th>
            </tr>
          </thead>
          <tbody>
            {departmentMembers.map((member, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{member.name}</td>
                {/* <td className="px-4 py-2 border">{member.regNo}</td> */}
                <td className="px-4 py-2 border flex justify-center items-center">
                  <motion.button 
                    className='flex items-center gap-2'
                    onClick={() => window.open(member.linkedin, '_blank')} 
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      width="20px"
                      height="20px"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    <span className='hidden sm:block font-semibold'>Connect</span>
                  </motion.button>
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