import PropTypes from "prop-types";
import { FaAsterisk } from "react-icons/fa";

const Finance = ({ register, errors, watch }) => {
  const excel = watch ? watch("excel") : "";

  return (
    <>
      {/* Why join finance department */}
      <div className="mb-3 w-full px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="whyFinance"
        >
          Why Finance Department ?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <textarea
          className={`form-control ${errors.whyFinance ? "border-red-500" : ""}`}
          name="Why Finance"
          type="text"
          id="whyFinance"
          rows="5"
          placeholder="Tell us your reasons to join the finance department"
          {...register("whyFinance", {
            required: "This field is required",
          })}
        />
        {errors.whyFinance && (
          <div className="text-red-500 text-sm mt-1">
            {errors.whyFinance.message}
          </div>
        )}
      </div>
      {/* Excel knowledge */}
      <div className="mb-3 w-full md:w-1/2 px-2">
        <label
          className="text-sm font-medium text-gray-700 flex items-center"
          htmlFor="excel"
        >
          Do you have knowledge regarding MS Excel ?{" "}
          <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
        </label>
        <select
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errors.excel ? "border-red-500" : ""
          }`}
          name="Excel"
          id="excel"
          {...register("excel", {
            required: "This field is required",
          })}
        >
          <option value="">Select One Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.excel && (
          <div className="text-red-500 text-sm mt-1">
            {errors.excel.message}
          </div>
        )}
      </div>
      {/* Financial techniques and tools */}
      {excel === "Yes" && (
        <div className="mb-3 w-full px-2">
          <label
            className="text-sm font-medium text-gray-700 flex items-center"
            htmlFor="financialAwareness"
          >
            Are you aware about financial techniques and tools ?{" "}
            <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
          </label>
          <textarea
            className={`form-control ${
              errors.financialAwareness ? "border-red-500" : ""
            }`}
            name="Financial Awareness"
            type="text"
            id="financialAwareness"
            rows="5"
            placeholder="Showcase your knowledge regarding financial technologies and tools"
            {...register("financialAwareness", {
              required: "This field is required",
            })}
          />
          {errors.financialAwareness && (
            <div className="text-red-500 text-sm mt-1">
              {errors.financialAwareness.message}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Finance.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
};

export default Finance;