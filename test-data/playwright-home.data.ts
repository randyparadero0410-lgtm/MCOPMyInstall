import { env } from '../config/env';

export const playwrightHomeData = {
  url: env.playwrightSiteUrl,
  expectedTitle: env.playwrightSiteTitle
} as const;
