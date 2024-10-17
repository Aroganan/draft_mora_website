import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), svelte()],
	output: "hybrid",
	redirects: {
		"/": `/${defaultLang}/`,
		"/modelpaper":
			"https://drive.google.com/drive/folders/1pAzO3OQ7nwBLuJ_gU-4vY12x6eENrwPz",
		"/feedback": "https://forms.gle/Ca6k2rH6FNCn6NTB8",
		"/results": `/${defaultLang}/results`,
		"/indexnumber": `/${defaultLang}/indexnumber`,
		"/checkstudent": `/${defaultLang}/checkstudent`,
		"/practicepapers": `/${defaultLang}/practicepapers`,
		"/instructions": `/${defaultLang}/instructions_ta`,
		"/instructions_ta": `/${defaultLang}/instructions_ta`,
		"/instructions_en": `/${defaultLang}/instructions_en`,
		"/exampapers": `/${defaultLang}/exampapers`,
		"/manage": "https://moraetamils.com/manage",
		"/tshirt": "https://forms.gle/SJTHD5c5kqkegARk9",
		"/moraexamadmissionform": "https://forms.gle/shTKWksUk7KSkjrV6",
	},
	adapter: netlify({
		edgeMiddleware: true,
	}),
	// site: "https://astounding-brigadeiros-506019.netlify.app",
});
