import { ref } from 'vue';
import type { MovieData } from '@/types/movies';
import type {
	RawMovieData,
	RawMovieCreditsData,
	RawMoviesErrorData,
} from '~/types/moviesApi';
import { formatMovieData } from '@/utils/formatData';

export const useTmdbSingleMovie = () => {
	const movie = ref<MovieData>({} as MovieData);
	const loading = ref(false);
	const errorOnFetch = ref<string | null>(null);

	const fetchMovieDetails = async (movieId: number) => {
		loading.value = true;
		try {
			const responseMovie = await $fetch<
				RawMovieData | RawMoviesErrorData
			>(`/api/movieDetails/${movieId}`);
			const responseCredits = await $fetch<
				RawMovieCreditsData | RawMoviesErrorData
			>(`/api/movieCredits/${movieId}`);

			//verify it is an error datas with a 200
			if (
				'status_message' in responseMovie ||
				'status_message' in responseCredits
			) {
				errorOnFetch.value = 'An error occurred. Please try again.';
			} else {
				movie.value = formatMovieData({
					...responseMovie,
					...responseCredits,
				});
			}
		} catch (error: unknown) {
			errorOnFetch.value =
				error instanceof Error
					? error.message
					: 'An error occurred. Please try again.';
		} finally {
			loading.value = false;
		}
	};

	return { movie, loading, errorOnFetch, fetchMovieDetails };
};
