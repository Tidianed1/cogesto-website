import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'data', // Important: It's JSON, not Markdown
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    sections: z.array(z.any()), // flexible array to hold different component props
  }),
});

export const collections = { pages };
