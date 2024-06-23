import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const SocialMedia = ({ register, errors, watch }) => {
  const pod = watch ? watch("pod") : "";

  return (
    <>
      {/* Part of other club */}
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="pod"
        >
          Which POD do you want to join?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.pod ? "border-red-500" : ""
          }`}
          name="POD"
          id="pod"
          {...register("pod", {
            required: "This field is required",
          })}
        >
          <option value="">Select One Option</option>
          <option value="Video_Editor">Video Editor</option>
          <option value="PR">PR</option>
          <option value="Content_Writer">Content Writer</option>
        </select>
        {errors.pod && (
          <div className="text-red-500 text-sm mt-1">{errors.pod.message}</div>
        )}
      </div>
      {pod === "Content_Writer" && (
        <div className="mb-3 w-full md:w-1/2 px-2">
          <label
            className="text-sm font-medium text-gray-700 flex items-center"
            htmlFor="niche"
          >
            Which niche do you prefer?{" "}
            <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
          </label>
          <select
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              errors.niche ? "border-red-500" : ""
            }`}
            name="Niche"
            id="niche"
            {...register("niche", {
              required: "This field is required",
            })}
          >
            <option value="">Select One Option</option>
            <option value="MEMES">Memes</option>
            <option value="POSTS">Posts</option>
            <option value="NEWS_LETTER">News Letter</option>
          </select>
          {errors.niche && (
            <div className="text-red-500 text-sm mt-1">
              {errors.niche.message}
            </div>
          )}
        </div>
      )}
      {pod === "Video_Editor" && (
        <div className="mb-3 w-full px-2">
          <label
            className="text-sm font-medium text-gray-700 flex items-center"
            htmlFor="softwareForVideoEditing"
          >
            Which software do you use for video editing?{" "}
            <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
          </label>
          <textarea
            className={`form-control ${
              errors.softwareForVideoEditing ? "border-red-500" : ""
            }`}
            name="Software For Video Editing"
            type="text"
            id="softwareForVideoEditing"
            rows="3"
            placeholder="List down the softwares."
            {...register("softwareForVideoEditing", {
              required: "This field is required",
            })}
          />
          {errors.softwareForVideoEditing && (
            <div className="text-red-500 text-sm mt-1">
              {errors.softwareForVideoEditing.message}
            </div>
          )}
        </div>
      )}
    </>
  );
};

SocialMedia.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default SocialMedia;
