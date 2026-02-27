import { MovieCard } from "@/components/movielist/MovieCard";
import { getMovies } from "@/lib/api/getMovies";
import { MovieType } from "@/lib/types";

type Props = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page = "1" } = await searchParams;

  const movies = await getMovies(category);

  if (!movies || movies.length === 0) {
    return (
      <div className="px-6 py-20 text-center text-gray-500">
        No movies found 😢
      </div>
    );
  }

  return (
    <div className="px-10 py-10 w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold mb-8 capitalize">{category}</h1>

      <div className="grid grid-cols-5 gap-10">
        {movies.map((movie: MovieType) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            containercss="w-[229px] h-[439px]"
            imgclassname="h-[340px] w-full"
          />
        ))}
      </div>
    </div>
  );
}
