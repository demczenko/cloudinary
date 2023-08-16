import CloudImage from "./cloud-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

const Gallery = async () => {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(5)
    .execute()) as { resources: SearchResult[] };

  console.log(result);

  return (
    <section className="h-full px-4 py-6 lg:px-8">
      <div className="flex-col flex justify-between">
        <div className="flex justify-between pb-6">
          <h1 className="font-bold text-4xl">Gallery</h1>
          <UploadButton />
        </div>
        <div className="flex flex-wrap space-x-4 pb-4">
          {result.resources.map((image) => <CloudImage publicId={image.public_id} {...image} />)}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
