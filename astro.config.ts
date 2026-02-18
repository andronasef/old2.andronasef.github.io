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

// https://astro.build/config
export default defineConfig({
  site: "https://annatools.me",
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
