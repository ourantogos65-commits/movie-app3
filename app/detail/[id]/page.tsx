import { getMovieById } from "@/lib/api/getMovieByid";
import { MovieDetail } from "@/components/moviedetail/MovieDetail";
import { getSimilarMovie } from "@/lib/api/getSimilarMovies";
import { SimilarMovies } from "@/components/moviedetail/SimiliarMovies";
import { Navigation } from "@/components/navbar/Navigation";
import { getCredits } from "@/lib/api/getCredits";
import { getTrailer } from "@/lib/api/getTrailer";
import { Footer } from "@/components/footer/Footer";
import { getMovies } from "@/lib/api/getMovies";

async function DetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id);
  const similarMovieData = await getSimilarMovie(params.id);
  const credits = await getCredits(params.id);
  const trailerUrl = await getTrailer(params.id);

  if (trailerUrl) {
    console.log("Trailer URL:", trailerUrl);
  } else {
    console.log("Trailer not available for this movie.");
  }

  return (
    <div>
     
      <div className="flex flex-col gap-10">
        <MovieDetail
          credits={credits}
          movie={movie}
          trailerUrl={trailerUrl}
        />

        <SimilarMovies text="More Like This" movies={similarMovieData} />

      
      </div>
    </div>
  );
}

export default DetailPage;
