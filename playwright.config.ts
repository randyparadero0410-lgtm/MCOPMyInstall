import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 2,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60_000,
  expect: {
    timeout: 10_000
  },
  outputDir: 'reports/test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL: env.baseUrl,
    headless: env.headless,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  }
});
