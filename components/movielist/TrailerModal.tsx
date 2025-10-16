"use client";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
type Props = {
  text: string;
  buttoncss: string;
  trailerUrl: string;
};
export const TrailerModals = ({ text, buttoncss, trailerUrl }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className={cn("  text-black bg-white", buttoncss)}>
        <p>{text}</p>
      </DialogTrigger>
      <DialogContent className="w-[900px] h-[500px] ">
        <div className="w-[900px] h-full">
          <ReactPlayer url={trailerUrl} width="100%" height="100%" controls />
        </div>
      </DialogContent>
    </Dialog>
  );
};
