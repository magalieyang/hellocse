import {ref} from 'vue';
import type { MovieCardData, RawMoviesData} from '~/types/movies'; 
import { formatMoviesData } from '@/utils/formatData';

export const useTmdbMoviesList = () => {
  const data = ref<MovieCardData[]>([]);
  const loading = ref(false);
  const errorOnFetch = ref<string | null>(null);

const fetchMovies = async (page: number = 1) =>{
  loading.value = true;
  try{
    const response = await $fetch<RawMoviesData>('/api/moviesList/moviesList', {
      params: { page }
    });

    if(!response.results || response.results.length === 0){
      errorOnFetch.value = 'Aucun film trouvé.';
    }else{
      data.value = formatMoviesData(response);
    }
  }catch (error: unknown) {
      errorOnFetch.value = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
  }finally {
    loading.value = false;
  }

}

const fetchMoviesByQuery = async (query: string) => {
  loading.value = true;
  try{
    const response = await $fetch<RawMoviesData>('/api/moviesListByQuery/moviesListByQuery', {
      params: { query }
    });
    data.value = formatMoviesData(response);
  }catch (error: unknown) {
    errorOnFetch.value = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
  }finally {
    loading.value = false;
  }
}


  return { data, loading, errorOnFetch, fetchMovies, fetchMoviesByQuery };
}