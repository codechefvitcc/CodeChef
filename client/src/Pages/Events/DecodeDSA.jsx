// default imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//image components imports
import {
  CookOff2024MainImage,
  CookOff2024GalleryImages,
} from "../../Constants/images";
import EventsBackgroundImage from "/Background/EventsBackground.svg";

import { ImageLoaderComponent } from "../../Utility";

import { useBreakpoint } from "../../Utility";

const DecodeDSA = () => {
  // Carousel Component settings for the images
  const settings = {
    lazyLoad: "ondemand",
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
        backgroundImage: `url(${EventsBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overflow-hidden container mx-auto mt-16 sm:mt-0 p-4 lg:px-32 lg:pt-4">
        {/* Main Image */}
        <div className="flex items-center justify-center">
          <ImageLoaderComponent
            url={CookOff2024MainImage.url}
            hashCode={CookOff2024MainImage.hashCode}
            alt="mainimage"
            className=" sm:w-[60vw] h-[40vh] lg:h-[80vh] mb-4 rounded-xl"
            blurWidth={useBreakpoint("lg").isLg ? "60%" : "100%"} //100% since we used w-full
            blurHeight={useBreakpoint("lg").isLg ? "80vh" : "40vh"}
          />
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-7xl font-bold mb-2 text-gray-700">
          Decode DSA
        </h1>
        {/* Date */}
        <p className="text-gray-600 mb-4">Feb 19, 2024</p>
        {/* Sub heading */}
        <h2 className="text-base md:text-3xl font-semibold mb-2 mt-8 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
          dignissimos sunt repellat maiores in molestiae perspiciatis rerum
          incidunt nobis enim natus, eum assumenda reiciendis facilis, vero
          eveniet porro exercitationem.
        </h2>
        {/* Description */}
        <p className="text-black text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi
          molestiae tempora neque laudantium quasi alias aperiam, odit quas vel
          itaque inventore fugiat et culpa nobis impedit rerum at esse.
          Perspiciatis doloremque sed corrupti esse odio amet dolores impedit
          ullam sunt ipsum, similique maiores eum tempora consequatur quo nobis,
          accusamus cum quae iste dolor eligendi. Quod voluptatem commodi ea
          impedit architecto aliquam repellendus error a dolorum, officiis ad
          nobis quas? Dolorum aut illum maiores obcaecati quas cupiditate
          facilis. Dolorem illo distinctio laborum ducimus fugiat inventore
          ratione, quo voluptas tempora doloremque, neque placeat omnis? At
          architecto cupiditate, officiis nam rem quidem?
        </p>
        {/* Carousel Starts*/}
        <Slider {...settings}>
          {CookOff2024GalleryImages.map((ele, index) => (
            <div key={index}>
              <ImageLoaderComponent
                url={ele.url}
                hashCode={ele.hashCode}
                alt={`carousel${index}`}
                className="w-full h-[250px] px-1 rounded-xl object-cover"
                blurWidth={"100%"}
                blurHeight={250}
              />
            </div>
          ))}
        </Slider>
        {/* Carousel Ends */}
        <h2 className="text-base md:text-3xl font-semibold mb-2 mt-8 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit facilis optio reiciendis. Mollitia alias inventore
          eligendi, suscipit quod, laborum iure architecto reiciendis nulla
          accusantium ipsam fugit eveniet, dolore corporis quas?
        </h2>
        <p className="text-black text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque delectus magni id officia adipisci, vero voluptatibus, maxime
          dolor mollitia quo est iure quos qui alias ex recusandae eligendi sit
          amet vitae et quia? Illum laudantium delectus distinctio maxime
          consequuntur dicta minus pariatur nesciunt odit quis, similique quia,
          magni aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias nisi quis architecto, ullam ipsum ad modi obcaecati
          dolores voluptatibus adipisci ipsa enim deleniti incidunt odio vel
          vitae quos quo velit. Nobis quod nihil exercitationem quas asperiores
          velit similique, expedita unde harum animi, distinctio sapiente
          repellendus quasi repudiandae quia totam voluptatem?
        </p>
      </div>
    </div>
  );
};

export default DecodeDSA;
