"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import CloudImage from "../gallery/cloud-image";
import Grid from "@/components/grid";

type SearchResult = {
  public_id: string;
  tags: [];
};

interface IFavoriteList {
  result: {
    resources: SearchResult[];
  };
}

const FavoritesList = ({ result }: IFavoriteList) => {
  const [resouces, setRosources] = useState(result.resources);

  useEffect(() => {
    setRosources(result.resources);
  }, [result.resources]);

  return (
    <Grid
      getImageComponent={(image) => {
        return (
          <CloudImage
            tags={image.tags}
            publicId={image.public_id}
            onUnheart={(unheartedResourceId) =>
              setRosources((curr) => {
                return curr.filter(
                  (item) => item.public_id !== unheartedResourceId
                );
              })
            }
          />
        );
      }}
      images={resouces}
    />
  );
};

export default FavoritesList;
