import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const askAssistant = async (
  question: string,
  image?: File | null
) => {
  const formData = new FormData();

  formData.append("question", question);

  if (image) {
    formData.append("image", image);
  }
  console.time("Assistant API");
  const response = await API.post(
    "/assistant/",
    formData
  );
  console.timeEnd("Assistant API");

  return response.data;
};