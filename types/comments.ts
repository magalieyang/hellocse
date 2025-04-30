export interface CommentData {
	username: string;
	text: string;
	rating: number;
	date: string | null;
}

export interface MovieCommentData {
	movieId: number;
	comments: CommentData[];
}

export type CommentFormData = Omit<CommentData, 'date'>;
