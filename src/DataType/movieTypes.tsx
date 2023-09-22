export interface Movie {
  id: number;
  title: string;
  genre: string;
  imagesAndText: { posterURL: string; text: string }[];
  IndividualMoviePage: string;
  Page: string; // Use 'Page' with a capital 'P'
}
