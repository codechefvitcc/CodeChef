import { useState, useEffect } from "react";

//importing images from assets as an array
import images from "../assets/gallery";

const Gallery = () => {

  //using useState to keep track of the current image to display
  const [currentIndex, setCurrentIndex] = useState(0);

  //using useEffect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //function change image displayed when clicked on the thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-center bg-codechef-blue lg:my-10 my-5 px-4">
      <h2 className="text-white font-bold text-4xl my-4 py-[1%]">Gallery</h2>
      {/* Image Banner  */}
      <div className="relative w-full lg:w-4/6 mx-auto overflow-hidden xl:w-1/2 h-80 sm:h-52 md:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-full rounded-xl"
            />
          </div>
        ))}
      </div>
      
      {/* image thumbnails */}
      <div className="flex justify-center mt-4 space-x-2 py-[1%] overflow-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-30 md:w-20 md:h-20 object-cover cursor-pointer transition-transform duration-300 rounded-md ${
              index === currentIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
