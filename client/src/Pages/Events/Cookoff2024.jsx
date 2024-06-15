import React from 'react';
import '../../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { vishalpfp } from '../../assets';
import images from '../../assets/gallery';

const CookOff2024 = () => {
  const settings = {
    dots: true,
    infinite: true,
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
    <div className="App">
      <div className="overflow-hidden container mx-auto p-4 lg:p-28 pt-4">
        <img src={vishalpfp} alt="Header" className="w-full h-[500px] mb-4" />
        <h1 className="text-7xl font-bold mb-2">T Shirt Distribution</h1>
        <p className="text-gray-600 mb-4">Jan 10, 2024</p>
        <h2 className="text-2xl font-semibold mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales magna sapien, sed aliquet augue condimentum eu. Phasellus velit dolor, viverra et ante luctus, pharetra accumsan orci.
        </h2>
        <p className="text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem at. Risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`carousel${index}`} />
            </div>
          ))}
        </Slider>
        <h2 className="text-2xl font-semibold mb-2 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales magna sapien, sed aliquet augue condimentum eu. Phasellus velit dolor, viverra et ante luctus, pharetra accumsan orci.
        </h2>
        <p className="text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem at. Risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
      </div>
    </div>
  );
};

export default CookOff2024;
