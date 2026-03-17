import { test, expect } from '../../fixtures/base.fixture';
import { env } from '../../config/env';

test.describe('Authentication UI', () => {
  test('user can log in with valid credentials @smoke', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(env.authUsername || 'demo-user', env.authPassword || 'demo-password');

    // Dashboard URL assertion demonstrates successful authentication flow.
    await expect(page).toHaveURL(/dashboard|home/);
  });
});
