import { axiosInstance } from "@/lib/utils";

export const getCredits = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/credits?language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
