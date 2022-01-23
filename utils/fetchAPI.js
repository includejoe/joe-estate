import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "25c6afbd12msh71c84a24745d28ap16eb45jsn8c6a6acca6a6",
    },
  });

  return data;
};
