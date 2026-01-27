"use client";

import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  buttoncss: string;
  trailerUrl: string | null;
};

export const TrailerModals = ({ text, buttoncss, trailerUrl }: Props) => {
  if (!trailerUrl) return null;

  return (
    <Dialog>
      <DialogTrigger className={cn("text-white", buttoncss)}>
        {text}
      </DialogTrigger>

      <DialogContent
        className="
          max-w-3xl
          
          w-screen
          h-120

          bg-black
          border-none
          p-0
          flex
          items-center
          justify-center
        "
      >
        {/* Accessibility (hidden visually) */}
        <DialogTitle className="sr-only">Movie Trailer</DialogTitle>
        <DialogDescription className="sr-only">
          Watch the official trailer of this movie
        </DialogDescription>

        {/* 16:9 video container */}
        <div className="relative w-[90vw] max-w-5xl aspect-video">
          <ReactPlayer src={trailerUrl} width="100%" height="100%" controls />
        </div>
      </DialogContent>
    </Dialog>
  );
};
