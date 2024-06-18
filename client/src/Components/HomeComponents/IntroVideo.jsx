import React, { useState } from 'react';

import {introvideo} from '../../assets'
import { motion, AnimatePresence } from 'framer-motion';

import '../../Styles/IntroVideo/IntroVideo.css'

const IntroVideo = () => {
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
    <div className='flex justify-center items-center introvideobg h-[50vh] md:h-[60vh] lg:h-[75vh]'>
      <AnimatePresence>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}  // Trigger animation more than once
          variants={cardVariants}
          transition={transition}
        >
          <div className="h-[30vh] w-[95vw] md:h-[50vh] md:w-[70vw] lg:h-[60vh] lg:w-[50vw]">
            <video
              src={introvideo}
              className='w-full h-full'
              autoPlay
              loop
              playsInline
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IntroVideo;
