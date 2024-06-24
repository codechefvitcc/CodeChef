// default imports
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//image components imports
import {
  CookOff2024MainImage,
  CookOff2024GalleryImages,
} from "../../Constants/images";
import EventsBackgroundImage from "/Background/EventsBackground.svg";

import { ImageLoaderComponent } from "../../Utility";

import { useBreakpoint } from "../../Utility";

const CookOff2024 = () => {
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
          Cook Off - 2024
        </h1>
        {/* Date */}
        <p className="text-gray-600 mb-4">Feb 19, 2024</p>
        {/* Sub heading */}
        <h2 className="text-base md:text-3xl font-semibold mb-2 mt-8 text-gray-700">
          CookOff 2024 was a dynamic, two-day hackathon that brought together
          students from all years to engage in web development, app development,
          machine learning, and more.
        </h2>
        {/* Description */}
        <p className="text-black text-sm sm:text-base mb-8">
          CookOff 2024, a two-day hackathon, offered students from all years the
          opportunity to form teams of three to five members and immerse
          themselves in diverse domains such as web development, app
          development, and machine learning. This event was not only a
          competition but also a platform for learning, collaboration, and
          innovation.
          <br /> The event kicked off with an electrifying performance by our
          music club, which set an enthusiastic tone for the weekend. Their
          collaboration with us brought a delightful and energizing start to
          CookOff 2024, making it a memorable opening act that was both
          enjoyable to watch and a perfect energizer for the participants.
          <br />
          Following this vibrant performance, we had the privilege of hosting
          several esteemed judges who delivered guest lectures. These experts,
          who later assessed the projects, shared their extensive knowledge and
          experience in their respective fields. They outlined the criteria that
          would be used to evaluate the projects, giving participants a clear
          understanding of what was required to excel and win the competition.
          <br />
          As the event was structured as a 24-hour hackathon, excitement peaked
          with the release of the problem statements. Teams immediately dived
          into brainstorming and development. Throughout the hackathon, our
          judges were actively engaged, making rounds to offer guidance, resolve
          issues, and answer queries. Their dedication was commendable as they
          tirelessly supported the students, often forgoing rest due to their
          enthusiasm in seeing the participants learn and grow.
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
          With inspiring performances, insightful guest lectures, and relentless
          teamwork, the event turned out to be a phenomenal success.
        </h2>
        <p className="text-black text-sm sm:text-base mb-8">
          Organizing such a significant event was a collaborative effort between
          our club and the IEEE Women in Engineering club. Both the leadership
          and the members of these clubs demonstrated remarkable responsibility
          and commitment. Their efforts ensured smooth operations, from
          logistics to participant support. The management team also took care
          to provide snacks and meals at regular intervals, ensuring that all
          participants were well-fed and energized throughout the hackathon.
          <br /> The culmination of CookOff 2024 was the prize distribution
          ceremony. The announcement of winners was met with cheers and
          applause, and it was heartening to see the happiness and satisfaction
          on the faces of all participants. Many of them took selfies with the
          judges, capturing moments of achievement and joy.
          <br /> In conclusion, CookOff 2024 was a resounding success. It taught
          us invaluable lessons in event management, teamwork, and participant
          engagement. The event not only showcased the talents and creativity of
          our students but also reinforced the importance of collaboration and
          mentorship. We are proud of what we achieved and look forward to
          organizing more such impactful events in the future.
        </p>
      </div>
    </div>
  );
};

export default CookOff2024;
