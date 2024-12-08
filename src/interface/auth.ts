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

