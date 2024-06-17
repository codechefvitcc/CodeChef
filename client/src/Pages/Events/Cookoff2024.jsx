// default imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//image components imports
import {
  BlogsBackgroundImage,
  HomeGalleryImages,
} from "../../Constants/images";
import { ImageLoaderComponent } from "../../Utility";

import { useBreakpoint } from "../../Utility";

const CookOff2024 = () => {
  // Carousel Component settings for the images
  const settings = {
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640, // Tailwind's sm breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Tailwind's md breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BlogsBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overflow-hidden container mx-auto mt-16 sm:mt-0 p-4 lg:p-32 lg:pt-4">
        {/* Main Image */}
        <div className="flex items-center justify-center">
          <ImageLoaderComponent
            url={HomeGalleryImages[2].url}
            hashCode={HomeGalleryImages[2].hashCode}
            alt="mainimage"
            className="w-full h-[40vh] lg:h-[80vh] mb-4 rounded-xl"
            blurWidth={'100%'} //100% since we used w-full
            blurHeight={useBreakpoint('lg').isLg ? '80vh' : '40vh'}
          />
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-7xl font-bold mb-2 text-gray-700">
          T Shirt Distribution
        </h1>
        {/* Date */}
        <p className="text-gray-600 mb-4">Jan 10, 2024</p>
        {/* Sub heading */}
        <h2 className="text-base md:text-3xl font-semibold mb-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sodales magna sapien, sed aliquet augue condimentum eu. Phasellus
          velit dolor, viverra et ante luctus, pharetra accumsan orci.
        </h2>
        {/* Description */}
        <p className="text-black text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem at.
          Risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        {/* Carousel Starts*/}
        <Slider {...settings}>
          {HomeGalleryImages.map((ele, index) => (
            <div key={index}>
              <ImageLoaderComponent
                url={ele.url}
                hashCode={ele.hashCode}
                alt={`carousel${index}`}
                className="w-full h-[250px] px-1 rounded-xl object-cover"
                blurWidth={'100%'}
                blurHeight={250}
              />
            </div>
          ))}
        </Slider>
        {/* Carousel Ends */}
        <h2 className="text-base md:text-3xl font-semibold mb-2 mt-8 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sodales magna sapien, sed aliquet augue condimentum eu. Phasellus
          velit dolor, viverra et ante luctus, pharetra accumsan orci.
        </h2>
        <p className="text-black text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem at.
          Risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
      </div>
    </div>
  );
};

export default CookOff2024;
