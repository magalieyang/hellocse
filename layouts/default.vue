<template>
	<div class="default-layout">
		<header class="header__container bg-sky-600 text-white fixed w-full top-0 z-1">
			<nav class="header__nav flex gap-4 items-center pa-4">
				<NuxtLink to="/" class="mx-0">
					<v-btn
						density="compact"
						icon="mdi-home"
						variant="text"
						
					/>
				</NuxtLink>
                <h1 class="text-xl font-bold">What are we watching tonight?</h1>
			</nav>
		</header>

		<main class="main-content mx-auto mt-15 pt-10 pb-16 w-[1600px]">
			<NuxtPage />
		</main>
	</div>
</template>
