import { useLocalStorage } from '@vueuse/core';
import type {
	CommentData,
	CommentFormData,
	MovieCommentData,
} from '~/types/comments';
import { useDayjs } from '#dayjs';

const dayjs = useDayjs();
export const useComments = () => {

	const moviesComments = useLocalStorage<MovieCommentData[]>(
		'movie-comments',
		[],
	);

	const addComment = (movieId: number, comment: CommentFormData): void => {
		const movie = moviesComments.value.find(
			(movie) => movie.movieId === movieId,
		);
		const newComment: CommentData = { ...comment, date: dayjs().format() };

		// If the movie already has comments, push the new comment to the existing array
		if (movie) {
			movie.comments.push(newComment);

			moviesComments.value = [...moviesComments.value];
		} else {
			// Else, create a new movie entry with the comment
			moviesComments.value.push({
				movieId,
				comments: [newComment],
			});
		}
	};

	const getMovieComments = (movieId: number): CommentData[] => {
		return (
			moviesComments.value.find((movie) => movie.movieId === movieId)
				?.comments || []
		);
	};

	return { moviesComments, getMovieComments, addComment };
};
