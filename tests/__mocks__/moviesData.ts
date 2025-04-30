import type { MovieCardData } from '@/types/movies';
import type { RawMoviesData } from '@/types/moviesApi';

export const rawMoviesData: RawMoviesData = {
	page: 1,
	results: [
		{
			adult: false,
			backdrop_path: '/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg',
			genre_ids: [28, 80, 53],
			id: 1197306,
			original_language: 'en',
			original_title: 'A Working Man',
			overview:
				"Levon Cade est un criminel repenti. Aujourd'hui, il travaille dans le bâtiment. Bientôt, la fille de son patron, Jenny, disparaît, il est appelé à réutiliser les compétences qui ont fait de lui une figure légendaire dans le monde des opérations secrètes.",
			popularity: 869.2977,
			poster_path: '/yBSLptuEaleUfTwE4ktlFcnmLkY.jpg',
			release_date: '2025-03-26',
			title: 'A Working Man',
			video: false,
			vote_average: 6.318,
			vote_count: 422,
		},
		{
			adult: false,
			backdrop_path: '/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
			genre_ids: [10751, 35, 12, 14],
			id: 950387,
			original_language: 'en',
			original_title: 'A Minecraft Movie',
			overview:
				"Bienvenue dans l’univers de Minecraft où la créativité est essentielle à la survie ! Quatre outsiders – Garrett, Henry, Natalie et Dawn – sont soudainement projetés à travers un mystérieux portail menant à L'Overworld – un incroyable monde cubique qui prospère grâce à l’imagination. Pour rentrer chez eux, il leur faudra maîtriser ce monde (et le protéger de créatures maléfiques comme les Piglins et les Zombies), tout en s’engageant dans une quête fantastique aux côtés de Steve, expert fabricateur. Cette aventure les invitera à faire preuve d’audace et à développer leurs qualités singulières de créativité. Autant de facultés dont ils auront besoin pour s’épanouir dans le monde réel.",
			popularity: 485.2327,
			poster_path: '/cq9z69AyIXeL2H14bqHE5ukm3M9.jpg',
			release_date: '2025-03-31',
			title: 'Minecraft, le film',
			video: false,
			vote_average: 6.188,
			vote_count: 712,
		},
	],
	total_pages: 49929,
	total_results: 998566,
};
export const rawMoreMoviesData: RawMoviesData = {
	page: 2,
	results: [
		{
			adult: false,
			backdrop_path: '/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg',
			genre_ids: [14, 12, 28],
			id: 324544,
			original_language: 'en',
			original_title: 'In the Lost Lands',
			overview:
				"Une reine rêve d'obtenir le don de métamorphose. Elle engage la sorcière Gray Alys, une femme aussi redoutée que puissante. Envoyés dans les Terres perdues, Alys et son guide, le vagabond Boyce, doivent déjouer et combattre l'homme et le démon dans une fable qui explore la nature du bien et du mal, de la dette et de l'accomplissement, de l'amour et de la perte.",
			popularity: 436.9118,
			poster_path: '/t6HJH3gXtUqVinyFKWi7Bjh73TM.jpg',
			release_date: '2025-02-27',
			title: 'In the Lost Lands',
			video: false,
			vote_average: 6.294,
			vote_count: 282,
		},
	],
	total_pages: 49929,
	total_results: 998566,
};
export const expectedMoviesData: MovieCardData[] = [
	{
		id: 1197306,
		title: 'A Working Man',
		img: 'https://image.tmdb.org/t/p/w500/yBSLptuEaleUfTwE4ktlFcnmLkY.jpg',
	},
	{
		id: 950387,
		title: 'Minecraft, le film',
		img: 'https://image.tmdb.org/t/p/w500/cq9z69AyIXeL2H14bqHE5ukm3M9.jpg',
	},
];
export const expectedMoreMoviesData: MovieCardData[] = [
	{
		id: 1197306,
		title: 'A Working Man',
		img: 'https://image.tmdb.org/t/p/w500/yBSLptuEaleUfTwE4ktlFcnmLkY.jpg',
	},
	{
		id: 950387,
		title: 'Minecraft, le film',
		img: 'https://image.tmdb.org/t/p/w500/cq9z69AyIXeL2H14bqHE5ukm3M9.jpg',
	},
	{
		id: 324544,
		title: 'In the Lost Lands',
		img: 'https://image.tmdb.org/t/p/w500/t6HJH3gXtUqVinyFKWi7Bjh73TM.jpg',
	},
];
export const rawMoviesByQueryData: RawMoviesData = {
	page: 1,
	results: [
		{
			adult: false,
			backdrop_path: '/bue2x2wJSXSQk7Z0IKFINlxXMug.jpg',
			genre_ids: [28, 80, 53],
			id: 261503,
			original_language: 'cn',
			original_title: '去吧！揸Fit人兵團',
			overview:
				'The second spin-off film from the Young and Dangerous series.',
			popularity: 0.8582,
			poster_path: '/gsk1IqSWY5U4llVs3aQFHEhJcOs.jpg',
			release_date: '1996-09-06',
			title: 'Once Upon a Time in Triad Society 2',
			video: false,
			vote_average: 4.7,
			vote_count: 3,
		},
		{
			adult: false,
			backdrop_path: '/8pKiwb0eA0xrUxGj3Rdy9jwfEkq.jpg',
			genre_ids: [27],
			id: 489420,
			original_language: 'en',
			original_title: 'Once Upon a Time at Christmas',
			overview:
				"In the twelve days leading up to Christmas, the residents of the snowy and isolated town of Woodridge are being murdered in a variety of gruesome ways by a psychotic Santa and Mrs. Claus. While the small-town cops scramble to protect the townsfolk, the killings seem to center around one young woman who may be the final victim on Santa's list. As the slaughter continues and the bodies pile up, it seems that nothing and no one may be able to stop the murderers before they complete their own deadly take on the twelve days of Christmas.",
			popularity: 0.9276,
			poster_path: '/txxposTwwVxRfsthYH9NR4xwmgT.jpg',
			release_date: '2017-11-26',
			title: 'Once Upon a Time at Christmas',
			video: false,
			vote_average: 4.7,
			vote_count: 26,
		},
	],
	total_pages: 27,
	total_results: 532,
};
export const expectedMoviesByQueryData: MovieCardData[] = [
	{
		id: 261503,
		title: 'Once Upon a Time in Triad Society 2',
		img: 'https://image.tmdb.org/t/p/w500/gsk1IqSWY5U4llVs3aQFHEhJcOs.jpg',
	},
	{
		id: 489420,
		title: 'Once Upon a Time at Christmas',
		img: 'https://image.tmdb.org/t/p/w500/txxposTwwVxRfsthYH9NR4xwmgT.jpg',
	},
];
