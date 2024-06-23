import React, { useState, useRef } from 'react';
import { introvideo, HomePageVideo } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/IntroVideo/IntroVideo.css';

const IntroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
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
    <div className='flex justify-center items-center introvideobg h-[35vh] md:h-[60vh] lg:h-[75vh] xl:h-[90vh]'>
      <AnimatePresence>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}  // Trigger animation more than once
          variants={cardVariants}
          transition={transition}
        >
          <div className="relative rounded-xl h-[40vh] w-[95vw] md:h-[70vh] md:w-[70vw] py-8 lg:h-[85vh] lg:w-[80vw] xl:w-[80vw]">
            <video
              ref={videoRef}
              src={HomePageVideo}
              className='w-full h-full rounded-xl'
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />
            <button 
              onClick={handleMuteToggle}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IntroVideo;
