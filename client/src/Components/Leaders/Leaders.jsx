import React from 'react';

import Presidents from './Presidents';
import Faculty from './Faculty';

function Leaders() {
  return (
    <div 
      className="flex flex-wrap w-full bg-[#c6dcfea3] pt-[50px]"
      style={{ background: 'linear-gradient(to bottom, #d8e6ff99 30%, #fff 70%)' }}
    >
        <h2 className="w-full text-center text-4xl font-bold text-black-800 mb-4">
          Our Leaders
        </h2>
        <Faculty />
        <Presidents />
    </div>
  );
}

export default Leaders;
