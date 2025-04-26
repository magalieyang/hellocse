import type { MovieCardData, RawMovieData, RawMoviesData } from '~/types/movies'
import moment from 'moment'

export function formatMoviesData(rawData: RawMoviesData): MovieCardData[] {
  const tmdbImgUrl = 'https://image.tmdb.org/t/p/w500';

  const formatedMovies = rawData.results.map((movie: RawMovieData) => {
    const formatedDate = moment(movie.release_date).format('DD/MM/YYYY');

    return {
      id: movie.id,
      title: movie.title,
      releaseDate:formatedDate,
      description: movie.overview || '',
      image: movie.poster_path ? tmdbImgUrl + movie.poster_path : '',
    }
  })

  return formatedMovies
}