<template>
    <div class="comment-card__wrapper">
        <div class="comment-card__header">
            <p class="comment-card-author">{{ data.username }}</p>
            <p class="comment-card-rating">{{ data.rating }}/10</p>
        </div>
        <p class="comment-card__content">
            {{ data.text }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import type { CommentCardData } from '@/types';

defineProps<{
    data: CommentCardData;
}>();
</script>