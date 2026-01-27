import { MovieType } from "../types";
import { axiosInstance } from "../utils";

export const getSimilarMovie = async (searchValue: string, page = 1) => {
  try {
    const response = await axiosInstance.get(
      `/search/movie?query=${encodeURIComponent(searchValue)}&language=en-US&page=${page}`
    );
    return response.data.results as MovieType[];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return []; 
  }
};
