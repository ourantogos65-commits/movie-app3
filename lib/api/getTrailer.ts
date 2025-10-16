// import { axiosInstance } from "@/lib/utils";
// import { MovieType } from "@/lib/types";

// export const getVideo = async (id: string) => {
//   try {
//     const response = await axiosInstance.get(
//       `/movie/${id}/videos?language=en-US`
//     );
//  const
//   } catch (error) {
//     console.error("Failed to fetch movie by ID:", error);
//   }
// };
import { axiosInstance } from "@/lib/utils";

export const getTrailer = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/videos?language=en-US`
    );
    const videos = response.data.results;

    const trailer = videos.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error("Failed to fetch trailer:", error);
    return null;
  }
};
