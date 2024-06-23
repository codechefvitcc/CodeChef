import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { AllBlogsCard } from '../Components';

import { HomeGalleryImages } from "../Constants/images";
import { ImageLoaderComponent } from "../Utility";
import { BlogsBackgroundImage } from "../Constants/images";

const mockDataLatestBlog = {
  url: HomeGalleryImages[0].url,
  hashCode: HomeGalleryImages[0].hashCode,
  title: "Some event that happened",
  date: "Sunday, 1 Jan 2024",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  details:
    "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
};

const mockDataAllBlogs = [
  {
    url: HomeGalleryImages[0].url,
    hashCode: HomeGalleryImages[0].hashCode,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 1 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    url: HomeGalleryImages[0].url,
    hashCode: HomeGalleryImages[0].hashCode,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 2 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    url: HomeGalleryImages[0].url,
    hashCode: HomeGalleryImages[0].hashCode,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 3 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    url: HomeGalleryImages[0].url,
    hashCode: HomeGalleryImages[0].hashCode,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 4 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    url: HomeGalleryImages[0].url,
    hashCode: HomeGalleryImages[0].hashCode,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 5 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
];

const LatestBlogCard = ({ url, hashCode, title, date, about, details }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const cardStyle = {
    transition: 'box-shadow 0.25s ease-in-out',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(207, 216, 220, 0.4)',
  };

  const shortAbout =
    about.length > 240 ? `${about.substring(0, 240)}...` : about;
  const shortDetail =
    details.length > 350 ? `${details.substring(0, 350)}...` : details;
  const shortTitle = title.length > 25 ? `${title.substring(0, 25)}...` : title;

  const handleReadMore = () => {
    const formattedTitle = title.replace(/\s+/g, '-');
    navigate(`/blogs/${formattedTitle}`, { state: { url, hashCode, title, date, about, details } });
  };

  return (
    <motion.div 
      className="bg-white p-[16px] rounded-[16px] grid grid-cols-2 gap-[30px] max-w-[800px]"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.75 }}
    >
      <div className="flex flex-col justify-between">
        <div className="rounded-[12px] overflow-hidden border border-gray-400 text-center">
          <ImageLoaderComponent 
            url={url}
            hashCode={hashCode}
            alt={title}
            className="h-[250px] w-[400px]"
            blurWidth={'400px'}
            blurHeight={'270px'}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="mt-4 mb-1.5 text-[#333333] text-[13px] font-semibold">
            {date}
          </p>

          <div className="flex justify-between items-center">
            <h3 className="mb-1.5 font-bold text-[20px] capitalize text-gray-700">
              {shortTitle}
            </h3>

            {details.length <= 350 && 
              <motion.div 
                className="cursor-pointer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={handleReadMore}
              >
                <MdArrowOutward size={27} />
              </motion.div>}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between text-gray-600">
        <p className="font-bold text-[14px]">{shortAbout}</p>
        <p className="text-[14px]">{shortDetail}</p>

        {details.length > 350 && (
          <div>
            <motion.span 
              className="font-semibold text-[18px] cursor-pointer"
              initial={{ letterSpacing: "1px", color: "darkgray" }}
              whileHover={{ letterSpacing: "2px", color: "#BCD5FF" }}
              transition={{ duration: 0.3 }}
              onClick={handleReadMore}
            >
              Read more...
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

function Blogs() {
  return (
    <div style={{ backgroundImage: `url(${BlogsBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col gap-[10px] sm:gap-[30px] items-center pb-16 pt-[65px] sm:pt-[50px] md:pt-[0px]">
        <div>
          <h1 className="text-[60px] text-center font-bold uppercase text-gray-700">Blogs</h1>
        </div>

        <div className="px-[40px] flex flex-col sm:gap-[20px]">
          <h2 className="text-[36px] font-bold capitalize text-gray-700 mb-[20px]">Latest blog</h2>

          <div className="block sm:hidden rounded-[16px]" >
            <AllBlogsCard
              url={mockDataLatestBlog.url}
              hashCode={mockDataLatestBlog.hashCode}
              title={mockDataLatestBlog.title}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
              details={mockDataLatestBlog.details}
            />
          </div>
          <div className="hidden sm:block rounded-[16px]" >
            <LatestBlogCard
              url={mockDataLatestBlog.url}
              hashCode={mockDataLatestBlog.hashCode}
              title={mockDataLatestBlog.title}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
              details={mockDataLatestBlog.details}
            />
          </div>
        </div>

        <div className="px-[30px] flex flex-col gap-[10px] sm:gap-[30px] mt-[30px]">
          <h2 className="text-[36px] font-bold capitalize text-gray-700 md:ml-[10px] lg:ml-[90px] xl:ml-[150px]">All blogs</h2>

          <div className="flex flex-wrap justify-center gap-[20px] rounded-[16px]">
            {mockDataAllBlogs.map((blog, index) => (
              <AllBlogsCard
                key={index}
                url={blog.url}
                hashCode={blog.hashCode}
                title={blog.title}
                date={blog.date}
                about={blog.about}
                details={blog.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
