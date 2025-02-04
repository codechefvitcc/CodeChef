import React from 'react';
import { motion } from 'framer-motion';

// Default profile pic
import { defaultpfp } from '../../assets';

// BlurHash Utility
import { ImageLoaderComponent } from '../../Utility';

const LeadCard = ({ image, name, link, hashCode }) => {
  return (
    <motion.div 
      className="w-40 h-auto border bg-white rounded-lg shadow-lg p-3 flex flex-col items-center m-3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.85 }}
    >
      <ImageLoaderComponent
        url={image || defaultpfp}
        hashCode={hashCode || 'L7OgHHof00of01kB~pj[~Uay~Vj@'}
        alt="profile picture"
        className="w-24 h-24 rounded-full mb-2 object-cover object-end"
        blurWidth={'96px'}
        blurHeight={'96px'}
        rounded={true}
      />
      <div
        className="text-sm font-semibold text-center truncate"
        style={{ maxWidth: '140px' }}
      >
        {name}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ maxWidth: '140px' }}
      >
        <div className="flex items-center justify-center bg-[#0288D1] text-white py-1 px-2 rounded text-xs mt-2">
          LinkedIn
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn"
            className="w-4 h-4 ml-1"
          />
        </div>
      </a>
    </motion.div>
  );
};

export default LeadCard;
