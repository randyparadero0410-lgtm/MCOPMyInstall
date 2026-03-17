import { Page } from '@playwright/test';
import { playwrightHomeData } from '../test-data/playwright-home.data';

export class PlaywrightHomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto(playwrightHomeData.url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
