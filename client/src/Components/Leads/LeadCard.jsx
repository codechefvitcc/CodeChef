import React from 'react';

// Default profile pic
import { defaultpfp } from '../../assets';

// BlurHash Utility
import { ImageLoaderComponent } from '../../Utility';

const LeadCard = ({ image, name, link, hashCode }) => {
  return (
    <div className="w-40 h-auto border bg-white rounded-lg shadow-lg p-3 flex flex-col items-center m-3">
      <ImageLoaderComponent
        url={image || defaultpfp}
        hashCode={hashCode || 'L7OgHHof00of01kB~pj[~Uay~Vj@'}
        alt="profile picture"
        className="w-24 h-24 rounded-full mb-2 object-cover object-end"
        blurWidth={'50px'}
        blurHeight={'50px'}
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
        <div className="flex items-center justify-center bg-blue-500 text-white py-1 px-2 rounded text-xs mt-2">
          LinkedIn
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn"
            className="w-4 h-4 ml-1"
          />
        </div>
      </a>
    </div>
  );
};

export default LeadCard;
