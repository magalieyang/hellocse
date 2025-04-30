import { ref } from 'vue';
import type { MovieCardData } from '~/types/movies';
import type { RawMoviesData, RawMoviesErrorData } from '~/types/moviesApi';

import { formatMoviesData } from '@/utils/formatData';

export const useTmdbMoviesList = () => {
	const movies = ref<MovieCardData[]>([]);
	const loading = ref(false);
	const errorOnFetch = ref<string | null>(null);
	const currentPage = ref(0);

	const fetchMovies = async (page: number = 1) => {
		loading.value = true;
		try {
			const response = await $fetch<RawMoviesData | RawMoviesErrorData>(
				'/api/moviesList/moviesList',
				{
					params: { page },
				},
			);

			//verify it is not error datas with a 200
			if ('results' in response) {
				movies.value = [...movies.value, ...formatMoviesData(response)];
				currentPage.value = page;
			} else {
				errorOnFetch.value = `An error occurred: ${response.status_message}`;
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

	const fetchMoviesByQuery = async (query: string) => {
		loading.value = true;
		try {
			const response = await $fetch<RawMoviesData | RawMoviesErrorData>(
				'/api/moviesListByQuery/moviesListByQuery',
				{
					params: { query },
				},
			);

			//verify it is not error datas with a 200
			if ('results' in response) {
				movies.value = formatMoviesData(response);
			} else {
				errorOnFetch.value = `An error occurred: ${response.status_message}`;
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

	return {
		movies,
		currentPage,
		loading,
		errorOnFetch,
		fetchMovies,
		fetchMoviesByQuery,
	};
};
