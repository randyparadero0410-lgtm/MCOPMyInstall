import { test, expect } from '../../fixtures/base.fixture';
import { buildContentData } from '../../test-data/content.generator';

test.describe('Publishing workflow', () => {
  test('author creates metadata and publishes content @regression', async ({ contentPage, page }) => {
    const content = buildContentData();

    await contentPage.gotoNewContent();
    await contentPage.createDraft(content.title, content.body, content.category);

    await contentPage.publish();
    await expect(page.getByText(/published successfully|status: published/i)).toBeVisible();
  });
});
