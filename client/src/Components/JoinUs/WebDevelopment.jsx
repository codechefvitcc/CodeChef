import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const WebDevelopment = ({ register, errors, watch }) => {
  const webDevCourse = watch ? watch("webDevCourse") : "";

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
          htmlFor="techStack"
        >
          Web Dev Technologies you know:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${errors.techStack ? "border-red-500" : ""}`}
          name="Web Dev Tech Stack"
          type="text"
          id="techStack"
          rows="3"
          placeholder="Example: HTML, CSS, Js, React.JS ...etc"
          {...register("techStack", {
            required: "This field is required",
          })}
        />
        {errors.techStack && (
          <div className="text-red-500 text-sm mt-1">
            {errors.techStack.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="webDevCourse"
        >
          Have you done/doing any course on Web Dev.?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.webDevCourse ? "border-red-500" : ""
          }`}
          name="Web Dev Course"
          id="webDevCourse"
          {...register("webDevCourse", {
            required: "This field is required",
          })}
        >
          <option value="">Select One Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.webDevCourse && (
          <div className="text-red-500 text-sm mt-1">
            {errors.webDevCourse.message}
          </div>
        )}
      </div>
      {webDevCourse === "Yes" && (
        <div className="mb-3 w-full px-2">
          <label
            className="text-sm font-medium text-gray-700 flex items-center"
            htmlFor="whichCourse"
          >
            Which course are you doing?{" "}
            <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
          </label>
          <textarea
            className={`form-control ${
              errors.whichCourse ? "border-red-500" : ""
            }`}
            name="Web Dev Tech Stack"
            type="text"
            id="whichCourse"
            rows="3"
            placeholder="Name the course and topic you are learning, and provide links to the projects you have completed during this course."
            {...register("whichCourse", {
              required: "This field is required",
            })}
          />
          {errors.whichCourse && (
            <div className="text-red-500 text-sm mt-1">
              {errors.whichCourse.message}
            </div>
          )}
        </div>
      )}
    </>
  );
};

WebDevelopment.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default WebDevelopment;
