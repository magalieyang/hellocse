<template>
	<div class="list__wrapper">
		<v-empty-state
			v-if="errorOnFetch"
			headline="Oops!"
			title="Something went wrong"
			:text="errorOnFetch"
			icon="mdi-alert-outline"
		/>
		<v-infinite-scroll
			v-else
			:items="movies"
			scroll-target="window"
			class="ga-4"
			@load="loadMore"
		>
			<template v-if="loading">
				<v-skeleton-loader
					v-for="(n, nIndex) in 20"
					:key="nIndex"
					class="border"
					max-width="240"
					height="413"
					type="image, heading"
				/>
			</template>
			<template v-else>
				<MovieCard
					v-for="movie in movies"
					:key="movie.id"
					class="movie-card"
					:movie="movie"
				/>
			</template>

			<template #empty>
				<v-alert type="warning">No more movies to display</v-alert>
			</template>
		</v-infinite-scroll>
	</div>
</template>
<script lang="ts" setup>
import MovieCard from '@/components/MovieCard/MovieCard.vue';
import { useTmdbMoviesList } from '@/composables/useTmdbMoviesList';

const { movies, currentPage, errorOnFetch, fetchMovies, loading } =
	useTmdbMoviesList();

const loadMore = async ({ done }: { done: (value: string) => void }) => {
	await fetchMovies(currentPage.value + 1);

	// required for vuetify to stop loading
	if (errorOnFetch) {
		done('error');
	} else {
		done('ok');
	}
};
</script>
<style scoped lang="scss">
.list__wrapper {
	&-loader {
		display: grid;
		grid-template-columns: repeat(auto-fill, 240px);
	}
	&:deep(.v-infinite-scroll) {
		display: grid;
		grid-template-columns: repeat(auto-fill, 240px);
		overflow-y: hidden;
		place-content: center;
		.v-infinite-scroll__side {
			display: none;
		}
	}
}
</style>
