export interface IRegisterPayload {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ILoginResult {
  success: boolean;
  data?: ILoginResponse;
  error?: string;
}

export const AUTH_ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password.",
  NETWORK_ERROR: "Network error occurred. Please try again later.",
  UNEXPECTED_ERROR: "An unexpected error occurred. Please try again.",
};
