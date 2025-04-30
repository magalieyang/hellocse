import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { useTmdbMoviesList } from '../../composables/useTmdbMoviesList';
import {
	rawMoviesData,
	rawMoreMoviesData,
	expectedMoviesData,
	expectedMoreMoviesData,
	expectedMoviesByQueryData,
	rawMoviesByQueryData,
} from '../__mocks__/moviesData';

describe('useTmdbMoviesList.ts', () => {
	it('should initialize with default values', () => {
		const { movies, loading, errorOnFetch } = useTmdbMoviesList();
		expect(movies.value).toEqual([]);
		expect(loading.value).toBe(false);
		expect(errorOnFetch.value).toBe(null);
	});

	describe('fetch movies by page', () => {
		let fetchMock: ReturnType<typeof vi.fn>;

		beforeEach(() => {
			fetchMock = vi.fn();
			vi.stubGlobal('$fetch', fetchMock);
		});
		afterEach(() => {
			vi.unstubAllGlobals();
		});

		it('should fetch movies successfully', async () => {
			fetchMock.mockResolvedValueOnce(rawMoviesData);

			const { fetchMovies, movies, currentPage, errorOnFetch } =
				useTmdbMoviesList();
			await fetchMovies();

			expect(movies.value).toEqual(expectedMoviesData);
			expect(currentPage.value).toEqual(1);
			expect(fetchMock).toHaveBeenCalledOnce();
			expect(errorOnFetch.value).toBe(null);
		});

		it('should fetch more movies successfully', async () => {
			fetchMock
				.mockResolvedValueOnce(rawMoviesData)
				.mockResolvedValueOnce(rawMoreMoviesData);

			const { fetchMovies, movies, currentPage, errorOnFetch } =
				useTmdbMoviesList();
			await fetchMovies();
			await fetchMovies(currentPage.value + 1);

			expect(movies.value).toEqual(expectedMoreMoviesData);
			expect(currentPage.value).toEqual(2);
			expect(fetchMock).toHaveBeenCalledTimes(2);
			expect(errorOnFetch.value).toBe(null);
		});

		it('should display error message when 200 but no results', async () => {
			fetchMock.mockResolvedValueOnce({
				status_code: 6,
				status_message: 'foo',
				success: false,
			});

			const { fetchMovies, errorOnFetch } = useTmdbMoviesList();
			await fetchMovies();

			expect(errorOnFetch.value).toEqual('An error occurred: foo');
		});

		it('should display error message when rejected error', async () => {
			fetchMock.mockRejectedValue(new Error('Async error'));

			const { fetchMovies, errorOnFetch } = useTmdbMoviesList();
			await fetchMovies();

			expect(errorOnFetch.value).toEqual('Async error');
		});
	});
	describe('fetch movies by query', () => {
		let fetchMock: ReturnType<typeof vi.fn>;

		beforeEach(() => {
			fetchMock = vi.fn();
			vi.stubGlobal('$fetch', fetchMock);
		});
		afterEach(() => {
			vi.unstubAllGlobals();
		});

		it('should fetch movies successfully', async () => {
			fetchMock.mockResolvedValueOnce(rawMoviesByQueryData);

			const { fetchMoviesByQuery, movies, errorOnFetch } =
				useTmdbMoviesList();
			await fetchMoviesByQuery('Once up');

			expect(movies.value).toEqual(expectedMoviesByQueryData);
			expect(fetchMock).toHaveBeenCalledOnce();
			expect(errorOnFetch.value).toEqual(null);
		});

		it('should display error message when 200 but no results', async () => {
			fetchMock.mockResolvedValueOnce({
				status_code: 6,
				status_message: 'foo',
				success: false,
			});

			const { fetchMovies, errorOnFetch } = useTmdbMoviesList();
			await fetchMovies();

			expect(errorOnFetch.value).toEqual('An error occurred: foo');
		});

		it('should display error message when rejected error', async () => {
			fetchMock.mockRejectedValue(new Error('Async error'));

			const { fetchMovies, errorOnFetch } = useTmdbMoviesList();
			await fetchMovies();

			expect(errorOnFetch.value).toEqual('Async error');
		});
	});
});
