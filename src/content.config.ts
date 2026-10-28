import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    period: z.string(),
    summary: z.string(),
    category: z.enum(['实习经历', '研究成果', '个人项目']),
    backAnchor: z.string(),
    tags: z.array(z.string()),
    facts: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { cases };
