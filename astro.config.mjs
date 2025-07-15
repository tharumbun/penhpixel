import { defineConfig, fontProviders } from "astro/config";
// ... other imports

export default defineConfig({
  site: "https://www.erfianugrah.com",

  // your existing config ...

  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inconsolata",
        cssVariable: "--font-inconsolata",
        display: "swap",
        fallbacks: ["monospace"],
        weights: [200, 400, 700, 900],
        optimizedFallbacks: true,
      },
      {
        provider: fontProviders.fontsource(),
        name: "Overpass Mono",
        cssVariable: "--font-overpass-mono",
        display: "swap",
        fallbacks: ["monospace"],
        weights: [300, 400, 700],
        optimizedFallbacks: true,
      },
    ],
  },

  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mdx({
      // ...
    }),
    markdoc(),
    undiciRetry(),
    react(),
  ],

  // remove vite.plugins with tailwindcss, that's right

});
