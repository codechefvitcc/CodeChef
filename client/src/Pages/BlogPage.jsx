import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AllBlogsCard } from '../Components'

import image from "../assets/HomeGalley/image1.jpg";
import { BlogsBackgroundImage } from "../Constants/images";

const mockDataRecommendedBlogs = [
  {
    image: image,
    title: "Some event that happened R1",
    date: "Sunday, 1 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened R2",
    date: "Sunday, 2 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
]

function BlogPage() {
  const location = useLocation();
  const { title, image, date, about, details } = location.state;

  return (
    <div 
      className="py-10 md:py-5 px-2 sm:px-5 min-h-screen"
      style={{ backgroundImage: `url(${BlogsBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='pt-[45px] sm:pt-[30px] md:pt-[5px]'>
        <h1 className="text-gray-700 text-4xl text-center font-bold mb-8 capitalize">{title}</h1>
        <div className="max-w-4xl mx-auto bg-white p-3 md:p-8 mb-10 rounded-lg shadow-md">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ 
              scale: { duration: 0.25 }, 
              opacity: { duration: 2 }, 
            }}
          >
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </motion.div>
          
          <p className="text-[#333333] font-semibold mb-4">{date}</p>
          <p className="text-gray-500 font-bold mb-6">{about}</p>
          <div className="text-gray-500 leading-relaxed">
            {details}
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-gray-700 text-3xl text-center font-bold mb-8 capitalize'>You might also like</p>
        <div className='flex flex-wrap justify-center gap-[20px]'>
          {mockDataRecommendedBlogs.map((blog, index) => (
              <AllBlogsCard
                key={index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                about={blog.about}
                details={blog.details}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default BlogPage;
