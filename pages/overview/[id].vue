<template>
	<div class="page-overview">
		<div v-if="loading" class="loading">
			<!-- TODO LOADING -->
			Loading...
			</div>
			<div v-else-if="data" class="movie-overview__wrapper">
				<!-- MOVIE DETAILS -->
				<div class="movie-overview__container">
					<div class="movie-overview__header">
						<img :src="data?.img" :alt='`${data.title} poster`' class="movie-overview__img" >
						<h1>{{ data.title }}</h1>
						<p>
							<span>{{ rating }}% ({{ data.voteCount }} voix)</span>
							<span>
								{{ data.releaseDate }}
							</span>
						</p>
					</div>
					<div class="movie-overview__content">
						<p>{{ data.description }}</p>
						<p>Réalisateur: {{ data.director }}</p>

						<h3>Têtes d’affiche</h3>
						<ul class="movie-overview-cast__list">
							<li v-for="actor in data.cast" :key="actor.id" class="movie-overview-cast__item">
								<img :src="actor.img" :alt='`${actor.name} poster`' class="movie-overview-cast__img" >
								<p class="movie-overview-cast__name">
									{{ actor.name }} ({{ actor.character }})
								</p>
							</li>
						</ul>
					</div>

				</div>

				<!-- MOVIE COMMENTS -->
				<Comments :movie-id="data.id" />
			</div>
			<div v-else class="error">
				<!-- TODO ERROR -->
				{{ errorOnFetch }}
			</div>
	</div>
</template>

<script lang="ts" setup>
import { useTmdbSingleMovie } from '~/composables/useTmdbSingleMovie';
import { useRoute } from 'vue-router';


const route = useRoute();
const movieId = route.params.id as string

const {data, errorOnFetch, loading, fetchMovieDetails} =  useTmdbSingleMovie();

onMounted(() => {
	fetchMovieDetails(movieId);
})

const rating = computed(() => {
	if (data.value) {
		return Math.round(data.value.rating * 10);
	}
	return 0;
})

</script>

<style lang="scss" scoped>
.page-overview{}
</style>
