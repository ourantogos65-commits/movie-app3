import { MovieCardList } from "@/components/movielist/MovieCardList";
import { Navigation } from "@/components/navbar/Navigation";
import { getMovies } from "@/lib/api/getMovies";
import { CarouselContainer } from "@/components/movielist/CarouselContainer";
import { getGenreList } from "@/lib/api/getGenresList";
import { Loader } from "@/components/Loader";
async function Home() {
  const nowplayingMovieData = await getMovies("now_playing");
  const upcomingMovieData = await getMovies("upcoming");
  const popularMovieData = await getMovies("popular");
  const top_ratedMovieData = await getMovies("top_rated");
  const movie = await getGenreList();
  console.log(movie);
  // if (!movie) {
  //   return <Loader />;
  // }
  return (
    <div className=" flex flex-col gap-20 w-[1440px] mx-auto">
     
      <div className=" w-full flex flex-col ">
        <CarouselContainer movies={nowplayingMovieData} />
      </div>
      <MovieCardList
        text="Upcoming"
        movies={upcomingMovieData}
        category="upcoming"
      />
      <MovieCardList
        text="Popular"
        movies={popularMovieData}
        category="popular"
      />
      <MovieCardList
        text="Now Playing"
        movies={top_ratedMovieData}
        category="now_playing"
      />
    </div>
  );
}
export default Home;
