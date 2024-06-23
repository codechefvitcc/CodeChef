import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const Management = ({ register, errors, watch }) => {
  const otherClub = watch ? watch("otherClub") : "";

  return (
    <>
      {/* CGPA */}
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="cgpa"
        >
          CGPA: <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.cgpa ? "border-red-500" : ""
          }`}
          name="CGPA"
          id="cgpa"
          {...register("cgpa", {
            required: "CGPA is required",
          })}
        >
          <option value="">Select CGPA</option>
          <option value="9 Pointer">9 Pointer</option>
          <option value="Not a 9 Pointer">Not a 9 Pointer</option>
        </select>
        {errors.cgpa && (
          <div className="text-red-500 text-sm mt-1">{errors.cgpa.message}</div>
        )}
      </div>
      {/* Part of other club */}
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="otherClub"
        >
          Are you a part of any other club?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.otherClub ? "border-red-500" : ""
          }`}
          name="CGPA"
          id="otherClub"
          {...register("otherClub", {
            required: "This field is required",
          })}
        >
          <option value="">Select One Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.otherClub && (
          <div className="text-red-500 text-sm mt-1">
            {errors.otherClub.message}
          </div>
        )}
      </div>
      {/* Describe role in other club */}
      {otherClub === "Yes" && (
        <div className="mb-3 w-full px-2">
          <label
            className="text-sm font-medium text-gray-700 flex items-center"
            htmlFor="roleInCurrentClub"
          >
            Describe your current role in the club in a concise manner:{" "}
            <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
          </label>
          <textarea
            className={`form-control ${
              errors.roleInCurrentClub ? "border-red-500" : ""
            }`}
            name="Role in current club"
            type="text"
            id="roleInCurrentClub"
            rows="5"
            placeholder="List down your role in the current club"
            {...register("roleInCurrentClub", {
              required: "This field is required",
            })}
          />
          {errors.roleInCurrentClub && (
            <div className="text-red-500 text-sm mt-1">
              {errors.roleInCurrentClub.message}
            </div>
          )}
        </div>
      )}
      {/* Handling a situation */}
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="handleSituation"
        >
          How would you manage a situation with uncooperative team members?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${
            errors.handleSituation ? "border-red-500" : ""
          }`}
          name="Handle Situation"
          type="text"
          id="handleSituation"
          rows="5"
          placeholder="List down the ways which you would follow to handle this situation"
          {...register("handleSituation", {
            required: "This field is required",
          })}
        />
        {errors.handleSituation && (
          <div className="text-red-500 text-sm mt-1">
            {errors.handleSituation.message}
          </div>
        )}
      </div>
      {/* Strength & Weakness */}
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="strength&weakness"
        >
          List your strength & weakness:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${errors.strength ? "border-red-500" : ""}`}
          name="Strength & Weakness"
          type="text"
          id="strength"
          rows="5"
          placeholder="List your strength and weakness. How do they impact your work?"
          {...register("strength", {
            required: "This field is required",
          })}
        />
        {errors.strength && (
          <div className="text-red-500 text-sm mt-1">
            {errors.strength.message}
          </div>
        )}
      </div>
    </>
  );
};

Management.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default Management;
