import axios, { AxiosResponse } from "axios";
import { ANIME_URL, SERVER_URL } from "../service/config";
import { AUTH_ERROR_MESSAGES, ILoginPayload, ILoginResponse, ILoginResult } from "../interface/auth";



//  ======================================= AUTHORIZATION START  ============================================
 
export const IsLogin = async (payload:ILoginPayload ): Promise<ILoginResult> => {
  try {
    const response: AxiosResponse<ILoginResponse>=
    await axios.post(`${SERVER_URL}/user/login`,payload);

    if(response.status === 201){
      return{
        success:true,
        data: response.data,
      };
    }

    return{
      success:false,
      error: `Unexpected response status: ${response.status} `,
    }
  } 
  catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server returned an error
        return {
          success: false,
          error: error.response.data.message || AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
        };
      } else if (error.request) {
        // No response received
        return {
          success: false,
          error: AUTH_ERROR_MESSAGES.NETWORK_ERROR,
        };
      }
    }
  }

return{
  success:false,
   error: AUTH_ERROR_MESSAGES.UNEXPECTED_ERROR,
}
}

// Register APi
export const registerUser = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post(`${SERVER_URL}/user/register`, {
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


//  ======================================= AUTHORIZATION END  ============================================



//  ======================================= ANIME API START  ============================================


// Anime Fetching api

export const FetchAnime = async() =>{
  try {
    const response = await axios.get( `${ANIME_URL}/zoro/recent-episodes`);
    return response.data;
  } catch (error) {
    console.log(error, "something went wrong");
    throw error;
  }
}

//  ======================================= ANIME API END  ============================================
