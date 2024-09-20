import { z } from "zod";

export const envSchema = z.object({
  MAINTENANCE_MODE: z.string().default("false"),
  FEATURE_A: z.string().default("false"),
});

export type EnvSchemaType = z.infer<typeof envSchema>;
