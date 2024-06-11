import React from 'react';
import Presidents from './Presidents';
import Faculty from './Faculty';

function Leaders() {
  return (
    <div className="flex flex-wrap w-screen">
      <h2 className="w-screen text-center p-2 text-4xl font-bold text-black-800 mb-4">
        Our leaders
      </h2>
      <Faculty />
      <Presidents />
    </div>
  );
}

export default Leaders;
