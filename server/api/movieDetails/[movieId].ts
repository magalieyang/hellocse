export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { movieId } = event.context.params || {};
    if (!movieId) {
        throw new Error("movieId is missing in the request parameters.");
    }

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
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
}
);