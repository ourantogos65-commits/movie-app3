"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../ui/mode-toggle";
import { Input } from "../ui/input";
import { GenreList } from "../genre/GenreList";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MovieType } from "@/lib/types";
import { getSimilarMovie } from "@/lib/api/SearchMovies";

export const Navigation = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const data = await getSimilarMovie(query);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <nav className="mt-5 w-full mb-10 h-[52px] flex justify-center items-center">
      <div className="flex w-full justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/film.svg" alt="Logo" className="w-8 h-8" />
          <h2 className="text-indigo-700 text-lg font-bold">Movie Z</h2>
        </Link>

        <div className="flex items-center gap-8 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 gap-1 flex py-1 bg-background rounded-md shadow hover:bg-gray-100 transition">
              <span className="mt-1 text-auto ">
                <ChevronDown size={16} strokeWidth={2} />
              </span>
              Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4">
              <DropdownMenuLabel>
                <h1 className="text-2xl">Genres</h1>
                <p className="text-gray-600 text-sm">
                  See list of movies by genre
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem>
                <GenreList />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative w-80 ">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies..."
            />

            {loading && (
              <div className="absolute z-10 top-full left-0 mt-2 w-full bg-white rounded-md shadow p-5 py-5 text-sm">
                Loading...
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="absolute  bg-white mt-5 w-[560px]  max-h-96 overflow-y-scroll rounded-md shadow-lg p-2  z-20">
                {results.map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      router.push(`/search?q=${query}`);
                      setQuery("");
                      setResults([]);
                    }}
                    className="flex  gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                          : "/no-image.png"
                      }
                      className="w-[67px] h-[100px] rounded object-cover"
                    />
                    <div className="flex flex-col justify-between w-full p-1">
                      <div>
                        <span className="text-md  font-bold">
                          {movie.title}
                        </span>
                        <p className="text-sm font-bold">
                          ⭐️ {movie.vote_average}{" "}
                          <span className="text-gray-600 text-xs">/10</span>
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className="text-sm font-sans">
                          {movie.release_date}
                        </p>
                        <p className="text-sm ">See more →</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};
