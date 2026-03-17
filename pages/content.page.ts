import { Locator, Page } from '@playwright/test';

export class ContentPage {
  private readonly page: Page;
  private readonly titleInput: Locator;
  private readonly bodyInput: Locator;
  private readonly categorySelect: Locator;
  private readonly saveDraftButton: Locator;
  private readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByLabel(/title/i);
    this.bodyInput = page.getByLabel(/body|content/i);
    this.categorySelect = page.getByLabel(/category/i);
    this.saveDraftButton = page.getByRole('button', { name: /save draft/i });
    this.publishButton = page.getByRole('button', { name: /publish/i });
  }

  async gotoNewContent(): Promise<void> {
    await this.page.goto('/content/new');
  }

  async createDraft(title: string, body: string, category: string): Promise<void> {
    await this.titleInput.fill(title);
    await this.bodyInput.fill(body);
    await this.categorySelect.selectOption({ label: category });
    await this.saveDraftButton.click();
  }

  async publish(): Promise<void> {
    await this.publishButton.click();
  }
}
