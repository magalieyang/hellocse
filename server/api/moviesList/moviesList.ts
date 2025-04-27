export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
  
      const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
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