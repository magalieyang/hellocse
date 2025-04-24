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
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error expect error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
	],
	css: ['@/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
