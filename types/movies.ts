
export interface MovieCardData {
    title: string;
    releaseDate: string;
    description: string;
    img: string;
}
export interface RawMoviesData{
    results: RawMoviesResultsData[];
    page: number;
}
export interface RawMoviesResultsData {
    id: number;
      title: string;
      release_date: string;
      overview?: string;
      poster_path?: string;
}
export interface MovieData {
    id: number;
    title: string;
    releaseDate: string;
    img: string;
    description: string;
    genres: string[];
    rating: number;
    voteCount: number;
    director: string;
    cast: CastMemberData[];
}

export interface CastMemberData {
    id: number;
    name: string;
    character: string;
    img: string;
}
export interface MovieGenresData{
    id: number;
    name: string;
  }
export interface RawMovieData {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview?: string;
    genres: MovieGenresData[];
    vote_average?: number;
    vote_count?: number;
}
export interface RawMovieCreditsData {
    crew: RawCrewMemberData[];
    cast: RawCastMemberData[];
}
export interface RawCrewMemberData {
    id: number;
    name: string;
    job: string;
}
export interface RawCastMemberData {
    id: number;
    name: string;
    character: string;
    profile_path?: string;
}