import { axiosInstance } from "../utils";
export const getMovies = async (category: string) => {
  console.log("TOKEN:", process.env.NEXT_PUBLIC_TMDB_API_TOKEN);
  try {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US`,
    );
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch movie by category", error);
  }
};
