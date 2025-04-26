<template>
    <div class="list">
        <Card v-for="movie in movies" :key="movie.id" class="movie-card" :movie="movie" />
    </div>
</template>
<script lang="ts" setup>
import type { MovieCardData } from '@/types';
import Card from '@/components/Card/Card.vue';

defineProps<{movies: Array<MovieCardData> | null}>();
</script>