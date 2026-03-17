import { test, expect } from '../../fixtures/base.fixture';
import { playwrightHomeData } from '../../test-data/playwright-home.data';

test.describe('Playwright website', () => {
  test('should validate the home page title', async ({ playwrightHomePage }) => {
    await playwrightHomePage.goto();

    await expect(
      await playwrightHomePage.getTitle(),
      'Playwright home page title should match the expected value'
    ).toBe(playwrightHomeData.expectedTitle);
  });
});
