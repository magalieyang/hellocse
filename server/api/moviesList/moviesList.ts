export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event);
    const page = Number(query.page) || 1;
  
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?page=${page}`,
          {
              method: 'GET',
              headers: {
            Authorization: `Bearer ${config.tmdbReadToken}`,
                  'Content-Type': 'application/json',
              },
          },
      )
   const data = await response.json();

      return data;
  });