<template>
	<div class="movie-comments__container">
		<!-- Display notification at submit -->
		<v-snackbar
			v-model="displaySnackbar"
			:timeout="2000"
			:color="isValid ? 'success' : 'error'"
			rounded="pill"
		>
			{{ snackbarMsg }}
			<template #actions>
				<v-btn
					color="white"
					variant="text"
					size="x-small"
					@click="displaySnackbar = false"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>

		<!-- FORM -->
		<v-form v-model="isValid" class="movie-comments__form">
			<h3>Ajouter un commentaire</h3>
			<div class="movie-comments__form__input">
				<v-text-field
					v-model="formData.username"
					:counter="50"
					label="Votre nom"
					:error-messages="v$.username.$errors.map((e) => e.$message)"
					@update:focused="v$.username.$touch"
				/>
				<div>
					<v-rating
						v-model="formData.rating"
						length="10"
						density="compact"
					/>
					<span class="rating-label"> {{ formData.rating }}/10 </span>
				</div>

				<v-textarea
					v-model="formData.text"
					label="Votre commentaire"
					no-resize
					:counter="500"
					:error-messages="v$.text.$errors.map((e) => e.$message)"
					@update:focused="v$.text.$touch"
				/>

				<v-btn @click="submit"> Envoyer </v-btn>
			</div>
		</v-form>

		<!-- COMMENTS LIST -->
		<div v-for="(comment, index) in sortedComments" :key="index">
			<CommentCard :data="comment" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import CommentCard from '~/components/CommentCard/CommentCard.vue';
import type { CommentData } from '~/types';

import { useVuelidate } from '@vuelidate/core';
import {
	required,
	minLength,
	maxLength,
	alpha,
	alphaNum,
} from '@vuelidate/validators';

import { useComments } from '~/composables/useComments';
import { ref } from 'vue';

import { useDayjs } from '#dayjs';

const dayjs = useDayjs();
const displaySnackbar = ref(false);
const isValid = ref(false);

const formData = ref<CommentData>({
	username: '',
	text: '',
	rating: 1,
	date: null,
});

const rules = {
	username: {
		required,
		alpha,
		minLength: minLength(3),
		maxLength: maxLength(50),
	},
	text: {
		required,
		alphaNum,
		minLength: minLength(3),
		maxLength: maxLength(500),
	},
};
const v$ = useVuelidate(rules, formData);

const snackbarMsg = computed(() => {
	return isValid.value
		? 'Your message was sent successfully! '
		: 'An error occured when attempting to send your message.';
});

const { getMovieComments, addComment } = useComments();

// Sort comments by date from most recent to oldest
const sortedComments = computed(() => {
	return [...getMovieComments(props.movieId)].sort((a, b) => {
		return dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1;
	});
});

const clearForm = () => {
	formData.value = {
		username: '',
		text: '',
		rating: 1,
	};
};

const submit = async () => {
	isValid.value = await v$.value.$validate();
	if (isValid.value) {
		addComment(props.movieId, formData.value);

		//reset form
		clearForm();
		v$.value.$reset();

		//display notification msg
		displaySnackbar.value = true;
	}
};

const props = defineProps({
	movieId: {
		type: Number,
		required: true,
	},
});
</script>
