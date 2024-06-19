import React from 'react';

import TypewriterComponent from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';

const ErrorBox = () => {

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
    <AnimatePresence>
        <motion.div 
          className=""
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}  // Trigger animation more than once
          variants={cardVariants}
          transition={transition}
        >
          <div className="border border-red-500 bg-red-100 p-6 rounded-lg shadow-md max-w-sm mx-auto my-6">
            <h1 className="text-red-500 text-2xl mb-4">Some Error Occurred</h1>
            <div className="text-gray-800">
              <p className="mb-2">
                <TypewriterComponent
                  options={{
                    delay: 50, // Adjust typing speed (lower is faster)
                    cursor: '', // Hide cursor after typing
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('* Kindly try refreshing the page.')
                      .start();
                  }}
                />
              </p>
              <p>
                <TypewriterComponent
                  options={{
                    delay: 50, // Adjust typing speed (lower is faster)
                    cursor: '', // Hide cursor after typing
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(2000).typeString('* If error persists, try after some time while we are working on it.')
                      .start();
                  }}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
  );
};

export default ErrorBox;
