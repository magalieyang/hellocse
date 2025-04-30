export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { query } = getQuery(event);
	const queryValue = typeof query === 'string' ? query : '';

	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(queryValue)}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.tmdbReadToken}`,
				'Content-Type': 'application/json',
			},
		},
	);
	const data = await response.json();

	return data;
});
