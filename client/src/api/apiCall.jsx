import { client } from "./apiConfig";

// Getting All Testimonials
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

// Getting All Departments
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

// Getting All Members Of Each Department
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

// Checking our Recuritement status
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
