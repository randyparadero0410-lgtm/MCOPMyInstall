import { z } from 'zod';

export const contentSchema = z.object({
  id: z.string().or(z.number()),
  title: z.string(),
  body: z.string(),
  metadata: z.object({
    category: z.string(),
    tags: z.array(z.string()),
    status: z.string()
  })
});

export const authResponseSchema = z.object({
  accessToken: z.string().optional(),
  token: z.string().optional()
});
