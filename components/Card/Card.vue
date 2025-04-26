<template>
    <div class="card">
            <img :src="movie.img" :alt='`${movie.title} Poster`' class="card__img" >
            <div class="card__header">
                <h2 class="card__title">{{ movie.title }}</h2>
                <p class="card__release-date">Release Date: {{ movie.releaseDate }}</p>
            </div>
            <div class="card__content">
                <p class="card__description">{{ movie.description }}</p>
                <button class="card__button" @click="goToDetails(movie.id)">Voir plus</button>
            </div>
    </div>
</template>

<script lang="ts" setup>
import type { MovieCardData } from '@/types';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    movie: MovieCardData;
}>();

const goToDetails = (id: number) => {
    router.push({ name: 'overview-id', params: { id } });
}

</script>