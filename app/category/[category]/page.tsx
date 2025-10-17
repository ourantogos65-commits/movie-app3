// "use client";
// import { GenreList } from "@/components/genre/GenreList";
// import { useState, useEffect } from "react";
// import { getGenreList } from "@/lib/api/getGenresList";

// const Category = () => {
//   const [genres, setGenres] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const data = await getGenreList();
//       setGenres(data);
//     };
//     fetchGenres();
//   }, []);

//   return (
//     <div className="w-[577px]  h-[250px]">
//       <div className="flex  ml-5 justify-between w-full">
//         <p className="text-black  text-2xl">Genres</p>
//       </div>
//       <div className="gap-2 w-full flex-wrap flex p-[8px]">
//         {genres.map((genre) => (
//           <div key={genre.id}>
//             <div className="pb-2">
//               <button className="border  border-gray-200 hover:bg-gray-300 flex gap-0.5  justify-center px-1.5 rounded-lg text-black  font-semibold">
//                 <p key={genre.id}>{genre.name}</p>
//                 <img src="/chevron-right.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Category;
import { getMovies } from "@/lib/api/getMovies";
import { MovieCard } from "@/components/movielist/MovieCard";

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  const movies = await getMovies(category);
  return (
    <main className="px-6 py-10">
      {/* <h1 className="text-2xl font-bold text-white mb-6 capitalize">
        {category}
      </h1> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            containercss=""
            imgclassname=""
          />
        ))}
      </div>
    </main>
  );
}
