import { defineCollection } from "astro:content";
import { glob  } from 'astro/loaders';
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern:"**/*.{md}"}),
  schema: z.object({
    title: z.string(),
    img: z.string(),
    imgDescription: z.string(),
    description: z.string(),
    urlPath: z.string(),
  }),
});

const cards = defineCollection({
  loader: glob({ base: "./src/content/cards", pattern:"**/*.{md}"}),
  schema: z.object({
    title: z.string(),
    img: z.string(),
    imgDescription: z.string(),
    description: z.string(),
    urlPath: z.string(),
  }),
});

export const collections = { cards, services };