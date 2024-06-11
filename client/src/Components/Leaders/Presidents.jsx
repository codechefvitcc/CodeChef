import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PresidentCard from './President-Card';

import image from '../../assets/vishalKrYadav.jpg'
import '../../Styles/Leaders/Presidents.css';

const mockData = [
  {
    name: "Shashank Sharma",
    photo: image,
    year: "2024-25",
    vision: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "shashank.sharma2022@vitstudent.ac.in",
    linkedin: "https://example.com"
  },

  {
    name: "Vishal kumar yadav",
    photo: image,
    year: "2025-26",
    vision: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com"
  },

  {
    name: "Akkilesh",
    photo: image,
    year: "2026-27",
    vision: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com"
  },

  {
    name: "Sidharth tiwari",
    photo: image,
    year: "2026-27",
    vision: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem!",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com"
  },

  {
    name: "Akkilesh",
    photo: image,
    year: "2026-27",
    vision: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com"
  }
]

function Presidents() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockData.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mockData.length) % mockData.length);
  };

  return (
    <div className="w-full md:w-1/2 min-w-[384px] 
    md:min-h-[250px] sm:min-h-[400px] min-h-[400px] 
    h-[35vw] px-5 flex flex-col items-center">
      <h2 className='mb-[15px] text-center font-bold 
      text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl'>Presidents</h2>

      <div className='flex flex-col items-center'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 600, damping: 100 }}
        >
          <PresidentCard
            name={mockData[currentIndex].name}
            photo={mockData[currentIndex].photo}
            year={mockData[currentIndex].year}
            vision={mockData[currentIndex].vision}
            mail={mockData[currentIndex].mail}
            linkedin={mockData[currentIndex].linkedin}
          />
        </motion.div>

        <div className='flex gap-10 
        mt-5 xl:mt-5 lg:mt-3 md:mt-1 sm:mt-5' style={{ width: '120px', justifyContent: 'space-between' }}>
          {currentIndex !== 0 ? (
            <button 
              className="carousel-button flex items-center justify-center 
              w-7 xl:w-10 lg:w-9 md:w-7 sm:w-10
              h-7 xl:h-10 lg:h-9 md:h-7 sm:h-10
              bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none" 
              onClick={prevItem}
            >
              <svg className="w-5 xl:w-6 md:w-4 sm:w-6 
              h-5 xl:h-6 md:h-4 sm:h-6 
              text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          ) : (
            <div className="w-7 xl:w-10 lg:w-9 md:w-7 sm:w-10 
            h-7 xl:h-10 lg:h-9 md:h-7 sm:h-10" />
          )}

          {currentIndex !== mockData.length - 1 ? (
            <button 
              className="carousel-button flex items-center justify-center 
              w-7 xl:w-10 lg:w-9 md:w-7 sm:w-10 
              h-7 xl:h-10 lg:h-9 md:h-7 sm:h-10 
              bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none" 
              onClick={nextItem}
            >
              <svg className="w-5 xl:w-6 md:w-4 sm:w-6 
              h-5 xl:h-6 md:h-4 sm:h-6 
              text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <div className="w-7 xl:w-10 lg:w-9 md:w-7 sm:w-10 
            h-7 xl:h-10 lg:h-9 md:h-7 sm:h-10" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Presidents;
