import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PresidentCard from "./President-Card";
import CarouselButton from "./CarouselButton";

import { getAllPresidents } from "../../api/apiCall";
import ErrorBox from "../../Utility/ErrorBox.jsx";

import image from "../../assets/vishalKrYadav.jpg";
import "../../Styles/Leaders/Presidents.css";
import { FaSpinner } from "react-icons/fa";

const mockData = [
  {
    name: "Shashank Sharma",
    photo: image,
    year: "2024-25",
    vision:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "shashank.sharma2022@vitstudent.ac.in",
    linkedin: "https://example.com",
  },
  {
    name: "Vishal Kumar Yadav",
    photo: image,
    year: "2025-26",
    vision:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com",
  },
  {
    name: "Akkilesh",
    photo: image,
    year: "2026-27",
    vision:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est excepturi eligendi aperiam quia! Quisquam totam enim itaque porro tenetur in laborum laudantium aspernatur quae, magni eius voluptates quibusdam voluptate?",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com",
  },
  {
    name: "Sidharth Tiwari",
    photo: image,
    year: "2026-27",
    vision:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officia culpa dolorem velit illo tempora neque est nam sapiente autem!",
    mail: "some.name2022@vitstudent.ac.in",
    linkedin: "https://example.com",
  },
];

function Presidents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [presidents, setPresidents] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPresidents = async () => {
      setLoading(true);
      const data = await getAllPresidents();
      if (data.error) {
        setError(true);
      } else {
        setPresidents(data);
      }
      setLoading(false);
    };

    fetchPresidents();
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % presidents.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + presidents.length) % presidents.length
    );
  };

  return (
    <motion.div
      className="w-full md:w-1/2 min-w-[384px] md:min-h-[250px] sm:min-h-[400px] min-h-[400px] h-[35vw] px-5 flex flex-col items-center"
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="box-border tracking-normal text-gray-700 outline-none block text-2xl 
      xl:text-3xl lg:text-2xl md:text-xl 
      font-bold mx-auto mb-5 w-full text-center">
        Presidents Council
      </h2>

      <div className="flex flex-col items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 100,
          }}
        >
          {loading ? (
              <div className="flex justify-center items-center">
                <FaSpinner className="spinner text-center text-xl sm:text-3xl" />
              </div>
            ) : error ? (
              <div className="flex">
                <ErrorBox />
              </div>
            ) : <PresidentCard
                  name={presidents[currentIndex].name}
                  url={presidents[currentIndex].imageUrl}
                  hashCode={presidents[currentIndex].imageHashCode}
                  year={presidents[currentIndex].year}
                  vision={presidents[currentIndex].testimonial}
                  mail={presidents[currentIndex].email}
                  linkedin={presidents[currentIndex].linkedin}
                />
          }
        </motion.div>

        <div
          className="flex gap-10 mt-5 xl:mt-5 lg:mt-3 md:mt-1 sm:mt-5"
          style={{ width: "120px", justifyContent: "space-between" }}
        >
          <CarouselButton
            onClick={prevItem}
            direction="prev"
            disabled={currentIndex === 0}
          />

          <CarouselButton
            onClick={nextItem}
            direction="next"
            disabled={currentIndex === presidents.length - 1}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Presidents;
