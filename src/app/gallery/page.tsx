import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryGid from "./gallery-grid";

type SearchResult = {
  public_id: string;
  tags: [];
};

const Gallery = async () => {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  console.log(result);

  return (
    <section className="h-full px-4 py-6 lg:px-8">
      <div className="flex-col flex justify-between">
        <div className="flex justify-between pb-6">
          <h1 className="font-bold text-4xl">Gallery</h1>
          <UploadButton />
        </div>

        <GalleryGid images={result.resources} />
      </div>
    </section>
  );
};

export default Gallery;
