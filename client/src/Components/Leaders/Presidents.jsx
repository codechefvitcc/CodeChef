import { useState } from "react";
import { motion } from "framer-motion";
import PresidentCard from "./President-Card";
import CarouselButton from "./CarouselButton";

import image from "../../assets/vishalKrYadav.jpg";
import "../../Styles/Leaders/Presidents.css";

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

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockData.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mockData.length) % mockData.length
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
      <h2 className="box-border tracking-normal text-gray-700 outline-none block text-[30px] font-bold mx-auto mb-5 w-full text-center">
        Presidents
      </h2>

      <div className="flex flex-col items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.25,
            type: "spring",
            stiffness: 600,
            damping: 100,
          }}
        >
          <PresidentCard
            name={mockData[currentIndex].name}
            photo={mockData[currentIndex].photo}
            year={mockData[currentIndex].year}
            vision={mockData[currentIndex].vision}
            mail={mockData[currentIndex].mail}
            linkedin={mockData[currentIndex].linkedin}
          />
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
            disabled={currentIndex === mockData.length - 1}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Presidents;
