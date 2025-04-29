import {ref} from 'vue';
import type { MovieData } from '~/types/movies';
import type { RawMovieData, RawMovieCreditsData } from '~/types/moviesApi';
import {  formatMovieData } from '@/utils/formatData';

export const useTmdbSingleMovie = () => {
  const data = ref<MovieData>();
  const loading = ref(false);
  const errorOnFetch = ref<string | null>(null);

const fetchMovieDetails= async (movieId: number) => {
  
    loading.value = true;
      try{
        const responseMovie = await $fetch<RawMovieData>(`/api/movieDetails/${movieId}`);
        const responseCredits = await $fetch<RawMovieCreditsData>(`/api/movieCredits/${movieId}`);
  
        if(!responseMovie || !responseCredits){
          errorOnFetch.value = 'Une erreur est survenue. Veuillez réessayer.';
        }else{
          data.value = formatMovieData({...responseMovie, ...responseCredits});
        }
  
      }catch (error: unknown) {
        errorOnFetch.value = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
      }finally {
        loading.value = false;
      }
    }

  return { data, loading, errorOnFetch, fetchMovieDetails };
}