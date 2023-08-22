"use client";

import Grid from "@/components/grid";
import CloudImage from "./cloud-image";
import { SearchResult } from "@/types/types";

const GalleryGid = ({ images }: { images: SearchResult[] }) => {
  return (
    <Grid
      getImageComponent={(image) => {
        return <CloudImage tags={image.tags} publicId={image.public_id} />;
      }}
      images={images}
    />
  );
};

export default GalleryGid;
