// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	pages: true,
	devtools: { enabled: true },
	modules: [
		"nuxt-icon",
		"nuxt-lodash",
		"@nuxtjs/supabase",
		"@nuxtjs/tailwindcss",
		"@pinia-plugin-persistedstate/nuxt",
		"@pinia/nuxt",
	],
	supabase: {
		redirectOptions: {
			login: "/login",
			callback: "/confirm",
			exclude: ["/*"],
		},
	},
	runtimeConfig: {
		public: {
			stripePk: process.env.STRIPE_PK_KEY,
		},
	},
	app: {
		head: {
			script: [
				{
					src: "https://js.stripe.com/v3/",
					defer: true,
				},
			],
		},
	},
});
