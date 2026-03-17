import { test as base, expect, request, APIRequestContext } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ContentPage } from '../pages/content.page';
import { PublishingApiClient } from '../api-clients/publishing.api-client';
import { env } from '../config/env';

type FrameworkFixtures = {
  loginPage: LoginPage;
  contentPage: ContentPage;
  apiContext: APIRequestContext;
  publishingApi: PublishingApiClient;
};

export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  contentPage: async ({ page }, use) => {
    await use(new ContentPage(page));
  },

  apiContext: async ({}, use) => {
    const apiContext = await request.newContext({ baseURL: env.apiBaseUrl });
    await use(apiContext);
    await apiContext.dispose();
  },

  publishingApi: async ({ apiContext }, use) => {
    await use(new PublishingApiClient(apiContext));
  }
});

export { expect };
