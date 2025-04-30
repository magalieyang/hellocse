import { describe, it, expect } from 'vitest';
import { formatMoviesData, formatMovieData } from '@/utils/formatData';
import {
	rawMovieDetailsData,
	rawMovieCreditsData,
	expectedMovieData,
} from '../__mocks__/movieData';
import { rawMoviesData, expectedMoviesData } from '@/tests/__mocks__/moviesData';

describe('formatData.ts', () => {
	describe('formatMoviesData for list', () => {
		it('should format movies from raw movies data', () => {
			const formattedData = formatMoviesData(rawMoviesData);
			expect(formattedData).toEqual(expectedMoviesData);
		});
	});

	describe('formatMovieData for overview', () => {
		it('should format single movie from raw movie details data and raw movie credits data', () => {
			const formattedData = formatMovieData({
				...rawMovieDetailsData,
				...rawMovieCreditsData,
			});
			expect(formattedData).toEqual(expectedMovieData);
		});
	});
});
