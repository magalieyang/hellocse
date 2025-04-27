<template>
    <v-infinite-scroll :items="movies" scroll-target="window" class="list__wrapper" @load="loadMore" >
        <Card v-for="movie in movies" :key="movie.id" class="movie-card" :movie="movie" />
        <template #empty>
            <v-alert type="warning">No more movies to display</v-alert>
        </template>
    </v-infinite-scroll>
</template>
<script lang="ts" setup>
import Card from '@/components/Card/Card.vue';
import { useTmdbMoviesList } from '~/composables/useTmdbMoviesList';

const {movies, currentPage, errorOnFetch, fetchMovies} =  useTmdbMoviesList();

const loadMore = async({done}: {done: (value: string) => void}) => {
    await fetchMovies(currentPage.value + 1);

    // required for vuetify to stop loading 
    if (errorOnFetch) {
        done('error');
    } else {
        done('ok');
    }
}

</script>
<style scoped lang="scss">
.list__wrapper{
}
</style>