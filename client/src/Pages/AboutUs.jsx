import React from "react";
import BlogsBackgroundImage from "/Background/BlogsBackground.svg";

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: `url(${BlogsBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
      className="pt-8 pb-8"
    >
      <div className="mx-auto pt-8 pb-8 pl-8 pr-8 bg-white shadow-lg rounded-xl max-w-[90%] sm:max-w-[60%]">
        <h1 className="text-4xl font-bold text-gray-800 pb-6 pt-6 font-sans text-center">
          CODECHEF-VITCC
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          About Us
        </h1>
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          CodeChef VITC is a student chapter focused on helping and developing
          eager students at our college with passion for coding and problem
          solving. Here in CodeChef, our club stands united by shared commitment
          to learning and excellence in programming make us more than just a
          club at VITC. Our club is now focused on expanding into web
          development and AI and ML, Competitive programming remains our primary
          focus. Our regular coding contests and, hackathons, and workshops from
          the basic to the advanced levels are designed to sharpen coders skills
          and prepare them for both national and international competitions.
        </p>
        {/* <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Club Description
        </h1>
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt,
          nemo repellat tempora asperiores pariatur quasi consequuntur ipsam
          fugiat facilis quia illum, enim impedit ea sit ipsa? Totam illum non
          neque voluptatum excepturi officiis omnis itaque, incidunt distinctio
          cupiditate iure. Fugiat cum aspernatur quis? Dolores dicta totam
          officia quo excepturi.
        </p> */}

        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Future Goals
        </h1>
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          CodeChef is dedicated to expanding its reach, ensuring that more
          people discover the vibrant community we've built. Soon, our focus
          will be on conducting a series of engaging events that cater to both
          seasoned members and newcomers, fostering an environment where
          everyone feels welcome. We aim to build a community that is not only
          friendly and inclusive but also competitive, encouraging members to
          challenge themselves and each other in a supportive atmosphere. Our
          future goals are centred on creating meaningful connections, driving
          participation, and establishing a club culture that thrives on both
          camaraderie and healthy competition.
        </p>
        {/* <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Ongoing Works
        </h1>
        <ul className=" pt-3 pb-10 pl-6 list-disc space-y-4">
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
        </ul>*/}
        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Why Join Us?
        </h1>
        {/* <ul className="pt-3 pb-10 pl-6 list-disc space-y-4">
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
        </ul> */}
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          Joining CodeChef offers a unique opportunity to be part of a dynamic
          and supportive community where members share a passion for learning,
          growth, and connection. Whether you're looking to enhance your skills,
          make new friends, or challenge yourself in a competitive yet friendly
          environment, our club provides the perfect platform. We host a variety
          of engaging events that cater to diverse interests, ensuring that
          there’s something for everyone, where you’ll gain access to networking
          opportunities and a space where you can thrive both personally and
          professionally. Become a part of our journey and help shape the future
          of our community!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
