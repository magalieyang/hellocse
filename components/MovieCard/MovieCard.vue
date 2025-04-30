<template>
	<v-card
		v-if="movie.img"
		class="card elevation-4"
		color="white"
		:width="240"
		@click="goToDetails(movie.id)"
	>
		<v-card-item class="card__item pa-0">
			<v-img
				:src="movie.img"
				:alt="`${movie.title} Poster`"
				class="card__img"
				:width="240"
				:height="360"
			/>
		</v-card-item>
		<v-divider />
		<v-card-actions>
			<div class="flex flex-col">
				<v-btn
					block
					variant="plain"
					color="primary"
					@click="goToDetails(movie.id)"
				>
					<span class="font-bold whitespace-normal text-center">{{
						movie.title
					}}</span>
				</v-btn>
			</div>
		</v-card-actions>
	</v-card>
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
};
</script>
