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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere ea,
          rerum quo sunt cum pariatur consectetur voluptatibus ratione
          voluptatem voluptates, perferendis quaerat vero? Obcaecati, in quidem?
          Provident nobis libero voluptate itaque inventore fugiat iste
          consectetur quod enim veniam, aspernatur nulla dolores maxime dicta!
          Porro voluptates molestias impedit incidunt natus!
        </p>
        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Club Description
        </h1>
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt,
          nemo repellat tempora asperiores pariatur quasi consequuntur ipsam
          fugiat facilis quia illum, enim impedit ea sit ipsa? Totam illum non
          neque voluptatum excepturi officiis omnis itaque, incidunt distinctio
          cupiditate iure. Fugiat cum aspernatur quis? Dolores dicta totam
          officia quo excepturi.
        </p>

        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Future Goals
        </h1>
        <p className="pt-3 pb-10 text-gray-600 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt,
          nemo repellat tempora asperiores pariatur quasi consequuntur ipsam
          fugiat facilis quia illum, enim impedit ea sit ipsa? Totam illum non
          neque voluptatum excepturi officiis omnis itaque, incidunt distinctio
          cupiditate iure. Fugiat cum aspernatur quis? Dolores dicta totam
          officia quo excepturi.
        </p>
        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
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
        </ul>
        <h1 className="text-3xl font-bold text-gray-800 pb-3 border-b border-gray-300 font-sans">
          Why Join Us?
        </h1>
        <ul className="pt-3 pb-10 pl-6 list-disc space-y-4">
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
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
