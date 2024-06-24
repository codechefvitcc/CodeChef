import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const CompetitiveProgramming = ({ register, errors, watch }) => {
    return (
        <>
            {/* Codechef/Codeforces/Leetcode profile link */}
            <div className="mb-3 w-full md:w-1/2 px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="cpProfile"
                >
                    Enter your CP profile link (Codechef/Leetcode):{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <input
                    className={`form-control ${
                    errors.cpProfile ? "border-red-500" : ""
                    }`}
                    name="cpProfile"
                    type="text"
                    id="cpProfile"
                    placeholder="www.codechef.com/users/your-profile"
                    {...register("cpProfile", {
                    required: "Your profile link is required",
                    pattern: {
                        value: /(https?:\/\/(?:www\.)?[^\s/$.?#].[^\s,]*)|((?:www\.)[^\s/$.?#].[^\s,]*)/gi,
                        message: "Invalid profile link",
                    },
                    })}
                />
                {errors.cpProfile && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.cpProfile.message}
                    </div>
                )}
            </div>
            {/* Linkedin Url */}
            <div className="mb-3 w-full md:w-1/2 px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="linkedin"
                >
                    Enter your Linkedin Url:{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <input
                    className={`form-control ${
                    errors.linkedin ? "border-red-500" : ""
                    }`}
                    name="linkedin"
                    type="text"
                    id="linkedin"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    {...register("linkedin", {
                    required: "Your profile link is required",
                    pattern: {
                        value: /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/,
                        message: "Invalid Linkedin url",
                    },
                    })}
                />
                {errors.linkedin && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.linkedin.message}
                    </div>
                )}
            </div>
            {/* Why do you want to take up competitive programming? What's your take on DSA vs Development? */}
            <div className="mb-3 w-full px-2">
                <label
                className="text-sm font-medium text-gray-700 flex items-center"
                htmlFor="whyCp"
                >
                Why do you want to take up competitive programming ?{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <textarea
                className={`form-control ${errors.whyCp ? "border-red-500" : ""}`}
                name="Why CP"
                type="text"
                id="whyCp"
                rows="5"
                placeholder="Why CP? What's your take on DSA vs Development?"
                {...register("whyCp", {
                    required: "This field is required",
                })}
                />
                {errors.whyCp && (
                <div className="text-red-500 text-sm mt-1">
                    {errors.whyCp.message}
                </div>
                )}
            </div>
            {/* Any prior experience in competitive programming? */}
            <div className="mb-3 w-full px-2">
                <label
                className="text-sm font-medium text-gray-700 flex items-center"
                htmlFor="cpExperience"
                >
                Any prior experience/achievements in competitive programming ?{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <textarea
                className={`form-control ${errors.cpExperience ? "border-red-500" : ""}`}
                name="CP Experience"
                type="text"
                id="cpExperience"
                rows="5"
                placeholder="Tell us about your previous experience in competitive programming"
                {...register("cpExperience", {
                    required: "This field is required",
                })}
                />
                {errors.cpExperience && (
                <div className="text-red-500 text-sm mt-1">
                    {errors.cpExperience.message}
                </div>
                )}
            </div>
            {/* participate in weekly contests */}
            <div className="mb-3 w-full px-2">
                <label
                className="text-sm font-medium text-gray-700 flex items-center"
                htmlFor="weeklyContests"
                >
                Will you be up for solving coding contests every week and participate in post contest discussions?{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <select
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.weeklyContests ? "border-red-500" : ""
                }`}
                name="WeeklyContests"
                id="weeklyContests"
                {...register("weeklyContests", {
                    required: "This field is required",
                })}
                >
                <option value="">Select One Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
                {errors.weeklyContests && (
                <div className="text-red-500 text-sm mt-1">
                    {errors.weeklyContests.message}
                </div>
                )}
            </div>
        </>
    )
}

CompetitiveProgramming.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    watch: PropTypes.func.isRequired,
};
  
export default CompetitiveProgramming;