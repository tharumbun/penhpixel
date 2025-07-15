import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";
import undiciRetry from "./src/scripts/undici-retry.js";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; // correct integration

export default defineConfig({
  site: "https://www.erfianugrah.com",

  // ... image, markdown, fonts, etc.

  integrations: [
    tailwind(), // ADD THIS LINE
    icon(),
    sitemap(),
    mdx({
      // ...
    }),
    markdoc(),
    undiciRetry(),
    react(),
  ],

  // REMOVE this section:
  // vite: {
  //   plugins: [tailwindcss()],
  // },
});
