"use client";
import { MovieCard } from "./MovieCard";
import { MovieType } from "@/lib/types";
import Link from "next/link";
type Props = {
  movies: MovieType[];
  text: string;
  category: string;
};

export const MovieCardList = ({ movies, text, category }: Props) => {
  return (
    <div className="flex flex-col gap-3  ">
      <div className="flex justify-between px-5">
        <h1 className="text-2xl font-semibold mb-5 "> {text} </h1>
        <Link  href={`/category/${category}`}>see more →</Link>
      </div>

      <div className="grid gap-10 grid-cols-5  ">
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
