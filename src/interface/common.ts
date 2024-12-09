export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password.",
  NETWORK_ERROR: "Network error occurred. Please try again later.",
  UNEXPECTED_ERROR: "An unexpected error occurred. Please try again.",
};
export interface IApiResponse<IData> {
  message: string;
  data: [IData];
  results: [];
}
