import type { MovieCardData, MovieData } from '@/types/movies';
import type {
	RawMoviesResultsData,
	RawMoviesData,
	RawMovieData,
	RawMovieGenresData,
	RawMovieCreditsData,
} from '@/types/moviesApi';

import { useDayjs } from '#dayjs';

const dayjs = useDayjs();
const tmdbImgUrl = 'https://image.tmdb.org/t/p/w500';
export function formatMoviesData(rawData: RawMoviesData): MovieCardData[] {
	return rawData.results.map((movie: RawMoviesResultsData) => {
		return {
			id: movie.id,
			title: movie.title,
			img: movie.poster_path ? tmdbImgUrl + movie.poster_path : '',
		};
	});
}

export function formatMovieData(
	rawData: RawMovieData & RawMovieCreditsData,
): MovieData {
	return {
		id: rawData.id,
		title: rawData.title,
		originalTitle: rawData.original_title,
		releaseDate: dayjs(rawData.release_date).format('YYYY'),
		img: rawData.poster_path ? tmdbImgUrl + rawData.poster_path : '',
		description: rawData.overview || '',
		rating: rawData.vote_average || 0,
		voteCount: rawData.vote_count || 0,
		genres:
			rawData.genres?.map((genre: RawMovieGenresData) => genre.name) ||
			[],
		director:
			rawData.crew?.find((member) => member.job === 'Director')?.name ||
			'',
		cast:
			rawData.cast?.slice(0, 9).map((actor) => ({
				id: actor.id,
				name: actor.name,
				character: actor.character,
				img: actor.profile_path ? tmdbImgUrl + actor.profile_path : '',
			})) || [],
	};
}
