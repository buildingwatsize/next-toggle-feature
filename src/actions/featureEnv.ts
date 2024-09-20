"use server";

import { envSchema, EnvSchemaType } from "@/validations/envSchema";

const featureEnv = envSchema.parse({
  MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  FEATURE_A: process.env.FEATURE_A,
});

export const isEnableFeature = async (feature: keyof EnvSchemaType) => {
  return featureEnv[feature] === "true";
};
