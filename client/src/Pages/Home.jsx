import { useEffect } from "react";
import ReactGA from "react-ga";

import { DeptDisplay, Hero, IntroVideo, Leaders } from "../Components";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Hero />
      <DeptDisplay />
      {/* <Gallery /> */}
      <IntroVideo />
      <Leaders />
    </>
  );
};

export default Home;
