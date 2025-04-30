<template>
	<div class="overview-loading_container mb-10">
		<div class="flex flex-row gap-4">
			<v-skeleton-loader width="320" type="image" />

			<div class="flex flex-col gap-4">
				<v-skeleton-loader width="400" type="heading" />
				<v-skeleton-loader width="400" type="list-item-two-line" />
				<v-skeleton-loader width="640" type="list-item-three-line" />
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<v-skeleton-loader width="400" type="text" />
			<div class="flex flex-row gap-4">
				<v-skeleton-loader
					v-for="(n, nIndex) in 7"
					:key="nIndex"
					width="200"
					type="image, heading, subtitle"
				/>
			</div>
		</div>
	</div>
</template>
