
import axios from 'axios';


const API_URL = 'https://anime-truce-backend.onrender.com ';


export const isLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post("https://anime-truce-backend.onrender.com/user/login", {
      email,
      password,
    });

    if (response.status === 201) {
      return { success: true, data: response.data };
    }
    
    // Return error if response status is not 201
    return { success: false, error: "Unexpected response status" };

  } catch (error) {
    // Handle error cases
    return { success: false, error: "Invalid Email & Password!" };
  }
};

  export const isRegister = async (email: string, password: string, confirmPassword: string) => {
    try {
      const response = await axios.post(`${API_URL}/user/register`, { email, password, confirmPassword });
      return response.data;
    } catch (error) {
      throw error;
    }
  };