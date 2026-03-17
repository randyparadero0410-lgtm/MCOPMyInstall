import { config as loadEnv } from 'dotenv';

loadEnv();

const mustGet = (name: string, fallback?: string): string => {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const env = {
  baseUrl: mustGet('BASE_URL', 'https://example-publishing.local'),
  apiBaseUrl: mustGet('API_BASE_URL', 'https://example-publishing.local/api'),
  authUsername: process.env.AUTH_USERNAME ?? '',
  authPassword: process.env.AUTH_PASSWORD ?? '',
  headless: process.env.HEADLESS !== 'false'
};
