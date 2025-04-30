<template>
	<div class="page-overview">
		<div v-if="movie?.id" class="movie-overview__wrapper">
			<!-- MOVIE DETAILS -->
			<div class="movie-overview__container mb-10">
				<div class="movie-overview__header flex flex-row gap-4">
					<v-img
						:src="movie?.img"
						:alt="`${movie.title} poster`"
						class="movie-overview__img"
						:width="320"
						:max-width="320"
					/>
					<div>
						<h1 class="text-h1 font-weight-black mb-4">{{ movie.title }}</h1>
						<div class="flex flex-col">
							<div class="flex flex-row gap-2 mb-2">
								<v-chip v-for="(genre, genreIndex) in movie.genres" :key="genreIndex" color="primary" size="small">
									{{ genre }}
								</v-chip>
								<span>
									{{ movie.releaseDate }}
								</span>
							</div>
							<div class="flex items-center gap-2">
								<v-rating
									:model-value="ratingMultipleOfFive"
									:length="10"
									half-increments
									readonly
									density="compact"
								/>
								<p>
									<span class="font-semibold" :class="headerRatingClass">
										{{ rating }}%
									</span>
									<span class="text-gray-400">
										({{ movie.voteCount }} votes)
									</span>
								</p>
							</div>
							<h3 class="mt-4 text-xl font-semibold">Synopsis</h3>
							<p class="my-2 pr-10">
								{{  movie.description }}
							</p>
							<p>Director: {{ movie.director }}</p>
						</div>
					</div>
				</div>
				<div class="movie-overview__content mt-10">
					

					<h3 class="text-xl font-semibold mb-4">Top Billed Cast</h3>

					<v-slide-group show-arrows>
						<v-slide-group-item v-for="actor in movie.cast" :key="actor.id">
							<v-card  width="180" height="320" class="mx-4">
									<v-img
										:src="actorImgSrc(actor)"
										:alt="`${actor.name} poster`"
										class="movie-overview-cast__img"
										cover
										height="250"
									/>
								<v-card-item :title="actor.name" :subtitle="actor.character" />
							</v-card>
						</v-slide-group-item>
					</v-slide-group>
				</div>
			</div>

			<v-divider />

			<!-- MOVIE COMMENTS -->
			<Comments :movie-id="movie.id" />
		</div>

		<!-- ERROR -->
		<v-empty-state
            v-else-if="errorOnFetch" 
            headline="Oops!"
            title="Something went wrong"
            :text="errorOnFetch"
            icon="mdi-alert-outline"
        />

		<!-- LOADING -->
			<OverviewLoading  v-else />
		
	</div>
</template>

<script lang="ts" setup>
import { useTmdbSingleMovie } from '~/composables/useTmdbSingleMovie';
import OverviewLoading from '~/components/OverviewLoading/OverviewLoading.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
let movieId = route.params.id as string;
movieId = parseInt(movieId)

const { movie, errorOnFetch, fetchMovieDetails } =
	useTmdbSingleMovie();

onMounted(() => {
	fetchMovieDetails(movieId);
});

const rating = computed(() => {
	if (movie.value) {
		return Math.round(movie.value.rating * 10);
	}
	return 0;
});

//Get the nearest multiple of 5 for rating component display
const ratingMultipleOfFive = computed(() => {
	if (movie.value) {
		return Math.ceil(movie.value.rating * 2) * 0.5;
	}
	return 0;
});

const headerRatingClass = computed(() =>{
	let color = 'text-orange-600';
	if (rating.value) {
		if(rating.value <= 33){
			color = 'text-red-700'
		}else if(rating.value > 66){
			color = 'text-green-600'
		}
	}
	return color;
})

const actorImgSrc = (actor) => {
	return !actor?.img ? 'https://picsum.photos/image=433' : actor.img;
};
</script>

<style lang="scss" scoped>

</style>
