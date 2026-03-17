import { z } from 'zod';

export const validateSchema = <TSchema extends z.ZodTypeAny>(schema: TSchema, payload: unknown): z.infer<TSchema> => {
  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const details = parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');
    throw new Error(`Schema validation failed: ${details}`);
  }
  return parsed.data;
};
