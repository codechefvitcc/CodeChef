import React from 'react';
import Presidents from './Presidents';
import Faculty from './Faculty';

function Leaders() {
  return (
    <div className="flex flex-wrap w-full">
      <h2 className="w-full text-center text-4xl font-bold text-black-800 mb-4">
        Our Leaders
      </h2>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <Faculty />
      </div>
        <Presidents />
    </div>
  );
}

export default Leaders;
