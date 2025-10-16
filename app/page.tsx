import { MovieCardList } from "@/components/movielist/MovieCardList";
import { Navigation } from "@/components/navbar/Navigation";
import { getMovies } from "@/lib/api/getMovies";
import { CarouselContainer } from "@/components/movielist/CarouselContainer";

async function Home() {
  const nowplayingMovieData = await getMovies("now_playing");
  const upcomingMovieData = await getMovies("upcoming");
  const popularMovieData = await getMovies("popular");
  const top_ratedMovieData = await getMovies("top_rated");

  return (
    <div className="mt-10 flex flex-col gap-20">
      <div className="justify-center  flex items-center">
        <Navigation />
      </div>
      <div className="mt-10 w-full flex flex-col ">
        <CarouselContainer movies={nowplayingMovieData} />
      </div>
      <MovieCardList text="Upcoming" movies={upcomingMovieData} />
      <MovieCardList text="Popular" movies={popularMovieData} />
      <MovieCardList text="Now Playing" movies={top_ratedMovieData} />
    </div>
  );
}

export default Home;
