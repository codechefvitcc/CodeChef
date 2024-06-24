import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const Design = ({ register, errors, watch }) => {
    return (
        <>
            {/* Design Skills */}
            <div className="mb-3 w-full md:w-1/2 px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="designSkills"
                >
                    What tools and software are you familiar with? :{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <input
                    className={`form-control ${
                    errors.designSkills ? "border-red-500" : ""
                    }`}
                    name="DesignSkills"
                    type="text"
                    id="designSkills"
                    placeholder="Figma, Canva, Adobe Photoshop ,Premiere Pro, After Effects, etc."
                    {...register("designSkills", {
                    required: "Your skills are required",
                    })}
                />
                {errors.designSkills && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.designSkills.message}
                    </div>
                )}
            </div>
            {/* Why are you interested in joining our design department? */}
            <div className="mb-3 w-full px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="whyDesign"
                >
                    Why are you interested in joining our design department?{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <textarea
                    className={`form-control ${errors.whyDesign ? "border-red-500" : ""}`}
                    name="WhyDesign"
                    type="text"
                    id="whyDesign"
                    rows="5"
                    placeholder="Tell us your reasons to join the design department"
                    {...register("whyDesign", {
                    required: "This field is required",
                    })}
                />
                {errors.whyDesign && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.whyDesign.message}
                    </div>
                )}
            </div>
            {/* your work */}
            <div className="mb-3 w-full px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="yourWork"
                >
                    Is there anything else you would like us to know about your work? :{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <textarea
                    className={`form-control ${errors.yourWork ? "border-red-500" : ""}`}
                    name="YourWork"
                    type="text"
                    id="yourWork"
                    rows="5"
                    placeholder="Share your work with us, drive or canva links"
                    {...register("yourWork", {
                    required: "This field is required",
                    })}
                />
                {errors.yourWork && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.yourWork.message}
                    </div>
                )}
            </div>
            {/* Portfolio Link */}
            <div className="mb-3 w-full md:w-1/2 px-2">
                <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="designPortfolio"
                >
                    Please provide a link to your portfolio or any previous work :{" "}
                    <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                </label>
                <input
                    className={`form-control ${
                    errors.designPortfolio ? "border-red-500" : ""
                    }`}
                    name="DesignPortfolio"
                    type="text"
                    id="designPortfolio"
                    placeholder="https://www.example.com/"
                    {...register("designPortfolio", {
                    required: "Your profile link is required",
                    pattern: {
                        value: /(https?:\/\/(?:www\.)?[^\s/$.?#].[^\s,]*)|((?:www\.)[^\s/$.?#].[^\s,]*)/gi,
                        message: "Invalid profile link",
                    },
                    })}
                />
                {errors.designPortfolio && (
                    <div className="text-red-500 text-sm mt-1">
                    {errors.designPortfolio.message}
                    </div>
                )}
            </div>
        </>
    )
}

Design.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    watch: PropTypes.func.isRequired,
};

export default Design;