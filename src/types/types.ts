export interface ICloudImage {
  publicId: string;
  tags: string[];
  onUnheart?: (public_id: string) => void
}

export interface SearchResult {
  public_id: string;
  tags: string[];
};