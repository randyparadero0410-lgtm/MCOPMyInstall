import { test, expect } from '../../fixtures/base.fixture';
import { buildContentPayload } from '../../test-data/content.generator';
import { contentSchema } from '../../config/schemas';
import { validateSchema } from '../../utils/schema-validator';

test.describe('Content API', () => {
  test('create content returns valid schema @smoke @regression', async ({ publishingApi }) => {
    const payload = buildContentPayload();
    const response = await publishingApi.createContent(payload);

    expect(response.ok()).toBeTruthy();

    const json = await response.json();
    validateSchema(contentSchema, json);
  });
});
