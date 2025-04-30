<template>
	<v-card class="comment-card__container">
		<v-card-item>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row align-center gap-1">
					<v-avatar color="white" size="small">
						<v-icon
							color="black"
							icon="mdi-account-circle-outline"
						/>
					</v-avatar>
					<v-card-title>
						{{ data.username }}
					</v-card-title>
				</div>
				<v-rating
					:model-value="data.rating"
					:length="10"
					half-increments
					readonly
					size="x-small"
					density="comfortable"
				/>
			</div>
			<v-card-text>
				{{ data.text }}
			</v-card-text>
		</v-card-item>
	</v-card>
</template>

<script lang="ts" setup>
import type { CommentCardData } from '@/types';

defineProps<{
	data: CommentCardData;
}>();
</script>
