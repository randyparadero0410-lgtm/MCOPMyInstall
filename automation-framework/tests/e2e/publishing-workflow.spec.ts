import { test, expect } from '../../fixtures/base.fixture';
import { buildContentPayload } from '../../test-data/content.generator';

test.describe('Publishing workflow', () => {
  test('author creates metadata and publishes content @regression', async ({ contentPage, publishingApi, page }) => {
    const payload = buildContentPayload();

    await contentPage.gotoNewContent();
    await contentPage.createDraft(payload.title, payload.body, payload.metadata.category);

    const createResponse = await publishingApi.createContent(payload);
    expect(createResponse.ok()).toBeTruthy();

    const created = (await createResponse.json()) as { id: string };
    const publishResponse = await publishingApi.publishContent(String(created.id));
    expect(publishResponse.ok()).toBeTruthy();

    await contentPage.publish();
    await expect(page.getByText(/published successfully|status: published/i)).toBeVisible();
  });
});
