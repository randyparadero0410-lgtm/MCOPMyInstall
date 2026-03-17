import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { PlaywrightHomePage } from '../pages/playwright-home.page';

type FrameworkFixtures = {
  loginPage: LoginPage;
  playwrightHomePage: PlaywrightHomePage;
};

export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },


  playwrightHomePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  }
});

export { expect };
