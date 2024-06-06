import React, { useState, useEffect } from 'react';

import images from '../assets/gallery';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="text-center bg-codechef-blue my-10">
      <h2 className='text-white font-bold text-3xl py-[1%]'>Gallery</h2>
      <div className="relative w-full lg:w-1/2 xl:w-3/4 mx-auto overflow-hidden h-[400px]">
        {images.map((img, index) => (
          <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
            index === currentIndex ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <img src={img} alt={`Image ${index + 1}`} className="w-full h-full" />
        </div>
        ))}

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
          onClick={handlePrevClick}
        >
          ❮
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
          onClick={handleNextClick}
        >
          ❯
        </button>
      </div>
      <div className="bg-yellow-200 flex justify-center mt-4 space-x-2 py-[1%] overflow-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-12 object-cover cursor-pointer transition-transform duration-300 ${
              index === currentIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
