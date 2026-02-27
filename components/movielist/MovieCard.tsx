"use client";
import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Star } from "lucide-react";

interface Props {
  movie: MovieType;
  containercss: string;
  imgclassname: string;
}
export const MovieCard = ({ movie, containercss, imgclassname }: Props) => {
  const { title, vote_average, poster_path, id } = movie;
  const [star, setStar] = useState(false);
  console.log(movie);

  const HandlChangeStar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStar(!star);
  };
  const router = useRouter();
  const HandleClick = () => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      onClick={HandleClick}
      className={cn(
        "overflow-hidden rounded-2xl hover:shadow-2xl  duration-100",
        containercss,
      )}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Poster of ${title}`}
        className={cn(imgclassname)}
      />
      <div className=" bg-gray-300 dark:bg-gray-600 h-50 p-2 ">
        <div className="flex items-center  text-auto gap-2">
          <Star
            onClick={HandlChangeStar}
            className={cn(
              "w-5 cursor-pointer",
              star ? "text-yellow-400" : "text-gray-400",
            )}
          />
          {/* <img src="/star.svg" alt="Star" className="w-5" /> */}
          <p>
            <span>{vote_average}</span>/10
          </p>
        </div>
        <p className="text-auto  text-sm font-bold">{title}</p>
      </div>
    </div>
  );
};
