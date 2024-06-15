import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CarouselButton = ({ onClick, direction, disabled }) => {
  const paths = {
    prev: "M15 19l-7-7 7-7",
    next: "M9 5l7 7-7 7",
  };

  return (
    <motion.button
      className={`carousel-button flex items-center justify-center 
                  w-7 xl:w-10 lg:w-9 md:w-7 sm:w-10
                  h-7 xl:h-10 lg:h-9 md:h-7 sm:h-10
                  bg-gray-200 rounded-full shadow-md focus:outline-none
                  ${
                    disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300"
                  }`}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="w-5 xl:w-6 md:w-4 sm:w-6 h-5 xl:h-6 md:h-4 sm:h-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={paths[direction]}
        />
      </svg>
    </motion.button>
  );
};

CarouselButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CarouselButton;
