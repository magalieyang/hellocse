// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	build: {
		transpile: ['vuetify'],
	},
	modules: [
		'@nuxt/eslint',
    'dayjs-nuxt',
    '@nuxt/test-utils/module',
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error expect error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
	],
  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'Europe/Paris',
  },
	css: ['@/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
		vue: {
			template: {
						transformAssetUrls,
			},
		},
	},
	runtimeConfig: {
		tmdbApiKey: process.env.TMDB_API_KEY,
		tmdbReadToken: process.env.TMDB_READ_TOKEN 
	},
});
