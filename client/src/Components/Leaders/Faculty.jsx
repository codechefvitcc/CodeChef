import React from 'react';
import { motion } from 'framer-motion';

//import faculty and quotes images from assets
import { faculty, quotes } from '../../assets/leaders';

function Faculty() {
  return (
    <div className="w-full md:w-1/2 min-w-[384px] 
      xl:min-h-[250px] lg:min-h-[250px] md:min-h-[250px] sm:min-h-[400px] min-h-[350px] 
      h-[35vw] px-5 flex flex-col items-center" 
    >
      <h2 className='mb-[15px] text-center font-bold
      text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl'>Faculty-in-charge</h2>
      
      <motion.div className="
        w-[350px] xl:w-[590px] lg:w-[500px] md:w-[370px] sm:w-[570px] 
        h-[250px] xl:h-[300px] lg:h-[230px] md:h-[190px] sm:h-[280px]
        gap-[10px] xl:gap-[30px] lg:gap-[20px] md:gap-[20px] sm:gap-[30px]
        px-[10px] xl:px-[20px] lg:px-[20px] md:px-[10px] sm:px-[40px]
        rounded-[10px] bg-white flex items-center shadow-lg overflow-hidden" 
        style={{boxShadow:'2px 2px 6px 0px #00000040, -1px 0px 6px 0px #00000040'}} 
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 600, damping: 100 }}
      >
        <div className="w-1/2 p-4 sm:p-8 flex flex-col justify-center relative">
          {/* quotes image */}
          <div className="absolute 
          md:top-[10px] top-[15px] 
          md:left-[15px] left-[10px]">
            <img
              className="w-8 h-8" 
              // sm:w-8 sm:h-8"
              src={quotes}
              alt="Quotes"
            />
          </div>
          {/* quotes text */}
          <div className="
            h-[190px] xl:h-[180px] lg:h-[140px] md:h-[120px] sm:h-[170px] 
            w-[180px] xl:w-[290px] lg:w-[240px] md:w-[190px] sm:w-[270px] 
            text-[10px] xl:text-[14px] lg:text-[11px] md:text-[9px] sm:text-[13px] 
            flex items-center justify-center text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima asperiores delectus fugiat id quasi quaerat atque. Sit inventore ullam vitae perspiciatis voluptatibus voluptas obcaecati harum vero quo quis est quam quae mollitia dolores, consequatur omnis laudantium asperiores libero voluptatem. 
            </p>
          </div>
          {/* faculty details */}
          <div className="text-gray-800 
          text-[11px] xl:text-m lg:text-[13px] md:text-[9.5px] sm:text-[15px]
          uppercase font-bold">
            <p>Shridevi</p>
            <p className="text-gray-500">Faculty coordinator</p>
          </div>
        </div>
        {/* faculty image */}
        <div className="w-1/2 flex justify-center items-center p-4 sm:p-8">
          <img
            className="
              h-[130px] xl:h-[150px] lg:h-[100px] md:h-[80px] sm:h-[130px]
              w-[130px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[130px]
              rounded-full border border-black-400"
            src={faculty}
            alt="Group"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Faculty;