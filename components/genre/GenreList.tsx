"use client";
import { useEffect, useState } from "react";
import { GenreType } from "@/lib/types";

import Link from "next/link";
import { getGenreList } from "@/lib/api/getGenresList";
import { ChevronDown, ChevronLeft, ChevronRightIcon } from "lucide-react";

export const GenreList = () => {
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenreList();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  return (
    <div className="w-[577px]  h-[250px]">
      <div className="flex  ml-5 justify-between w-full"></div>
      <div className="gap-2 w-full flex-wrap flex p-[8px]">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre?genreId=${genre.id}&genreName=${genre.name}`}
          >
            <div className="pb-2">
              <button className="border  border-gray-200 hover:bg-gray-300 flex gap-0.5  justify-center px-1.5 rounded-lg text-auto  font-semibold">
                <p key={genre.id}>{genre.name}</p>
                <ChevronRightIcon className="pt-1" size={16} strokeWidth={2} />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
