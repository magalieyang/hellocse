<template>
	<div>
		<h1>Qu'est ce qu'on regarde ce soir?</h1>
    <!-- TODO LOADING -->
        <div v-if="!errorOnFetch && data" class="page-list__container">
          <!-- TODO SEARCH BAR -->
           <!-- TODO FILTER BY -->
            <List :movies="data" :loading="loading" />
        </div>
        <div v-else>
            <!-- TODO ERROR -->
             {{ errorOnFetch }}
        </div>
	</div>
</template>

<script setup lang="ts">
import List from '@/components/List/List.vue';
import { useTmdbMoviesList } from '~/composables/useTmdbMoviesList';
import { onMounted } from 'vue';

const {data, errorOnFetch, loading, fetchMovies} =  useTmdbMoviesList();
onMounted(() => {
  fetchMovies()
})
</script>
