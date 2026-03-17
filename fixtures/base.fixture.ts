import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ContentPage } from '../pages/content.page';

type FrameworkFixtures = {
  loginPage: LoginPage;
  contentPage: ContentPage;
};

export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  contentPage: async ({ page }, use) => {
    await use(new ContentPage(page));
  }
});

export { expect };
