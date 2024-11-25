
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL ||  'http://localhost:3000';


export const islogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
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