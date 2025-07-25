import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAsterisk, FaSpinner } from "react-icons/fa";
import "../Styles/JoinUs/JoinUs.css";
import {
  addJoinUsData,
  areWeRecuriting,
  getAllJoinUsData,
  getAllOpenDepartments,
  sendWhatsAppGroupJoinLink,
} from "../api/apiCall";
import { ErrorBox } from "../Utility";
import {
  MarketingOutreach,
  SocialMedia,
  WebDevelopment,
  CompetitiveProgramming,
  Design,
  Management,
} from "../Components";
import ToastMsg from "../Constants/ToastMsg";
import ReactGA from "react-ga4";
import Projects from "../Components/JoinUs/Projects";

const DepartmentKeyMap = {
  competitive_programming: "Competitive Programming",
  design: "Design",
  finance: "Finance",
  management: "Event Management",
  marketing_and_outreach: "Marketing & Sponsorship",
  projects: "Projects",
  social_media_and_content: "Social Media & Content",
  web_development: "Web Development",
};

const JoinUs = () => {
  const [formFillLoading, setFormFillLoading] = useState(false);
  const [allJoinUsData, setAllJoinUsData] = useState([]);
  const [openDepartments, setOpenDepartments] = useState([]);

  const [recruiting, setRecruiting] = useState("No"); // either "Yes" or "No"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Getting all the responses in the Google Sheet from backend for Join us
  const fetchAllJoinUsData = async () => {
    setFormFillLoading(true);
    try {
      const response = await getAllJoinUsData();
      // console.log(response);
      // Set the fetched user data to the component state
      if (response.status === 200) {
        // Extract the emails and ensure uniqueness
        setAllJoinUsData(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setFormFillLoading(false);
  };
  const fetchOpenDeparments = async () => {
    setFormFillLoading(true);
    try {
      const response = await getAllOpenDepartments();
      if (response) {
        const keys = Object.keys(response.whatsAppGroupLinks);
        const openDepts = [];
        for (let key of keys) {
          if (response.whatsAppGroupLinks[key].needRecruits)
            openDepts.push({ value: key, title: DepartmentKeyMap[key] });
        }
        setOpenDepartments(openDepts);
      }
    } catch (error) {
      console.log("Error fetching open departments: ", error);
    }
  };

  // to check whether we are recruiting or not
  useEffect(() => {
    const areWeRecruitingOrNot = async () => {
      setLoading(true);
      const data = await areWeRecuriting();
      if (data.error) {
        setError(true);
      } else {
        setRecruiting(data[0].recruiting);
      }
      setLoading(false);
    };
    fetchOpenDeparments();
    areWeRecruitingOrNot();
    fetchAllJoinUsData();
  }, []);

  // integrating google analytics 4
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "JoinUs Page",
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    // console.log(formData);
    const { reg_no, department } = formData;
    let existingEntries = [];
    // Get all entries with the same reg_no
    if (allJoinUsData) {
      // console.log(allJoinUsData);
      existingEntries = allJoinUsData.filter(
        (entry) => entry.reg_no === reg_no
      );
    }

    if (existingEntries.length > 0) {
      const sameDepartmentEntry = existingEntries.find(
        (entry) => entry.department === department
      );
      if (sameDepartmentEntry) {
        ToastMsg("You cannot fill the form twice for a department", "warning");
      } else {
        // Proceed with API call since department is different
        await handleFormSubmit(formData);
      }
    } else {
      // Proceed with API call since reg_no is new
      await handleFormSubmit(formData);
    }
  };
  const handleFormSubmit = async (formData) => {
    setFormFillLoading(true);
    if (recruiting === "No") {
      return console.error("Sorry recruitments are currently closed :(");
    } else {
      try {
        const data = {
          data: formData,
        };
        const { vit_email, department, name } = formData;
        // console.log(vit_email, department);

        const response = await addJoinUsData(data);
        // console.log(response);
        if (response.status === 200) {
          ToastMsg("Form filled Successfully!", "success");
          const responseOfEmail = await sendWhatsAppGroupJoinLink({
            vit_email,
            department,
            name,
          });
          // console.log(responseOfEmail);
          reset();
          fetchAllJoinUsData();
        } else {
          ToastMsg("Failed to add data", "error");
        }
      } catch (error) {
        console.error("Error adding data:", error);
        ToastMsg(
          "An error occurred while filling the form. Please try later.",
          "error"
        );
      }
    }
    setFormFillLoading(false);
  };

  // Watch the regNo field to convert it to uppercase
  const regNo = watch("reg_no");
  const department = watch("department");

  useEffect(() => {
    setValue("reg_no", regNo?.toUpperCase());
  }, [regNo, setValue]);
  return (
    <>
      <div className="joinarea flex justify-center items-center pt-[80px] sm:pt-[50px] pb-[50px]">
        {loading ? (
          <div className="flex justify-center items-center">
            <FaSpinner className="spinner text-center text-xl sm:text-3xl" />
          </div>
        ) : error ? (
          <div className="flex">
            <ErrorBox />
          </div>
        ) : (
          <div className="box relative">
            {/* Testing */}
            <div
              className={`absolute flex justify-center items-center z-[10]
        w-full h-full inset-0 backdrop-blur-md bg-white/30 ${
          recruiting === "No" ? "visible" : "hidden"
        }`}
            >
              <div
                className="closed-thing w-[90%] text-xl font-semibold alert alert-info
        shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <h3>Sorry recruitments are currently closed :(</h3>
                <p>
                  Follow our social media to get updates regarding recruitments
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-gray-700 outline-none block text-[40px] xl:text-[44px] font-bold mx-auto mb-3 w-full text-center">
                Recruitment Form
              </h2>
              <p className="text-center mb-7">
                Fill this form to apply to our club! We will get back to you
                after looking through your application via email or call!
              </p>
              <form
                name="form"
                className="w-full"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="flex flex-wrap">
                  {/* Name */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="name"
                    >
                      Name:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      name="Name"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="name"
                      placeholder="Name eg: Vishal Kumar Yadav"
                      {...register("name", {
                        required: "Name is required",
                        pattern: {
                          value: /^[A-Za-z ]+$/,
                          message: "Invalid name",
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  {/* Registration No */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="reg_no"
                    >
                      Registration No:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.reg_no ? "border-red-500" : ""
                      }`}
                      name="Registration No"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="reg_no"
                      placeholder="Registration No. eg: 21BCE1846"
                      {...register("reg_no", {
                        required: "Registration number is required",
                        pattern: {
                          value: /^(1|2)[0-9](B|M)[A-Z]{2}[0-9]{4}$/,
                          message: "Invalid register number",
                        },
                      })}
                    />
                    {errors.reg_no && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.reg_no.message}
                      </div>
                    )}
                  </div>
                  {/* VIT Email */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="vit_email"
                    >
                      VIT Email:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.vit_email ? "border-red-500" : ""
                      }`}
                      name="VIT Email"
                      disabled={recruiting === "Yes" ? false : true}
                      type="email"
                      id="vit_email"
                      placeholder="Email eg: shashank.sharma2022@vitstudent.ac.in"
                      {...register("vit_email", {
                        required: "Email is required",
                        pattern: {
                          // value:
                          //   /^[A-Za-z]+\.[A-Za-z]*2[0-9]{3}[A-Za-z]?@(vitstudent|vitchennai)\.ac\.in$/, // to validate the email
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.vit_email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.vit_email.message}
                      </div>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="phone_no"
                    >
                      Phone No:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.phone_no ? "border-red-500" : ""
                      }`}
                      name="Phone No"
                      disabled={recruiting === "Yes" ? false : true}
                      type="tel"
                      id="phone_no"
                      placeholder="Phone number eg: 8072XXXXXX"
                      {...register("phone_no", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone_no && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.phone_no.message}
                      </div>
                    )}
                  </div>
                  {/* Degree */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="degree"
                    >
                      Degree:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.degree ? "border-red-500" : ""
                      }`}
                      name="Degree"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="degree"
                      placeholder="Degree eg: B.Tech, B.SC, M.Tech etc"
                      {...register("degree", {
                        required: "Degree is required",
                        pattern: {
                          value: /^[A-Za-z. ]+$/,
                          message: "Invalid degree",
                        },
                      })}
                    />
                    {errors.degree && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.degree.message}
                      </div>
                    )}
                  </div>
                  {/* Branch */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="branch"
                    >
                      Branch:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <input
                      className={`form-control ${
                        errors.branch ? "border-red-500" : ""
                      }`}
                      name="Branch"
                      disabled={recruiting === "Yes" ? false : true}
                      type="text"
                      id="branch"
                      placeholder="Branch eg: CSE"
                      {...register("branch", {
                        required: "Branch is required",
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Invalid branch",
                        },
                      })}
                    />
                    {errors.branch && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.branch.message}
                      </div>
                    )}
                  </div>
                  {/* Department */}
                  <div className="mb-3 w-full md:w-1/2 px-2">
                    <label
                      htmlFor="department"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      Department:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <select
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.department ? "border-red-500" : ""
                      }`}
                      name="Department"
                      id="department"
                      disabled={recruiting === "Yes" ? false : true}
                      {...register("department", {
                        required: "Department is required",
                      })}
                    >
                      <option value="">Select a Department</option>
                      {!openDepartments ? (
                        <option>Loading...</option>
                      ) : (
                        openDepartments.map((dept) => (
                          <option value={dept.value} key={dept.value}>
                            {dept.title}
                          </option>
                        ))
                      )}
                      {/* <option value="competitive_programming">
                        Competitive Programming
                      </option>
                      <option value="web_development">Web Development</option>
                      <option value="design">Design</option>
                      <option value="marketing_and_outreach">
                        Marketing & Sponsorship
                      </option>
                      <option value="management">Event Management</option>
                      <option value="finance">Finance</option>
                      <option value="social_media_and_content">
                        Social Media & Content
                      </option>
                      <option value="projects">Projects</option> */}
                    </select>
                    {errors.department && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.department.message}
                      </div>
                    )}
                  </div>
                  {/* Management questions */}
                  {department === "management" && (
                    <Management
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {/* Social Media questions */}
                  {department === "social_media_and_content" && (
                    <SocialMedia
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {/* Web Development Questions */}
                  {department === "web_development" && (
                    <WebDevelopment
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {/* Design Questions */}
                  {department === "design" && (
                    <Design register={register} errors={errors} watch={watch} />
                  )}
                  {/* Finance Department Questions */}
                  {/* {department === "finance" && (
                    <Finance
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )} */}
                  {/* Competitive Programming questions */}
                  {department === "competitive_programming" && (
                    <CompetitiveProgramming
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {/* Marketing & outreach questions */}
                  {department === "marketing_and_outreach" && (
                    <MarketingOutreach
                      register={register}
                      errors={errors}
                      watch={watch}
                    />
                  )}
                  {/* Projects */}
                  {department === "projects" && (
                    <Projects register={register} errors={errors} />
                  )}
                  {/* Relavent Experience */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="experience"
                    >
                      Relevant Experience:{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <textarea
                      className="form-control"
                      disabled={recruiting === "Yes" ? false : true}
                      placeholder="Describe your experience in the department you wish to join and provide links to your work."
                      name="Relevant Experience"
                      id="experience"
                      rows="5"
                      {...register("experience", {
                        required: "This field is equired",
                      })}
                    />
                    {errors.experience && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.experience.message}
                      </div>
                    )}
                  </div>
                  {/* Why join this club */}
                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="whyJoin"
                    >
                      Why join this club?{" "}
                      <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
                    </label>
                    <textarea
                      className="form-control"
                      disabled={recruiting === "Yes" ? false : true}
                      placeholder="Write some reason for applying for this club"
                      name="Why Join This Club"
                      id="whyJoin"
                      rows="5"
                      {...register("whyJoin", {
                        required: "This field is equired",
                      })}
                    />
                    {errors.whyJoin && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.whyJoin.message}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  name="Submit"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={recruiting === "Yes" ? false : true}
                  className={`btnSubmit btn-primary ${
                    formFillLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Submit{" "}
                  {formFillLoading ? (
                    <FaSpinner className="ml-3 inline spinner text-center text-sm sm:text-sm" />
                  ) : (
                    ""
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinUs;
