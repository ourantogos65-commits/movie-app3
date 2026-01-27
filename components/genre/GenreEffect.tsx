import { MovieCard } from "../movielist/MovieCard";
import { MovieType } from "@/lib/types";
import { movieGenres } from "@/lib/utils";
import { GenreList } from "./GenreList";
type Props = {
  genreName: string;
  movies: MovieType[];
};
export const GenreEffect = ({ genreName, movies }: Props) => {
  return (
    <div className="mt-10 w-full ">
      <div className="w-full flex flex-col gap-10  items-center justify-center ">
        <h1 className="text-3xl font-bold flex justify-start w-[1280px]">
          Search filter
        </h1>
        <div className="flex gap-[16px] justify-between   w-[1280px] ">
          <div>
            <h2 className="text-black  font-medium mr-4 text-2xl">Genres</h2>
            <p className="text-gray-500 mb-3">see list of movies by genre</p>
            <div className="w-[407px] flex flex-wrap">
              <GenreList />
            </div>
          </div>

          <div>
            <h1 className="text-md mb-3 ml-15 flex gap-2  font-extra-bold ">
              <span>{movies.results?.length}</span>titles in "{genreName}"
            </h1>
            <div className="w-[806px] flex-wrap  gap-3 justify-center flex">
              {movies.results?.splice(0, 12).map((movie: MovieType) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  imgclassname="w-full h-[244px]"
                  containercss="w-[165px] h-[331px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
