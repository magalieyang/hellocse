import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { useTmdbSingleMovie } from '../../composables/useTmdbSingleMovie';
import {
	rawMovieDetailsData,
	rawMovieCreditsData,
	expectedMovieData,
} from '../__mocks__/movieData';

describe('useTmdbSingleMovie', () => {
	let fetchMock: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal('$fetch', fetchMock);
	});
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('should initialize with default values', () => {
		const { movie, loading, errorOnFetch } = useTmdbSingleMovie();

		expect(movie.value).toEqual({});
		expect(loading.value).toBe(false);
		expect(errorOnFetch.value).toBe(null);
	});

	it('should fetch movie successfully when movieId is 1197306', async () => {
		fetchMock
			.mockResolvedValueOnce(rawMovieDetailsData)
			.mockResolvedValueOnce(rawMovieCreditsData);

		const { movie, errorOnFetch, fetchMovieDetails } = useTmdbSingleMovie();
		await fetchMovieDetails(1197306);

		expect(fetchMock).toHaveBeenCalledTimes(2);
		expect(movie.value).toEqual(expectedMovieData);
		expect(errorOnFetch.value).toBe(null);
	});
	it('should display error message when rejected error', async () => {
		fetchMock.mockRejectedValue(new Error('Async error'));

		const { errorOnFetch, fetchMovieDetails } = useTmdbSingleMovie();
		await fetchMovieDetails(1);

		expect(errorOnFetch.value).toEqual('Async error');
	});
	it('should display error message when 200 but no results', async () => {
		fetchMock.mockResolvedValueOnce({
			status_code: 6,
			status_message: 'foo',
			success: false,
		});

		const { errorOnFetch, fetchMovieDetails } = useTmdbSingleMovie();
		await fetchMovieDetails(1);

		expect(errorOnFetch.value).toEqual(
			'An error occurred. Please try again.',
		);
	});
});
