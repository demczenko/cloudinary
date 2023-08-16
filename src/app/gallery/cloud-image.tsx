"use client";
import { CldImage } from "next-cloudinary";

const CloudImage = ({ publicId, ...props }: { publicId: string }) => {
  return (
    <div className="space-y-3 w-[250px]">
      <CldImage
        width="400"
        height="300"
        {...props}
        src={publicId}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
};

export default CloudImage;
