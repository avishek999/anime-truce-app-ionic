
import axios from 'axios';


const API_URL = "https://anime-truce-backend.onrender.com";



// Log In Api
export const isLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    });

    if (response.status === 201) {
      return { success: true, data: response.data };
    }
    
    
    return { success: false, error: "Unexpected response status" };

  } catch (error) {
  
    return { success: false, error: "Invalid Email & Password!" };
  }
};


// Register APi
export const registerUser = async (email: string, password: string, confirmPassword: string) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, {
      email,
      password,
      confirmPassword,
    });
   console.log(response);
   
    return response.data; 
  } catch (error: any) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};