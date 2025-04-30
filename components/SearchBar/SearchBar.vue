<template>
	<div class="search-bar">
		<v-autocomplete
			:v-model="selectedMovie"
			:items="items"
			:loading="loading"
			placeholder="Search for a movie..."
			variant="solo"
			:clearable="true"
			density="comfortable"
			:hide-no-data="true"
			:hide-details="true"
			prepend-inner-icon="mdi-magnify"
			menu-icon=""
			@update:model-value="onSelect"
			@update:search="onChange"
		>
			<template #item="{ props, item }">
				<v-list-item v-bind="props">
					<template #subtitle>
						{{ item.raw.originalTitle }} ({{ item.raw.date }})
					</template>
				</v-list-item>
			</template>
		</v-autocomplete>
	</div>
</template>

<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const loading = ref<boolean>(false);
const items = ref<string[]>([]);
const router = useRouter();
const selectedMovie = ref(null);

const { movies, fetchMoviesByQuery } = useTmdbMoviesList();

const searchMovie = async (query: string) => {
	if (!query) {
		items.value = [];
		loading.value = false;
		return;
	}

	await fetchMoviesByQuery(query);
	items.value = movies.value.map((movie) => {
		return {
			title: movie.title,
			date: movie.date,
			originalTitle: movie.originalTitle,
			value: movie.id,
		};
	});
	loading.value = false;
};
const debouncedOnChange = useDebounceFn(searchMovie, 500);

const onChange = (query: string) => {
	loading.value = true;
	debouncedOnChange(query);
};

const onSelect = (id: number) => {
	router.push({ name: 'overview-id', params: { id } });
};
</script>
