import PropTypes from "prop-types";
import { FaAsterisk, FaWhatsapp } from "react-icons/fa"; // Added FaWhatsapp

const Projects = ({ register, errors }) => {
  const hackathonOptions = [
    { value: "hack4health", label: "Hack4Health" },
    { value: "genai", label: "GenAI" },
    { value: "sih", label: "SIH (Smart India Hackathon)" },
    { value: "hackathrone", label: "Hackathrone" },
  ];

  return (
    <>
      {/* *************************************************************** */}
      {/* WHATSAPP GROUP JOINING SECTION (BLUE THEME)          */}
      {/* *************************************************************** */}
      <div className="w-full px-2 mb-8">
        <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 shadow-md text-center">
          <h3 className="text-blue-800 font-bold text-xl mb-2 flex justify-center items-center gap-2">
            <FaWhatsapp className="text-3xl text-green-600" /> Join the Projects WhatsApp Group
          </h3>
          <p className="text-blue-900 font-medium mb-4">
            It is <b>mandatory</b> to join the group to receive updates regarding the recruitment.
          </p>
          <a
            href="https://chat.whatsapp.com/E7WCPk6kACsAik6vX8w04P" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition-transform transform hover:scale-105"
          >
            Click Here to Join Group
          </a>
        </div>
      </div>
      {/* *************************************************************** */}


      {/* --- Standard Links --- */}
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
          placeholder="https://github.com/YourProfile"
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
          placeholder="https://www.linkedin.com/in/your-profile/"
          {...register("linkedin", {
            required: "LinkedIn profile link is required",
          })}
        />
        {errors.linkedin && (
          <div className="text-red-500 text-sm mt-1">
            {errors.linkedin.message}
          </div>
        )}
      </div>

      {/* --- Resume --- */}
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="resume"
        >
          Resume Link (Google Drive/Dropbox - Enable Public Access):{" "}
          <span className="text-gray-400 text-xs ml-2">(Optional)</span>
        </label>
        <input
          className="form-control"
          name="Resume"
          type="url"
          id="resume"
          placeholder="https://drive.google.com/..."
          {...register("resume")}
        />
      </div>

      {/* --- Why Projects --- */}
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="whyProjects"
        >
          Why do you want to join Projects Dept?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${errors.whyProjects ? "border-red-500" : ""}`}
          name="Why Projects"
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

      {/* ==========================================================
          HACKATHON SECTION 1 (REQUIRED)
         ========================================================== */}
      <div className="w-full px-2 mt-4 mb-2">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Hackathon Problem Statement Selection 1
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Refer to the CodeChef VITC LinkedIn post dated 26/12/2026.
        </p>
      </div>

      {/* Dropdown 1 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 flex items-center">
          Select Problem Statement 1:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`form-control ${errors.hackathon1_select ? "border-red-500" : ""}`}
          {...register("hackathon1_select", {
            required: "Please select a problem statement",
          })}
        >
          <option value="">Select an option</option>
          {hackathonOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.hackathon1_select && (
          <div className="text-red-500 text-sm mt-1">
            {errors.hackathon1_select.message}
          </div>
        )}
      </div>

      {/* Question 1.1 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          If you were part of the selected problem statement, explain how you
          would have contributed to the solution. <br />
          <span className="text-xs text-gray-500 font-normal">
            (Your answer should clearly highlight: Your technical
            responsibilities, The specific components you would work on, How
            your contribution adds value to the overall solution)
          </span>
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px] inline" />
        </label>
        <textarea
          className={`form-control ${errors.hackathon1_contribution ? "border-red-500" : ""}`}
          rows="4"
          {...register("hackathon1_contribution", {
            required: "This field is required",
          })}
        />
        {errors.hackathon1_contribution && (
          <div className="text-red-500 text-sm mt-1">
            {errors.hackathon1_contribution.message}
          </div>
        )}
      </div>

      {/* Question 1.2 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          For the same problem statement, propose a unique and improved approach
          compared to existing solutions. <br />
          <span className="text-xs text-gray-500 font-normal">
            (In your response, clearly explain: Your proposed approach and why
            it is different, how and why it would work effectively, feasability
            and uniqueness, potential limitations or challenges, the complete
            tech stack you would use)
          </span>
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px] inline" />
        </label>
        <textarea
          className={`form-control ${errors.hackathon1_proposal ? "border-red-500" : ""}`}
          rows="4"
          {...register("hackathon1_proposal", {
            required: "This field is required",
          })}
        />
        {errors.hackathon1_proposal && (
          <div className="text-red-500 text-sm mt-1">
            {errors.hackathon1_proposal.message}
          </div>
        )}
      </div>

      {/* ==========================================================
          HACKATHON SECTION 2 (OPTIONAL)
         ========================================================== */}
      <div className="w-full px-2 mt-6 mb-2">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Hackathon Problem Statement Selection 2 (Optional)
        </h3>
      </div>

      {/* Dropdown 2 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 flex items-center">
          Select Problem Statement 2:
        </label>
        <select className="form-control" {...register("hackathon2_select")}>
          <option value="">Select an option (Optional)</option>
          {hackathonOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Question 2.1 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          If you were part of the selected problem statement, explain how you
          would have contributed to the solution. <br />
          <span className="text-xs text-gray-500 font-normal">
            (Your answer should clearly highlight: Your technical
            responsibilities, The specific components you would work on, How
            your contribution adds value to the overall solution)
          </span>
        </label>
        <textarea
          className="form-control"
          rows="4"
          {...register("hackathon2_contribution")}
        />
      </div>

      {/* Question 2.2 */}
      <div className="mb-3 w-full px-2">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          For the same problem statement, propose a unique and improved approach
          compared to existing solutions. <br />
          <span className="text-xs text-gray-500 font-normal">
            (In your response, clearly explain: Your proposed approach and why
            it is different, how and why it would work effectively, feasability
            and uniqueness, potential limitations or challenges, the complete
            tech stack you would use)
          </span>
        </label>
        <textarea
          className="form-control"
          rows="4"
          {...register("hackathon2_proposal")}
        />
      </div>
    </>
  );
};

Projects.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Projects;
