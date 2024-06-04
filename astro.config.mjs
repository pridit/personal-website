import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pridit.co.uk",
  integrations: [tailwind(), sitemap()],
  output: "static",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
