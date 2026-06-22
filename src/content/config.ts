import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  featured: z.boolean().default(false),
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),
});

const essays = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    readingTime: z.string(),
    deck: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    location: z.string().optional(),
  }),
});

const photoStories = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    deck: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
    ),
  }),
});

const work = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    client: z.string().optional(),
    role: z.string(),
    year: z.string(),
    outcomes: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = {
  essays,
  notes,
  "photo-stories": photoStories,
  work,
};
