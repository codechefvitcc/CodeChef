import React from 'react';

//import faculty and quotes images from assets
import { faculty, quotes } from '../../assets/leaders';

function Faculty() {
  return (
    <div className="bg-blue-600 w-full h-full p-4 flex items-center justify-center">
      <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-xl w-full">
        <div className="w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          {/* quotes image */}
          <div className="mb-4">
            <img
              className="w-8 h-8 sm:w-12 sm:h-12"
              src={quotes}
              alt="Quotes"
            />
          </div>
          {/* quotes text */}
          <div className="text-gray-600 text-sm sm:text-lg mb-6">
            <p>
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
              Hello Hello Hello Hello Hello Hello Hello 
            </p>
          </div>
          {/* faculty details */}
          <div className="text-gray-800 text-md font-semibold">
            <p>Shridevi</p>
            <p className="text-gray-500 text-sm">Faculty coordinator</p>
          </div>
        </div>
        {/* faculty image */}
        <div className="w-1/2 flex justify-center items-center p-4 sm:p-8">
          <img
            className="w-full h-auto max-h-48 sm:max-h-64 object-cover"
            src={faculty}
            alt="Group"
          />
        </div>
      </div>
    </div>
  );
}

export default Faculty;
