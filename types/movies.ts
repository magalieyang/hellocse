export interface MovieCardData {
	id: number;
	title: string;
	img: string;
}
export interface MovieData {
	id: number;
	title: string;
	originalTitle: string;
	releaseDate: string;
	img: string;
	description: string;
	genres: string[];
	rating: number;
	voteCount: number;
	director: string;
	cast: CastMemberData[];
}

export interface CastMemberData {
	id: number;
	name: string;
	character: string;
	img: string;
}
