import { useEffect } from "react";
import ReactGA from "react-ga4";
import { DeptDisplay, Hero, IntroVideo, Leaders } from "../Components";

const Home = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
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
