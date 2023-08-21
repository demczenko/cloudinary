import ForceRefresh from "@/components/force";
import CloudImage from "../gallery/cloud-image";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
  tags: []
};

const Favorites = async () => {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field('tags')
    .max_results(5)
    .execute()) as { resources: SearchResult[] };

  console.log(result);

  return (
    <section className="h-full px-4 py-6 lg:px-8">
      <ForceRefresh />
      <div className="flex-col flex justify-between">
        <div className="flex justify-between pb-6">
          <h1 className="font-bold text-4xl">Favorites</h1>
        </div>
        <div className="flex flex-wrap space-x-4 pb-4">
          {result.resources.map((image) => <CloudImage path="/favorites" tags={image.tags} publicId={image.public_id} />)}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
