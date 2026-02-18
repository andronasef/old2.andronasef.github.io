import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { i18n } from "astro-i18n-aut/integration";

const defaultLocale = "ar";
const locales = {
  en: "en",
  ar: "ar",
};

export default defineConfig({
  // 1. Update site to your GitHub Pages URL
  site: "https://andronasef.github.io",
  
  // 2. Add the repository name as the base path
  base: "/old2.andronasef.github.io",
  
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    i18n({
      locales,
      defaultLocale,
    }),
  ],
});
