import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const MarketingOutreach = ({ register, errors }) => {
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
      {/* Hosteler/Day Scholar */}
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="hostelerORdayscholar"
        >
          Hosteler/Day Scholar:{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.hostelerORdayscholar ? "border-red-500" : ""
          }`}
          name="Hosteler/DayScholar"
          id="hostelerORdayscholar"
          {...register("hostelerORdayscholar", {
            required: "This field is required",
          })}
        >
          <option value="">Select One Option</option>
          <option value="Hosteler">Hosteler</option>
          <option value="Day Scholar">Day Scholar</option>
        </select>
        {errors.hostelerORdayscholar && (
          <div className="text-red-500 text-sm mt-1">
            {errors.hostelerORdayscholar.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="secureSponsors"
        >
          How will you secure sponsors for the event?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${
            errors.secureSponsors ? "border-red-500" : ""
          }`}
          name="Secure Sponsors"
          type="text"
          id="secureSponsors"
          rows="5"
          placeholder="Give us an idea about how will you get us sponsors for the event."
          {...register("secureSponsors", {
            required: "This field is required",
          })}
        />
        {errors.secureSponsors && (
          <div className="text-red-500 text-sm mt-1">
            {errors.secureSponsors.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="promoteEvent"
        >
          Promote our Code-a-thon event to students from all years in college.{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${
            errors.promoteEvent ? "border-red-500" : ""
          }`}
          name="Promote Eevent"
          type="text"
          id="promoteEvent"
          rows="5"
          placeholder="Give us the marketing pitch and captions for this event."
          {...register("promoteEvent", {
            required: "This field is required",
          })}
        />
        {errors.promoteEvent && (
          <div className="text-red-500 text-sm mt-1">
            {errors.promoteEvent.message}
          </div>
        )}
      </div>
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="moreParticipants"
        >
          How will you attract more participants for an event scheduled in 2
          days? <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${
            errors.moreParticipants ? "border-red-500" : ""
          }`}
          name="Bring Participants"
          type="text"
          id="moreParticipants"
          rows="5"
          placeholder="List down the steps which you will follow to bring more participants for our event"
          {...register("moreParticipants", {
            required: "This field is required",
          })}
        />
        {errors.moreParticipants && (
          <div className="text-red-500 text-sm mt-1">
            {errors.moreParticipants.message}
          </div>
        )}
      </div>
    </>
  );
};

MarketingOutreach.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default MarketingOutreach;
