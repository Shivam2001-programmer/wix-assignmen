import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  console.log(response.data);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  if (response.status === 200) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

// export const editProfile = async (formData) => {
//   const config = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   };

//   try {
//     const response = await axios.post("/api/editProfile", formData, config);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error updating the profile!", error);
//     throw error;
//   }
// };

export const editProfile = (formData) => {
  return axios.post("/api/profile/edit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
