export interface MovieCardData {
    title: string;
    releaseDate: string;
    description: string;
    image: string;
}
export interface RawMoviesData{
    results: RawMovieData[];
    page: number;
}
export interface RawMovieData {
    id: number;
      title: string;
      release_date: string;
      overview?: string;
      poster_path?: string;
  
  }