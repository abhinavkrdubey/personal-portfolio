import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    impact: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(99),
    featured: z.boolean().default(true),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

// Flexible page content: each page has different fields, all editable as Markdown frontmatter.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
});

export const collections = { projects, pages, experience };
