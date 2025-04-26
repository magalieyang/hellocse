import type { MovieCardData, MovieData, RawMoviesResultsData, RawMoviesData, RawMovieData, MovieGenresData, RawMovieCreditsData } from '~/types/movies'
import moment from 'moment'

const tmdbImgUrl = 'https://image.tmdb.org/t/p/w500';
export function formatMoviesData(rawData: RawMoviesData): MovieCardData[] {

  return rawData.results.map((movie: RawMoviesResultsData) => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: moment(movie.release_date).format('DD/MM/YYYY'),
      description: movie.overview || '',
      img: movie.poster_path ? tmdbImgUrl + movie.poster_path : '',
    }
  })

}

export function formatMovieData(rawData: RawMovieData & RawMovieCreditsData): MovieData {

  return{
    id: rawData.id,
    title: rawData.title,
    releaseDate: moment(rawData.release_date).format('YYYY'),
    img: rawData.poster_path ? tmdbImgUrl + rawData.poster_path : '',
    description: rawData.overview || '',
    rating: rawData.vote_average||0,
    voteCount: rawData.vote_count || 0,
    genres: rawData.genres?.map((genre: MovieGenresData) => genre.name) || [],
    director: rawData.crew?.find((member) => member.job === 'Director')?.name || '',
    cast: rawData.cast?.slice(0,9).map((actor) => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        img: actor.profile_path ? tmdbImgUrl + actor.profile_path : '',
      })) || [],
    
  }
}