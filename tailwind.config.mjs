/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"mora-purple": {
					50: "hsl(310, 100%, 98%)",
					100: "hsl(310, 100%, 95%)",
					200: "hsl(310, 100%, 90%)",
					300: "hsl(312, 100%, 83%)",
					400: "hsl(312, 100%, 72%)",
					500: "hsl(312, 93%, 61%)",
					600: "hsl(313, 77%, 49%)",
					700: "hsl(314, 80%, 40%)",
					800: "hsl(315, 77%, 33%)",
					900: "hsl(316, 71%, 28%)",
					950: "hsl(316, 100%, 22%)",
				},
				"mora-black": {
					50: "hsl(120, 6%, 97%)",
					100: "hsl(108, 9%, 89%)",
					200: "hsl(109, 10%, 78%)",
					300: "hsl(109, 9%, 64%)",
					400: "hsl(111, 8%, 50%)",
					500: "hsl(113, 9%, 40%)",
					600: "hsl(112, 9%, 32%)",
					700: "hsl(115, 8%, 26%)",
					800: "hsl(113, 8%, 22%)",
					900: "hsl(111, 7%, 19%)",
					950: "hsl(120, 9%, 2%)",
				},
				"baby-powder": "#fdfffc",
				"delft-blue": {
					50: "hsl(210, 100%, 97%)",
					100: "hsl(209, 95%, 93%)",
					200: "hsl(209, 100%, 87%)",
					300: "hsl(207, 98%, 78%)",
					400: "hsl(208, 95%, 68%)",
					500: "hsl(212, 93%, 60%)",
					600: "hsl(217, 85%, 53%)",
					700: "hsl(220, 78%, 48%)",
					800: "hsl(222, 72%, 40%)",
					900: "hsl(220, 65%, 33%)",
					950: "hsl(222, 58%, 24%)",
				},
				"fairy-tale": {
					50: "hsl(342, 87%, 97%)",
					100: "hsl(341, 93%, 95%)",
					200: "hsl(340, 100%, 89%)",
					300: "hsl(341, 100%, 82%)",
					400: "hsl(342, 100%, 70%)",
					500: "hsl(345, 96%, 60%)",
					600: "hsl(348, 84%, 51%)",
					700: "hsl(349, 92%, 42%)",
					800: "hsl(350, 88%, 35%)",
					900: "hsl(350, 82%, 30%)",
					950: "hsl(350, 100%, 17%)",
				},
				"ultra-violet": {
					50: "hsl(240, 37%, 97%)",
					100: "hsl(240, 30%, 93%)",
					200: "hsl(240, 32%, 87%)",
					300: "hsl(238, 33%, 78%)",
					400: "hsl(240, 32%, 68%)",
					500: "hsl(243, 31%, 60%)",
					600: "hsl(247, 28%, 53%)",
					700: "hsl(250, 26%, 44%)",
					800: "hsl(251, 24%, 40%)",
					900: "hsl(252, 21%, 33%)",
					950: "hsl(251, 20%, 21%)",
				},
			},
		},
	},
	plugins: [],
};
