import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const Projects = ({ register, errors }) => {
  return (
    <>
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="github"
        >
          GitHub Profile Link:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <input
          className={`form-control ${errors.github ? "border-red-500" : ""}`}
          name="Github"
          type="text"
          id="github"
          placeholder="https://github.com/Vishal-1004"
          {...register("github", {
            required: "Github profile link is required",
          })}
        />
        {errors.github && (
          <div className="text-red-500 text-sm mt-1">
            {errors.github.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="linkedin"
        >
          LinkedIn Profile Link:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <input
          className={`form-control ${errors.linkedin ? "border-red-500" : ""}`}
          name="LinkedIn"
          type="text"
          id="linkedin"
          placeholder="https://www.linkedin.com/in/vishal-kumar-yadav/"
          {...register("linkedin", {
            required: "LinkeIn profile link is required",
          })}
        />
        {errors.linkedin && (
          <div className="text-red-500 text-sm mt-1">
            {errors.linkedin.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="whyProjects"
        >
          Why Projects Department?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${errors.techStack ? "border-red-500" : ""}`}
          name="Web Dev Tech Stack"
          type="text"
          id="whyProjects"
          rows="3"
          {...register("whyProjects", {
            required: "This field is required",
          })}
        />
        {errors.whyProjects && (
          <div className="text-red-500 text-sm mt-1">
            {errors.whyProjects.message}
          </div>
        )}
      </div>

      {/* Areas of interest */}
    <div className="mb-3 w-full px-2">
        <label
        className="text-sm font-medium text-gray-700 flex items-center"
        htmlFor="otherInterests"
        >
        What are your interests?{" "}
        <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
        className={`form-control ${
            errors.whichCourse ? "border-red-500" : ""
        }`}
        name="otherInterests"
        type="text"
        id="otherInterests"
        rows="3"
        placeholder="Example: Web Dev, App Dev, ML, AI, Web3"
        {...register("otherInterests", {
            required: "This field is required",
        })}
        />
        {errors.otherInterests && (
        <div className="text-red-500 text-sm mt-1">
            {errors.otherInterests.message}
        </div>
        )}
    </div>

      {/* Any Hackathons */}
      <div className="mb-3 w-full px-2">
        <label
        className="text-sm font-medium text-gray-700 flex items-center"
        htmlFor="hackathons"
        >
        Any Hackathons Participated?
        <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
        className={`form-control ${
            errors.hackathons ? "border-red-500" : ""
        }`}
        name="hackathons"
        type="text"
        id="hackathons"
        rows="3"
        placeholder="Example: Web Dev, App Dev, ML, AI, Web3"
        {...register("hackathons", {
            required: "This field is required",
        })}
        />
        {errors.hackathons && (
        <div className="text-red-500 text-sm mt-1">
            {errors.hackathons.message}
        </div>
        )}
    </div>

    </>
  );
};

Projects.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default Projects;
