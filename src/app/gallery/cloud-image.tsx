"use client";
import { Heart } from "@/components/svgs";
import { CldImage } from "next-cloudinary";
import { useTransition } from "react";
import { MarkAsFavoriteAction } from "./actions";

const CloudImage = ({ publicId, tags, path }: { publicId: string; tags: string[]; path: string }) => {
  const [transition, setTransition] = useTransition();
  const isFavorite = tags.includes("favorite")

  return (
    <div className="space-y-2 w-[250px] relative">
      <CldImage
        width="400"
        height="300"
        src={publicId}
        sizes="100vw"
        alt="Description of my image"
      />
      {isFavorite ? (
        <Heart
          fill="white"
          onClick={() =>
            setTransition(() => {
              MarkAsFavoriteAction(publicId, false, path);
            })
          }
          className="absolute top-2 right-2 hover:text-red-400 cursor-pointer transition-colors scale-150"
        />
      ) : (
        <Heart
          onClick={() =>
            setTransition(() => {
              MarkAsFavoriteAction(publicId, true, path);
            })
          }
          className="absolute top-2 right-2 hover:text-red-400 cursor-pointer transition-colors scale-150"
        />
      )}
    </div>
  );
};

export default CloudImage;