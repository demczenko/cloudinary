"use client"

import Grid from "@/components/grid";
import CloudImage from "./cloud-image";

type SearchResult = {
  public_id: string;
  tags: [];
};

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
