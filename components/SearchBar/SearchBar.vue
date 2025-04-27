<template>
    <div class="search-bar">
        <v-autocomplete
            :v-model="selectedMovie"
            :items="items"
            :loading="loading"
            placeholder="Rechercher un film..."
            variant="solo"
            rounded
            :clearable="true"
            density="comfortable"
            :hide-no-data="true"
            prepend-inner-icon="mdi-magnify"
            menu-icon=""
            @update:model-value="onSelect"
            @update:search="onChange"
          />
    </div>
</template>

<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/core"
import { useRouter } from "vue-router";
import { ref } from "vue";

const loading = ref<boolean>(false);
const items = ref<string[]>([]);
const router = useRouter();
const selectedMovie = ref(null);

const { data, fetchMoviesByQuery } = useTmdbMoviesList();

const searchMovie = async (query: string) => {
    if (!query) {
        items.value = [];
        loading.value = false;
        return;
    }

    await fetchMoviesByQuery(query);
    items.value = data.value.map((movie) =>{ return{title: movie.title, value: movie.id} });
    loading.value = false;

}
const debouncedOnChange = useDebounceFn(searchMovie, 500);

const onChange = (query: string) => {
    loading.value = true;
    debouncedOnChange(query);
}

const onSelect = (id: number) => {
    router.push({ name: 'overview-id', params: { id } });
}

</script>