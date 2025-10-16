"use client";
import { MovieCard } from "./MovieCard";
import { MovieType } from "@/lib/types";

type Props = {
  movies: MovieType[];
  text: string;
};

export const MovieCardList = ({ movies, text }: Props) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-between">
        <h1 className="text-4xl text-bold "> {text} 🎥</h1>
        <p>see more 🍿</p>
      </div>

      <div className="flex gap-10 flex-wrap">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            imgclassname="h-[340px] w-full "
            containercss="w-[229px] h-[439px]"
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
