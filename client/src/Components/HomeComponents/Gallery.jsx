import { useState, useEffect } from "react";

import { HomeGalleryImages } from "../../Constants/images";
import { ImageLoaderComponent } from "../../Utility";

const Gallery = () => {
  //using useState to keep track of the current image to display
  const [currentIndex, setCurrentIndex] = useState(0);

  //using useEffect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % HomeGalleryImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //function change image displayed when clicked on the thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="text-center lg:mt-10 mt-5 px-4"
      style={{
        background:
          "linear-gradient(to bottom, #fff 20%, rgba(220, 234, 255, 0.7) 50%)",
      }}
    >
      <h2 className="box-border tracking-normal text-gray-700 outline-none block text-[36px] font-bold mx-auto mb-5 w-full">
        Gallery
      </h2>

      {/* Image Banner */}
      <div
        className="relative lg:w-4/6 mx-auto overflow-hidden xl:w-4/6 h-80 sm:h-52 md:h-64 lg:h-[31.5rem] xl:h-[34rem] rounded-xl shadow-lg border-[2px] border-black-400"
        style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.5)" }}
      >
        {HomeGalleryImages.map((ele, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <ImageLoaderComponent
              url={ele.url}
              hashCode={ele.hashCode}
              alt={`Image ${index + 1}`}
              className="w-full h-full rounded-xl"
            />
            {/*<img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-full rounded-xl"
            />*/}
          </div>
        ))}
      </div>

      {/* image thumbnails */}
      <div className="flex justify-center mt-4 space-x-2 py-[1%] overflow-auto">
        {HomeGalleryImages.map((ele, index) => (
          <div
            key={index}
            className={`w-20 h-30 md:w-20 md:h-30 object-cover cursor-pointer transition-transform duration-300 rounded-md ${
              index === currentIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
            style={{ boxShadow: "0 2px 5px rgba(255, 255, 255, 0.5)" }}
          >
            <ImageLoaderComponent
              url={ele.url}
              hashCode={ele.hashCode}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
