import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [eventsClicked, setEventsClicked] = useState(false);
  const [blogsClicked, setBlogsClicked] = useState(false);
  const [teamClicked, setTeamClicked] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  
  let navRef = useRef()

  // function to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //function to handle out of navbar clicks
  useEffect(() => {
    const handleClick = (e) => {
      if(!navRef.current.contains(e.target)){
        setEventsClicked(false);
        setBlogsClicked(false);
        setTeamClicked(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={navRef}>
      {/* Navbar that appears for laptop screens */}
      <nav className="w-full px-4 sm:px-9 bg-white flex shadow border-gray-400 text-gray-500 justify-between items-center h-[10vh]">
        <Link to="/" className="ml-4">
          <img
            className="collapse absolute sm:w-[150px] sm:visible"
            src="https://cdn.codechef.com/images/cc-logo.svg"
            alt="CodeChef Logo"
          />
          <img
            className="sm:collapse"
            src="https://cdn.codechef.com/images/cc-logo-mobile-1.svg"
            alt="CodeChef Logo"
          />
        </Link>
        <div className="flex">
          <div className="mr-4 items-center hidden md:block">
            {/* Drop down menus start here */}
            <div className="flex">
              <div className="mx-2 block">
                <div
                  onClick={() => {
                    setEventsClicked(!eventsClicked);
                  }}
                  className={
                    eventsClicked
                      ? "bg-[#2a67b11e] duration-300 flex justify-center items-center px-4 py-2 rounded"
                      : "duration-300 hover:bg-[#2a67b11e] flex items-center px-4 py-2 rounded "
                  }
                >
                  <h2 className="mr-2">Events</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      eventsClicked ? "rotate-180 duration-300" : "duration-300"
                    }
                    height="20"
                    width="12.5"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </div>
                <div
                  className={
                    eventsClicked
                      ? "flex absolute justify-start text-[0.85rem]  bg-white shadow-lg rounded mt-2 flex-col space-y-2"
                      : "hidden"
                  }
                >
                  <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                    <Link to="/events/Cookoff2024">Cook-Off 2024</Link>
                  </button>
                  <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                    <Link to="/decode-dsa">Decode DSA</Link>
                  </button>
                </div>
              </div>
              <div className="mx-2 block">
                <button
                  className="block px-4 py-2 rounded hover:bg-[#2a67b11e]"
                  onClick={() => {
                    setBlogsClicked(!blogsClicked);
                  }}
                >
                  <Link to="/blogs">Blogs</Link>
                </button>
              </div>
              <div className="mx-2 block">
                <div
                  onClick={() => {
                    setTeamClicked(!teamClicked);
                  }}
                  className={
                    teamClicked
                      ? "bg-[#2a67b11e] duration-300 flex justify-center items-center px-4 py-2 rounded"
                      : "duration-300 hover:bg-[#2a67b11e] flex items-center px-4 py-2 rounded "
                  }
                >
                  <h2 className="mr-2">Our Team</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      teamClicked ? "rotate-180 duration-300" : "duration-300"
                    }
                    height="20"
                    width="12.5"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </div>
                <div
                  className={
                    teamClicked
                      ? "flex absolute justify-start text-[0.85rem]  bg-white shadow-lg rounded mt-2 flex-col space-y-2"
                      : "hidden"
                  }
                >
                  <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                    <Link to="/CookOff">2023-24 Team</Link>
                  </button>
                </div>
              </div>
            </div>
            {/* Drop down menus end here */}
          </div>
          {/* Join Us button */}
          <div className="mr-4 text-[#2a67b1] border border-[#2a67b1]  p-2 font-semibold rounded">
            <Link to="/joinus">Join Us!</Link>
          </div>
        </div>
      </nav>
      {/* Navbar that appears for mobile screens */}
      <div
        className={
          isScrolled
            ? "top-0 items-center fixed bg-white  w-full z-50 md:hidden block"
            : " items-center fixed bg-white  w-full z-50 md:hidden block"
        }
      >
        {/* Drop down menus start here */}
        <div className="flex items-center shadow justify-center p-2">
          <div className="mx-2 block">
            <div
              onClick={() => {
                setEventsClicked(!eventsClicked);
              }}
              className={
                eventsClicked
                  ? "bg-[#2a67b11e] duration-300 flex justify-center items-center px-4 py-2 rounded"
                  : "duration-300 hover:bg-[#2a67b11e] flex items-center px-4 py-2 rounded "
              }
            >
              <h2 className="mr-2">Events</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  eventsClicked ? "rotate-180 duration-300" : "duration-300"
                }
                height="20"
                width="12.5"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </div>
            <div
              className={
                eventsClicked
                  ? "flex absolute justify-start text-[0.85rem]  bg-white shadow-lg rounded mt-2 flex-col space-y-2"
                  : "hidden"
              }
            >
              <Link to="/events/Cookoff2024">
                <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                  Cook-Off 2024
                </button>
              </Link>
              <Link to="/decode-dsa">
                <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                  Decode DSA
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-2 block">
            <h2
              className="block px-4 py-2 rounded hover:bg-[#2a67b11e]"
              onClick={() => {
                setBlogsClicked(!blogsClicked);
              }}
            >
              <Link to="/blogs">Blogs</Link>
            </h2>
          </div>
          <div className="mx-2 block">
            <div
              onClick={() => {
                setTeamClicked(!teamClicked);
              }}
              className={
                teamClicked
                  ? "bg-[#2a67b11e] duration-300 flex justify-center items-center px-4 py-2 rounded"
                  : "duration-300 hover:bg-[#2a67b11e] flex items-center px-4 py-2 rounded "
              }
            >
              <h2 className="mr-2">Our Team</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  teamClicked ? "rotate-180 duration-300" : "duration-300"
                }
                height="20"
                width="12.5"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </div>
            <div
              className={
                teamClicked
                  ? "flex absolute justify-start text-[0.85rem]  bg-white shadow-lg rounded mt-2 flex-col space-y-2"
                  : "hidden"
              }
            >
              <button className=" hover:bg-[#2a67b11e] p-2 px-4 rounded">
                <Link to="/CookOff">2023-24 Team</Link>
              </button>
            </div>
          </div>
        </div>
        {/* Drop down menus end here */}
      </div>
    </div>
  );
};

export default Navbar;
