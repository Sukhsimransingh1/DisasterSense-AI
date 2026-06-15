import axios from "axios";

const API_URL =  import.meta.env.VITE_API_URL;

export const loginUser = async (
  email: string,
  password: string
) => {

  const response = await axios.post(
    `${API_URL}/auth/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  await axios.post(`${API_URL}/auth/register`, {
    full_name: fullName,
    email,
    password,
  });

  // After registration, log the user in automatically
  return loginUser(email, password);
};