import { GenreList } from "@/components/genre/GenreList";
import { MovieCard } from "@/components/movielist/MovieCard";
import { getSimilarMovie } from "@/lib/api/SearchMovies";
import { MovieType } from "@/lib/types";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  let movies: MovieType[] = [];

  if (query) {
    movies = (await getSimilarMovie(query)) || [];
  }

  return (
    <div className="mt-20 w-full ">
      <div className="w-[1440px] mx-auto">
        <p className="text-3xl mb-8 ml-11 font-bold"> Search results</p>

        <p className="font-bold ml-11 mb-6 ">
          {query && `${movies.length}  results for "${query}"`}
        </p>

        <div className="w-full flex flex-col gap-10 items-center justify-center ">
          <div className="flex gap-[16px] justify-between w-full">
            <div className="w-[806px] flex-wrap gap-3 justify-center flex">
              {movies.slice(0, 5).map((movie: MovieType) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  imgclassname="w-full h-[244px]"
                  containercss="w-[165px] h-[331px]"
                />
              ))}
            </div>

            <div className="w-[407px] flex flex-wrap">
              <GenreList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
