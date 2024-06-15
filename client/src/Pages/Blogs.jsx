import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { useState } from "react";

import image from "../assets/HomeGalley/image1.jpg";
import { BlogsBackgroundImage } from "../Constants/images";

const mockDataLatestBlog = {
  image: image,
  title: "Some event that happened",
  date: "Sunday, 1 Jan 2024",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  details:
    "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
};

const mockDataAllBlogs = [
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 1 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 2 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 3 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 4 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 5 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
];

const LatestBlogCard = ({ title, image, date, about, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: 'box-shadow 0.25s ease-in-out',
    boxShadow: isHovered ? '8px 8px 10px rgba(0, 0, 0, 0.2), -8px -8px 10px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)',
  };

  const shortDetail =
    details.length > 350 ? `${details.substring(0, 350)}...` : details;
  const shortTitle = title.length > 25 ? `${title.substring(0, 25)}...` : title;

  return (
    <motion.div 
      className="bg-white border-[2px] border-gray-300 p-[16px] rounded-[16px] grid grid-cols-2 gap-[30px] max-w-[800px]"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col justify-between">
        <div className="rounded-[12px] overflow-hidden border border-gray-400 text-center">
          <img src={image} alt={title} className="h-[250px] w-[400px]" />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="mt-4 mb-1.5 text-[#333333] text-[13px] font-semibold">
            {date}
          </p>

          <div className="flex justify-between items-center">
            <h3 className="mb-1.5 font-bold text-[20px] capitalize text-gray-700">
              {shortTitle}
            </h3>

            {details.length <= 350 && <MdArrowOutward size={27} />}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between text-gray-600">
        <p className="font-bold text-[14px]">{about}</p>
        <p className="text-[14px]">{shortDetail}</p>

        {details.length > 350 && (
          <div className="font-semibold text-gray-500 text-[18px] cursor-pointer">
            Read more...
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AllBlogsCard = ({ title, image, date, about }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: 'box-shadow 0.25s ease-in-out',
    boxShadow: isHovered ? '3px 3px 8px rgba(0, 0, 0, 0.2),-3px -3px 8px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)',
  };

  const shortAbout =
    about.length > 180 ? `${about.substring(0, 180)}...` : about;
  const shortTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

  return (
    <motion.div 
      className="bg-white border-[2px] border-gray-300 p-[10px] pb-[16px] rounded-[16px] min-w-[300px] max-w-[350px]" 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="rounded-[12px] overflow-hidden border border-gray-400 text-center">
        <img src={image} alt={title} className="h-[250px] w-[330px]" />
      </div>

      <div className="mt-6">
        <p className="mt-4 mb-1.5 text-[#333333] text-[13px] font-semibold">
          {date}
        </p>

        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="mb-1.5 font-bold text-[20px] capitalize text-gray-700">
            {shortTitle}
          </h3>

          <MdArrowOutward size={27} />
        </div>

        <p className="text-[14px] text-gray-700">{shortAbout}</p>
      </div>
    </motion.div>
  );
};

function Blogs() {
  return (
    <div style={{ backgroundImage: `url(${BlogsBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col gap-[30px] items-center pb-16 pt-[65px] sm:pt-[0px]">
        <div>
          <h1 className="text-[60px] text-center font-bold uppercase text-gray-700">Blogs</h1>
        </div>

        <div className="px-[40px] flex flex-col gap-[20px]">
          <h2 className="text-[36px] font-bold capitalize text-gray-700 mb-[20px]">Latest blog</h2>

          <div className="block sm:hidden rounded-[16px]">
            <AllBlogsCard
              title={mockDataLatestBlog.title}
              image={mockDataLatestBlog.image}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
            />
          </div>
          <div className="hidden sm:block rounded-[16px]">
            <LatestBlogCard
              title={mockDataLatestBlog.title}
              image={mockDataLatestBlog.image}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
              details={mockDataLatestBlog.details}
            />
          </div>
        </div>

        <div className="px-[30px] flex flex-col gap-[30px] mt-[30px]">
          <h2 className="text-[36px] font-bold capitalize text-gray-700">All blogs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[20px] rounded-[16px]">
            {mockDataAllBlogs.map((blog, index) => (
              <AllBlogsCard
                key={index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                about={blog.about}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
