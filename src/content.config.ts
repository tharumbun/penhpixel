// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
// 2. Define a `type` and `schema` for each collection
const streetlife = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/places" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const architecture = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/moments" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const people = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/people" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});


const authors = defineCollection({
  // type: "content", // v2.5.0 and later
  loader: glob({ pattern: "**\/[^_]*.mdx", base: "./src/content/authors" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
    }).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  places,
  moments,
  people,
  authors,
};
