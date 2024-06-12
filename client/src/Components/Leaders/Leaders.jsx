import React from 'react';
import { motion } from 'framer-motion';

import Presidents from './Presidents';
import Faculty from './Faculty';

function Leaders() {
  return (
    <motion.div 
      className="flex flex-wrap w-full"
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="w-full text-center text-4xl font-bold text-black-800 mb-4">
        Our Leaders
      </h2>
      <Faculty />
      <Presidents />
    </motion.div>
  );
}

export default Leaders;
