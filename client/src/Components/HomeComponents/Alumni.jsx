import React from "react";
import ImageLoaderComponent from "../../Utility/ImageLoaderComponent";
import { CompanyLogoImages } from "../../Constants/images";
import Slider from "react-infinite-logo-slider";

function Alumni() {
  return (
    <>
      <div className="flex flex-col justify-center py-[2.5rem]  bg-gradient-to-b from-[#FFFFFF] to-[#DAE8FE]">
        <div className="box-border tracking-normal text-gray-700 outline-none block text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold mx-auto mb-5 w-full text-center">
          Where do our Alumni Work?
        </div>
        <div className="flex flex-row overflow-hidden mx-[1rem] md:mx-[3rem]">
          <Slider
            width="250px"
            duration={10}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {/* Mapping CompanyLogoImages to Slider.Slide */}
            {CompanyLogoImages?.map((element, index) => (
              <Slider.Slide key={index}>
                {/* testing */}
                <ImageLoaderComponent
                  url={element.url}
                  hashCode={element.hashCode || "LLO3trS+EV7PtRNNNKj=*Ji^r:vf"}
                  alt={`Company logo ${index + 1}`}
                  className="w-[80%] h-auto max-w-[245px] xl:w-[90%] xl:max-w-[280px] xl:h-[150px] p-2 sm:p-4 lg:p-6"
                  blurWidth={"245px"}
                  blurHeight={"150px"}
                  rounded={false}
                />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Alumni;
