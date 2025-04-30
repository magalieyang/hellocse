export interface RawMoviesData{
    results: RawMoviesResultsData[];
    page: number;
    total_pages: number,
	total_results: number,
}

export interface RawMoviesErrorData{
    status_message: string,
    status_code: number,
    success: boolean
}

export interface RawMoviesResultsData{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface RawMovieData {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | object;
    budget: number;
    genres: RawMovieGenresData[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies:{
        id: number,
        origin_country: string,
        name: string,
        logo_path: string | null
    }[];
    production_countries: {
        iso_3166_1: string,
        name: string,
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string,
        iso_639_1: string,
        name: string,
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface RawMovieCreditsData {
    crew: RawCrewMemberData[];
    cast: RawCastMemberData[];
    id: number
}
export interface RawCrewMemberData {
        id: number;
        name: string;
        department: string;
        profile_path: string;
        adult: boolean,
        gender: number,
        job: string,
        known_for_department: string,
        popularity: number,
        original_name: string,
        credit_id: string,
}
export interface RawCastMemberData {
    id: number;
    name: string;
    character: string;
    profile_path: string;
    adult: boolean,
    gender: number,
    known_for_department: string,
    original_name: string,
    popularity: number,
    cast_id: number,
    credit_id: string,
    order: number
}
export interface RawMovieGenresData{
    id: number;
    name: string;
  }