import type {
	CommentData,
	MovieCommentData,
	CommentFormData,
} from '@/types/comments';

export const newComment: CommentFormData = {
	username: 'John Doe',
	text: 'I like this movie',
	rating: 7,
};

export const expectedNewComment: CommentData = {
	...newComment,
	date: '2025-04-30T00:00:00+02:00',
};

export const initialComments: MovieCommentData[] = [
	{
		movieId: 1,
		comments: [
			{
				username: 'user',
				text: 'Average movie',
				rating: 5,
				date: '2025-04-30T00:00:00+02:00',
			},
		],
	},
	{
		movieId: 2,
		comments: [
			{
				username: 'user2',
				text: 'Great movie',
				rating: 8,
				date: '2025-04-30T10:00:00+02:00',
			},
		],
	},
];
