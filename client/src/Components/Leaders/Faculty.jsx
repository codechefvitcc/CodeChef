import { motion } from "framer-motion";

//import faculty and quotes images from assets
import { faculty, quotes } from "../../assets/leaders";
import { FacultyImage } from "../../Constants/images";
import ImageLoaderComponent from "../../Utility/ImageLoaderComponent";

//Project hooks
import { useBreakpoint } from '../../Utility/useBreakpoint'; // To find the screen size
import { useEffect, useState } from "react";

function Faculty() {

  const [screenSize, setScreenSize] = useState('lg');

  const isSm = useBreakpoint('sm').isSm;
  const isMd = useBreakpoint('md').isMd;
  const isLg = useBreakpoint('lg').isLg;

  useEffect(() => {
    if (isSm) {
      setScreenSize('sm');
    } else if (isMd) {
      setScreenSize('md');
    } else if (isLg) {
      setScreenSize('lg');
    } else {
      setScreenSize('xl');
    }
  }, [isSm, isMd, isLg]);

  return (
    <motion.div
      className="w-full md:w-1/2 min-w-[384px] 
      xl:min-h-[250px] lg:min-h-[250px] md:min-h-[250px] sm:min-h-[400px] min-h-[350px] 
      h-[35vw] px-5 flex flex-col items-center"
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="box-border tracking-normal text-gray-700 outline-none block 
      text-2xl xl:text-3xl lg:text-2xl md:text-xl 
      font-bold mx-auto mb-5 w-full text-center">
        Faculty Coordinator
      </h2>

      <motion.div
        className="
        w-[330px] xl:w-[590px] lg:w-[500px] md:w-[370px] sm:w-[570px] 
        h-[250px] xl:h-[300px] lg:h-[230px] md:h-[190px] sm:h-[280px]
        gap-[30px] xl:gap-[30px] lg:gap-[20px] md:gap-[20px] sm:gap-[30px]
        px-[10px] xl:px-[20px] lg:px-[20px] md:px-[10px] sm:px-[40px]
        rounded-[10px] bg-white flex items-center shadow-lg overflow-hidden"
        style={{
          boxShadow: "2px 2px 6px 0px #00000040, -1px 0px 6px 0px #00000040",
        }}
      >
        <div className="w-1/2 p-4 sm:p-8 flex flex-col justify-center relative">
          {/* quotes image */}
          <div
            className="absolute 
            md:top-[10px] top-[15px] 
            md:left-[15px] left-[10px]"
          >
            <img
              className="w-7 h-7"
              src={quotes}
              alt="Quotes"
            />
          </div>
          {/* quotes text */}
          <div
            className="
            h-[190px] xl:h-[180px] lg:h-[140px] md:h-[120px] sm:h-[170px] 
            w-[180px] xl:w-[290px] lg:w-[240px] md:w-[190px] sm:w-[270px] 
            text-[10px] xl:text-[14px] lg:text-[11px] md:text-[9px] sm:text-[13px] 
            flex items-center justify-center text-center"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              minima asperiores delectus fugiat id quasi quaerat atque. Sit
              inventore ullam vitae perspiciatis voluptatibus voluptas obcaecati
              harum vero quo quis est quam quae mollitia dolores, consequatur
              omnis laudantium asperiores libero voluptatem.
            </p>
          </div>
          {/* faculty details */}
          <div
            className="text-gray-800 
          uppercase font-bold"
          >
            <p className="box-border m-0 bg-transparent tracking-normal text-gray-700 outline-none block 
            text-[11px] xl:text-[18px] lg:text-[13px] md:text-[10px] sm:text-[15px] 
            font-bold">
              Shridevi
            </p>
            <p className="box-border m-0 bg-transparent tracking-normal text-gray-700 outline-none block 
            text-[9px] xl:text-[14px] lg:text-[11px] md:text-[8px] sm:text-[13px] 
            font-semibold">
              Faculty coordinator
            </p>
          </div>
        </div>
        {/* faculty image */}
        <div className="w-1/2 flex justify-center items-center p-4 sm:p-8">
          {/* <img
            className="
              h-[100px] xl:h-[150px] lg:h-[100px] md:h-[80px] sm:h-[130px]
              w-[100px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[130px]
              rounded-full border border-black-400"
            src={faculty}
            alt="Group"
          /> */}
          <ImageLoaderComponent
            url={FacultyImage.url}
            hashCode={FacultyImage.hashCode}
            alt="Faculty Image"
            className="h-[100px] xl:h-[150px] lg:h-[100px] md:h-[80px] sm:h-[130px]
              w-[100px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[130px]
              rounded-full border border-black-400"
            blurWidth={screenSize === "sm" ? '130px' : screenSize === "md" ? '80px' : screenSize === "lg" ? '100px' : '100px'}
            blurHeight={screenSize === "sm" ? '130px' : screenSize === "md" ? '80px' : screenSize === "lg" ? '100px' : '100px'}
            rounded={true}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Faculty;
