import React from 'react';
import Presidents from './Presidents';
import Faculty from './Faculty';

function Leaders() {
  return (
    <div className="flex flex-wrap w-full">
      <h2 className="w-full text-center text-4xl font-bold text-black-800 mb-4">
        Our Leaders
      </h2>
      <Faculty />
      <Presidents />
    </div>
  );
}

export default Leaders;
