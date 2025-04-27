<template>
	<div>
		<h1>Qu'est ce qu'on regarde ce soir?</h1>
    <!-- TODO LOADING -->
        <div v-if="!error" class="page-list__container">
          <SearchBar />
           <!-- TODO FILTER BY -->
            <List @has-error="(err)=> error = err" />
        </div>
        <div v-else>
            <!-- TODO ERROR -->
             ERROR
        </div>
	</div>
</template>

<script setup lang="ts">
import List from '@/components/List/List.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import {ref} from 'vue';

const error = ref(false);
</script>

<style scoped lang="scss">
.page-list__container{
  
}
</style>