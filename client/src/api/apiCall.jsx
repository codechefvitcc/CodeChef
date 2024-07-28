import { commonrequest } from "./expressAPICallConfig";
import { BACKEND_URL } from "./Helper";

import { client } from "./apiConfig";

// ***********************SANITY APIs STARTS HERE****************************
// Getting All Testimonials from sanity backend
export const getAllTestimonials = async () => {
  const query = '*[_type == "testimonials"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching testimonials: ", error);
    return { error: "Failed to fetch testimonials" };
  }
};

// Getting All Departments from sanity backend
export const getAllDepartments = async () => {
  const query = '*[_type == "departments"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching departments: ", error);
    return { error: "Failed to fetch departments" };
  }
};

// Getting All Members Of Each Department from sanity backend
export const getAllMembers = async () => {
  const query = '*[_type == "departmentMembers"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching members: ", error);
    return { error: "Failed to fetch members" };
  }
};

// Getting All Leads from sanity backend
export const getAllLeads = async () => {
  const query = '*[_type == "clubLeads"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching leads: ", error);
    return { error: "Failed to fetch leads" };
  }
};

// Getting All Presidents from sanity backend
export const getAllPresidents = async () => {
  const query = '*[_type == "presidentTestimonials"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching presidents: ", error);
    return { error: "Failed to fetch presidents" };
  }
};

// Getting All Blogs from sanity backend
export const getAllBlogs = async () => {
  const query = '*[_type == "blogs"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching blogs: ", error);
    return { error: "Failed to fetch blogs" };
  }
};

// Checking our Recuritement status from sanity backend
export const areWeRecuriting = async () => {
  const query = '*[_type == "joinus"]';
  try {
    const response = await client.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error fetching members: ", error);
    return { error: "Failed to fetch members" };
  }
};

// ***********************SANITY APIs ENDS HERE*****************************

// ***********************EXPRESS APIs STARTS HERE**************************

// **************************** Contact Us Handling *************************

// getting all the emails from the google sheet
export const getAllContactUsEmails = async () => {
  return await commonrequest(
    "GET",
    `${BACKEND_URL}/api/v1/contact-us/read/emails`
  );
};

// adding new email to the google sheet
export const addContactUsEmail = async (data) => {
  return await commonrequest(
    "POST",
    `${BACKEND_URL}/api/v1/contact-us/add/email`,
    data
  );
};


// ****************************** Join Us Handling ****************************

// adding new recruite's data in the join us google sheet
export const addJoinUsData = async (data) => {
  return await commonrequest(
    "POST",
    `${BACKEND_URL}/api/v1/join-us/add/data`,
    data
  );
};

// getting all the recruites data from the google sheet
export const getAllJoinUsData = async () => {
  return await commonrequest(
    "GET",
    `${BACKEND_URL}/api/v1/join-us/read/all-data`
  );
};

export const sendWhatsAppGroupJoinLink = async (data) => {
  return await commonrequest(
    "POST",
    `${BACKEND_URL}/api/v1/join-us/send-group-link`,
    data
  );
};