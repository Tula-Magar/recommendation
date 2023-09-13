export interface Movie {
  id: number;
  title: string;
  genre: string;
  imagesAndText: { posterURL: string; text: string }[];
  // Add other properties if needed
}
