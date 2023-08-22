
type SearchResult = {
  public_id: string;
  tags: [];
};

const Grid = ({ images, getImageComponent }: { images: SearchResult[], getImageComponent: (image: SearchResult) => React.ReactNode }) => {
  function getColumn(colIndex: number) {
    return images.filter((resource, idx) => idx % 4 === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumn(0), getColumn(1), getColumn(2), getColumn(3)].map(
        (col, index) => {
          return (
            <div className="flex flex-col gap-4">
              {col.map(getImageComponent)}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Grid;
