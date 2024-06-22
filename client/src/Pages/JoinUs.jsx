import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAsterisk, FaSpinner } from "react-icons/fa";
import "../Styles/JoinUs/JoinUs.css";
import { areWeRecuriting } from "../api/apiCall";
import { ErrorBox } from "../Utility";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import axios from "axios";

const JoinUs = () => {
  const [recruiting, setRecruiting] = useState("No"); // either "Yes" or "No"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // to check whether we are recruiting or not
  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const data = await areWeRecuriting();
      if (data.error) {
        setError(true);
      } else {
        setRecruiting(data[0].recruiting);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const scriptURL =
      "https://sheet.best/api/sheets/c9e1871a-2173-4294-8c92-877ab8a68d16";
    axios
      .post(scriptURL, data)
      .then((response) => {
        // Show success toast notification
        toast.success("Form Submitted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        reset();
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // Watch the regNo field to convert it to uppercase
  const regNo = watch("reg_no");
  const department = watch("department");

  useEffect(() => {
    setValue("reg_no", regNo?.toUpperCase());
  }, [regNo, setValue]);

  return (
    <>
      <ToastContainer />
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
          <div className="box">
            <div className={recruiting === "No" ? "blur" : ""}>
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
                      type="text"
                      id="reg_no"
                      placeholder="Registration No. eg: 21BCE1846"
                      {...register("reg_no", {
                        required: "Registration number is required",
                        pattern: {
                          value: /^(1|2)[0-9](B)[A-Z]{2}[0-9]{4}$/,
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
                      type="email"
                      id="vit_email"
                      placeholder="VIT Email ID"
                      {...register("vit_email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Za-z]+\.?[A-Za-z0-9]+[0-9]{4}[A-Za-z]*@vitstudent\.ac\.in$/,
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
                      {...register("department", {
                        required: "Department is required",
                      })}
                    >
                      <option value="">Select A Department</option>
                      <option value="competitive_programming">
                        Competitive Programming
                      </option>
                      <option value="web_development">Web Development</option>
                      <option value="design">Design</option>
                      <option value="marketing_and_outreach">
                        Marketing & Outreach
                      </option>
                      <option value="management">Management</option>
                      <option value="finance">Finance</option>
                      <option value="video_editing">Video Editing</option>
                      <option value="social_media_and_content_writing">
                        Social Media & Content Writing
                      </option>
                    </select>
                    {errors.department && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.department.message}
                      </div>
                    )}
                  </div>

                  {(department === "marketing_and_outreach" ||
                    department === "management") && (
                    <div className="mb-3 w-full md:w-1/2 px-2">
                      <label
                        className="text-sm font-medium text-gray-700 flex items-center"
                        htmlFor="cgpa"
                      >
                        CGPA:{" "}
                        <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
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
                        <div className="text-red-500 text-sm mt-1">
                          {errors.cgpa.message}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mb-3 w-full px-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="experience"
                    >
                      Relevant Experience:
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Write about your experience in the department which you want to join"
                      name="Relevant Experience"
                      id="experience"
                      rows="5"
                      {...register("experience")}
                    />
                  </div>
                </div>
                <button
                  name="Submit"
                  type="submit"
                  onClick={handleSubmit}
                  className="btnSubmit btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            {recruiting === "No" ? (
              <div className="closed-thing alert alert-info">
                <h3>Sorry recruitments are currently closed :(</h3>
                <p>
                  Follow our social media to get updates regarging recuritments
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default JoinUs;
