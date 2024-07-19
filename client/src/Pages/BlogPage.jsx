import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { AllBlogsCard } from '../Components'

import { HomeGalleryImages } from '../Constants/images';
import BlogsBackgroundImage  from "/Background/BlogsBackground.svg";
import { ImageLoaderComponent } from "../Utility";

function BlogPage() {
  const location = useLocation();
  const { url, hashCode, title, date, about, details, blogs } = location.state;

  const formattedDate = format(new Date(date), 'EEEE, d MMM yyyy');

  // choosing 2 random blogs to suggest
  const filteredBlogs = blogs.filter(blog => blog.heading !== title); // all other blogs excluding the current one
  
  const randomIndexes = [];
  while (randomIndexes.length < 2) {
    const randomIndex = Math.floor(Math.random() * filteredBlogs.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  };
  const randomBlogs = randomIndexes.map(index => filteredBlogs[index]); // 2 random blogs amongst these

  return (
    <div 
      className="py-14 md:py-5 px-2 sm:px-5 min-h-screen"
      style={{ backgroundImage: `url(${BlogsBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='pt-[45px] sm:pt-[30px] md:pt-[5px]'>
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
            <ImageLoaderComponent 
              url={url}
              hashCode={hashCode}
              alt={title}
              className="w-full h-auto rounded-lg"
              blurWidth={'100%'}
              blurHeight={'250px'}
            />
          </motion.div>
          
          <h1 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-8 capitalize">{title}</h1>
          <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">{formattedDate}</p>
          <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">{about}</p>
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            {details}
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-gray-700 text-3xl text-center font-bold mb-8 capitalize'>You might also like</p>
        <motion.div 
          className='flex flex-wrap justify-center gap-[20px]'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
        >
          {randomBlogs.map((blog, index) => (
              <AllBlogsCard
                key={index}
                url={blog.imageUrl}
                hashCode={blog.imageHashCode}
                title={blog.heading}
                date={blog.date}
                about={blog.about}
                details={blog.blog[0].children[0].text}
                blogs={blogs}
              />
            ))}
          </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;
