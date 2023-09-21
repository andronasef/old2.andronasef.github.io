import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    img: z.string(),
    id: z.number(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
