import { getMovieById } from "@/lib/api/getMovieByid";
import { MovieDetail } from "@/components/moviedetail/MovieDetail";
import { getSimilarMovie } from "@/lib/api/getSimilarMovies";
import { SimilarMovies } from "@/components/moviedetail/SimiliarMovies";
import { Navigation } from "@/components/navbar/Navigation";
import { getCredits } from "@/lib/api/getCredits";
async function DetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id);
  const similarMovieData = await getSimilarMovie(params.id);
  const credits = await getCredits(params.id);
  return (
    <div>
      <Navigation />
      <MovieDetail credits={credits} movie={movie} />;
      <SimilarMovies text="More Like This" movies={similarMovieData} />
    </div>
  );
}

export default DetailPage;
