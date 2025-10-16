"use client";
import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
type Props = {
  movie: MovieType;
  containercss: string;
  imgclassname: string;
};
export const MovieCard = ({ movie, containercss, imgclassname }: Props) => {
  const { title, vote_average, poster_path, id } = movie;
  console.log(movie);
  const router = useRouter();

  const HandleClick = () => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      onClick={HandleClick}
      className={cn(
        "overflow-hidden rounded-2xl hover:shadow-2xl  duration-100",
        containercss
      )}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Poster of ${title}`}
        className={cn(imgclassname)}
      />
      <div className="bg-gray-300 h-50 ">
        <div className="flex items-center  text-black gap-2">
          <img src="/star.svg" alt="Star" className="w-5" />
          <p>
            <span>{vote_average}</span>/10
          </p>
        </div>
        <p className="text-black  text-sm font-bold">{title}</p>
      </div>
    </div>
  );
};
