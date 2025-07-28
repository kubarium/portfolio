import ViteYaml from "@modyfi/vite-plugin-yaml";
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
    "@nuxt/icon",
    "nuxt-codemirror",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), ViteYaml()],
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  app: {
    head: {
      title: "Kumsal Obuz - Founder, Developer, Educator",
    },
  },
});