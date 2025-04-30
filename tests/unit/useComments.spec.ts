import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useComments } from '@/composables/useComments';
import {
	newComment,
	expectedNewComment,
	initialComments,
} from '@/tests/__mocks__/comments';

// Mock dayjs with a fixed date
vi.mock('#dayjs', () => ({
	useDayjs: () => () => ({
		format: () => '2025-04-30T00:00:00+02:00',
	}),
}));

describe('useComments.ts', () => {
	// Test from a clean localStorage
	beforeEach(() => {
		localStorage.clear();
	});

	describe("LocalStorage doesn't have any data", () => {
		it('should initialize with an empty array of comments', () => {
			const { moviesComments } = useComments();
			expect(moviesComments.value).toEqual([]);
		});

		it('should return an empty array when there are no comments for a movie', () => {
			const { getMovieComments } = useComments();
			const comments = getMovieComments(1);
			expect(comments).toEqual([]);
		});

		it('should add a comment to a movie', () => {
			const { moviesComments, addComment } = useComments();

			const movieId = 1;
			addComment(movieId, newComment);
			expect(moviesComments.value.length).toBe(1);
			expect(moviesComments.value[0]).toEqual({
				movieId: 1,
				comments: [expectedNewComment],
			});
		});
	});

	describe('LocalStorage has data', () => {
		beforeEach(() => {
			localStorage.setItem(
				'movie-comments',
				JSON.stringify(initialComments),
			);
		});
		it('should initialize with existing comments from localStorage', () => {
			const { moviesComments } = useComments();
			expect(moviesComments.value).toEqual(initialComments);
		});

		it('should return existing comments for a movie', () => {
			const { getMovieComments } = useComments();
			const comments = getMovieComments(1);
			expect(comments).toEqual(initialComments[0].comments);
		});

		it('should add a comment to an existing movie', () => {
			const { moviesComments, addComment } = useComments();

			addComment(2, newComment);

			const movie = moviesComments.value.find(
				(movie) => movie.movieId === 2,
			);
			expect(movie).toBeDefined();
			expect(movie?.comments.length).toBe(2);
			expect(movie?.comments[1]).toEqual(expectedNewComment);
		});
	});
});
