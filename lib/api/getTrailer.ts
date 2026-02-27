import { axiosInstance } from "../utils";

type VideoType = {
  key: string;
  type: string;
  site: string;
};

export const getTrailer = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/videos?language=en-US`,
    );

    const videos: VideoType[] = response.data.results;

    const trailer = videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error("Failed to fetch trailer:", error);
    return null;
  }
};
