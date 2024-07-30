import React from 'react';

function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto mb-10 p-8 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-4xl font-bold text-gray-800 pb-6 border-b border-gray-300">
        Problem Statement
      </h1>
      <p className="pt-6 pb-10 text-gray-600 leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere ea,
        rerum quo sunt cum pariatur consectetur voluptatibus ratione
        voluptatem voluptates, perferendis quaerat vero? Obcaecati, in quidem?
        Provident nobis libero voluptate itaque inventore fugiat iste
        consectetur quod enim veniam, aspernatur nulla dolores maxime dicta!
        Porro voluptates molestias impedit incidunt natus!
      </p>
      <h1 className="text-4xl font-bold text-gray-800 pb-6 border-b border-gray-300">
        How We Are Solving the Problem?
      </h1>
      <p className="pt-6 pb-10 text-gray-600 leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt,
        nemo repellat tempora asperiores pariatur quasi consequuntur ipsam
        fugiat facilis quia illum, enim impedit ea sit ipsa? Totam illum non
        neque voluptatum excepturi officiis omnis itaque, incidunt distinctio
        cupiditate iure. Fugiat cum aspernatur quis? Dolores dicta totam
        officia quo excepturi.
      </p>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 pb-6 border-b border-gray-300">
          Tech Stack Used
        </h1>
        <div className="flex justify-around mt-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 pb-4">
              Frontend
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/color/48/tailwind_css.png"
                  alt="Tailwind CSS"
                />
                <span className="text-gray-700">Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                  alt="React JS"
                />
                <span className="text-gray-700">React Js</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/color/48/redux.png"
                  alt="Redux"
                />
                <span className="text-gray-700">Redux</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 pb-4">
              Backend
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/color/48/nodejs.png"
                  alt="Node JS"
                />
                <span className="text-gray-700">Node Js</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/ios/50/express-js.png"
                  alt="Express JS"
                />
                <span className="text-gray-700">Express Js</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/color/48/mongo-db.png"
                  alt="MongoDB"
                />
                <span className="text-gray-700">MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 pb-4">
          Key Modules
        </h2>
        <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-12">
          <li>
            <span className="text-gray-700">Chart.js</span>
          </li>
          <li>
            <span className="text-gray-700">Nodemailer</span>
          </li>
          <li>
            <span className="text-gray-700">Cloudinary</span>
          </li>
          <li>
            <span className="text-gray-700">Multer</span>
          </li>
          <li>
            <span className="text-gray-700">Toastify</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs;