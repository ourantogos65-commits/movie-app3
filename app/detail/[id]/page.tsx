import { getMovieById } from "@/lib/api/getMovieByid";
import { MovieDetail } from "@/components/moviedetail/MovieDetail";
import { getSimilarMovie } from "@/lib/api/getSimilarMovies";
import { SimilarMovies } from "@/components/moviedetail/SimiliarMovies";
import { getCredits } from "@/lib/api/getCredits";
import { getTrailer } from "@/lib/api/getTrailer";

async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const movie = await getMovieById(id);
  const similarMovieData = await getSimilarMovie(id);
  const credits = await getCredits(id);
  const trailerUrl = await getTrailer(id);

  if (trailerUrl) {
    console.log("Trailer URL:", trailerUrl);
  } else {
    console.log("Trailer not available for this movie.");
  }

  return (
    <div>
      <div className="flex flex-col gap-10">
        <MovieDetail credits={credits} movie={movie} trailerUrl={trailerUrl} />
        <SimilarMovies text="More Like This" movies={similarMovieData} />
      </div>
    </div>
  );
}

export default DetailPage;
