"use client";
import { Heart } from "@/components/svgs";
import { CldImage } from "next-cloudinary";
import { useEffect, useState, useTransition } from "react";
import { MarkAsFavoriteAction } from "./actions";
import { ImageMenu } from "@/components/image-menu";
import { ICloudImage } from "@/types/types";



const CloudImage = ({ publicId, tags, onUnheart }: ICloudImage) => {
  const [transition, setTransition] = useTransition();
  const [isFavorited, setIsFavorited] = useState(tags.includes("favorite"));

  console.log(tags.includes("favorite"));

  return (
    <div className="space-y-2 w-[250px] relative">
      <CldImage
        width="400"
        height="300"
        src={publicId}
        sizes="100vw"
        alt="Description of my image"
      />
      {isFavorited ? (
        <Heart
          fill="white"
          onClick={() => {
            onUnheart && onUnheart(publicId);
            setIsFavorited(false);
            setTransition(() => {
              MarkAsFavoriteAction(publicId, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-400 cursor-pointer transition-colors scale-150"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            setTransition(() => {
              MarkAsFavoriteAction(publicId, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-400 cursor-pointer transition-colors scale-150"
        />
      )}
      <ImageMenu public_id={publicId} tags={tags} />
    </div>
  );
};

export default CloudImage;
