import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// importing icons
import { FaSpinner } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

// Importing default profile pic and blure hash util function
import { defaultpfp } from "../../assets";
import { ErrorBox, ImageLoaderComponent } from "../../Utility";

// API call
import { getAllTestimonials } from "../../api/apiCall";

const Hero = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const data = await getAllTestimonials();
      if (data.error) {
        setError(true);
      } else {
        setTestimonials(data);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="pt-20 pb-15 sm:pb-20 !px-5 sm:!px-20 bg-gradient-to-b from-[#c6dcfea3] to-[#d8e6ff99]">
      <div className="flex flex-wrap main-row">
        {/* Website title area */}
        <motion.div
          className="w-full sm:w-1/2 text-col p-2 lg:py-6 md:px-3"
          initial={{ opacity: 0.5, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="main-heading text-center md:text-left text-4xl leading-[3rem] sm:text-4xl font-semibold leading-[3rem] mb-6 md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] md:mb-5">
            Start your club
            <br /> journey with us!
          </h1>
          <p className="main-para text-center md:text-left text-sm font-normal text-[#7e7a7a] mb-6 md:mb-5 md:text-l lg:text-xl">
            Join us to craft your college journey: hone skills, forge
            friendships and create cherished memories.
          </p>

          {/* Join club input */}
          <div className="main-input flex justify-center md:justify-start items-center mt-2">
            <input
              className="input-box w-full py-2 px-2 max-w-[200px] lg:max-w-[280px] gap-4 border border-[#d2d9e7] rounded-l-md border-r-0 text-gray-500 font-normal text-xl leading-[23px] placeholder-[#b3bdd2] lg:py-4 focus:outline-none focus:ring-0 border-0 outline-none box-border"
              type="email"
              placeholder="Enter email"
            />
            <a
              href="/joinus"
              className="btn primary-button bg-[#4079da] border border-[#d2d9e7] text-white font-normal w-[10rem] text-xs text-center sm:w-[14rem] text-l lg:text-xl leading-[23px] p-2 lg:py-4 max-w-[200px] rounded-r-md hover:bg-[#2e5aa5]"
            >
              Join Us Today
            </a>
          </div>

          {/* Connect section */}
          <div className="connect-with-us md:justify-start justify-center my-3 flex items-center gap-4">
            <div className="connect-msg text-sm font-[400]">
              connect with us on
            </div>
            <div className="connection-links flex space-x-2">
              <div className="single-box flex items-center justify-center gap-4">
                <a
                  href="/"
                  className="connection-link no-underline"
                  target="_blank"
                >
                  <button className="flex items-center space-x-2 bg-white border border-[#131313] rounded-md text-black font-normal text-sm p-2">
                    <img
                      width="20px"
                      height="20px"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                    <span className="hidden lg:block">LinkedIn</span>
                  </button>
                </a>
                <a
                  href="/"
                  className="connection-link no-underline"
                  target="_blank"
                >
                  <button className="flex items-center space-x-2 bg-white border border-[#131313] rounded-md text-black font-normal text-sm p-2">
                    <img
                      width="20px"
                      height="20px"
                      src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                      alt="instagram-new"
                    />
                    <span className="hidden lg:block">Instagram</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial carousel */}
        <div
          className={`w-full sm:w-1/2 h-fit ${
            error ? "flex justify-center items-center" : ""
          } `}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="spinner text-center text-xl sm:text-3xl" />
            </div>
          ) : error ? (
            <div className="flex">
              <ErrorBox />
            </div>
          ) : (
            <CarouselStyle>
              <div className="logos">
                {Array.from({ length: 2 }).map((_, i) => {
                  return (
                    <div className="logos-slide" key={i}>
                      {testimonials?.map((element, index) => (
                        <div className="custom-box" key={index}>
                          <div className="card-body flex justify-between flex-col h-full">
                            <div className="card-text">
                              <RiDoubleQuotesL className="doubleQuotes" />
                              <p className="text-m text-gray-700">
                                {element.testimonial}
                              </p>
                            </div>
                            <div>
                              <ImageLoaderComponent
                                url={element.imageUrl || defaultpfp}
                                hashCode={element.imageHashCode}
                                alt="mainimage"
                                className="rounded-full mb-2 h-[50px] w-[50px] object-cover"
                                blurWidth={"50px"}
                                blurHeight={"50px"}
                              />
                              <p className="font-semibold text-m text-gray-700">
                                {element.name}
                              </p>
                              <p className="font-light">{element.position}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </CarouselStyle>
          )}
        </div>
      </div>
    </div>
  );
};

// Style for the testimonial carousel
const CarouselStyle = styled.section`
  min-height: 0;
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .custom-box {
    font-size: 14px !important;
    color: #546e7a !important;
    line-height: 160% !important;
    width: 250px !important;
    height: 400px !important;
    margin: 10px 20px; /* Adjusted margin */
    padding: 20px;
    display: flex;
    flex-direction: column; /* Added flex-direction */
    justify-content: space-between; /* Added space-between */
    white-space: normal;
    background: #fff;
    border-radius: 8px !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  }

  .doubleQuotes {
    font-size: 20px;
  }

  .logos {
    overflow: hidden !important;
    padding: 20px 0 !important;
    background-color: inherit;
    white-space: nowrap;
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-flex !important; /* Updated display property */
    animation: 15s slide infinite linear;
  }

  @media screen and (max-width: 820px) {
    .logos {
      overflow: hidden !important;
    }

    .custom-box {
      font-size: 12px !important;
      width: 250px !important;
      height: 325px !important;
      margin: 0 10px; /* Adjusted margin */
    }

    .rounded-circle {
      height: 42px !important;
      width: 42px !important;
    }

    .card-subtitle {
      font-size: 12px !important;
    }

    .designation {
      font-size: 12px !important;
    }
  }
`;

export default Hero;
