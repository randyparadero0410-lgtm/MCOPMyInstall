# Implementation Instructions

Use this file when the real publishing system details are available and you need to replace the scaffold placeholders with production-ready values.

## 1. Environment Variables

Update [.env.example](./.env.example) and your local `.env` with the real values:

- `BASE_URL`: Real UI application URL.
- `API_BASE_URL`: Real API base URL.
- `AUTH_USERNAME`: Real test user name or email.
- `AUTH_PASSWORD`: Real test user password.
- `HEADLESS`: `true` or `false` depending on execution mode.

If additional variables are needed, add them in both places:

- [.env.example](./.env.example)
- [config/env.ts](./config/env.ts)

## 2. Authentication Flow

Replace the placeholder login API details in [global-setup.ts](./global-setup.ts):

- Change `/auth/login` to the real authentication endpoint.
- Change the request body keys if the API expects different field names.
- Change token extraction if the response uses a different shape.
- Change local storage key `authToken` if the UI uses a different auth storage mechanism.

If the application uses cookies instead of local storage, save the authenticated browser state returned by the real login flow instead of writing local storage manually.

## 3. UI Routes And Selectors

Replace placeholder URLs and locators in the page objects:

- [pages/login.page.ts](./pages/login.page.ts)
- [pages/content.page.ts](./pages/content.page.ts)

Review and update:

- Page routes such as `/login` and `/content/new`
- Labels used by `getByLabel`
- Button names used by `getByRole`
- Any success or status messages asserted in tests

If the UI is dynamic or heavily customized, prefer stable selectors such as `data-testid` attributes.

## 4. API Endpoints And Payloads

Replace the placeholder publishing endpoints in [api-clients/publishing.api-client.ts](./api-clients/publishing.api-client.ts):

- `/contents`
- `/contents/{id}`
- `/contents/{id}/publish`

Update request and response shapes to match the real API contract:

- `ContentPayload`
- publish request body
- content identifiers and field names

If the system exposes separate endpoints for metadata, workflow approval, or publishing states, add new client methods in the same file or split them into additional client classes.

## 5. API Schema Validation

Replace the sample Zod schemas in [config/schemas.ts](./config/schemas.ts) with real contract definitions.

Update at least:

- Authentication response schema
- Content creation response schema
- Content read response schema
- Publish response schema if applicable

Keep schema validation close to the real API behavior so tests fail on contract drift instead of silently accepting invalid payloads.

## 6. Test Data

Replace sample test data in [test-data/content.generator.ts](./test-data/content.generator.ts) with values that reflect the real system rules:

- Valid categories
- Required metadata fields
- Allowed tags
- Status values
- Content length constraints

If the platform has multiple content types, create separate generators for each content model.

## 7. Test Assertions

Review and replace scaffold assertions in:

- [tests/ui/login.spec.ts](./tests/ui/login.spec.ts)
- [tests/api/content-api.spec.ts](./tests/api/content-api.spec.ts)
- [tests/e2e/publishing-workflow.spec.ts](./tests/e2e/publishing-workflow.spec.ts)

Update:

- Redirect URLs after login
- Visible success messages
- Returned response fields
- Workflow state transitions
- Metadata behavior specific to the real publishing system

## 8. Fixtures And Shared Setup

Review [fixtures/base.fixture.ts](./fixtures/base.fixture.ts) when you add more shared components.

Typical additions:

- Authenticated user roles such as author, editor, approver, publisher
- Shared navigation helpers
- Common API clients
- Tenant or workspace setup

Only move setup into fixtures when it is reused across multiple test files.

## 9. Reporting And Execution

Review [playwright.config.ts](./playwright.config.ts) for environment-specific execution rules.

Common changes:

- Retry count in CI vs local
- Worker count
- Reporter configuration
- Storage state path
- Browser projects if you want Chromium, Firefox, and WebKit explicitly declared

If your CI pipeline collects Allure artifacts, keep `allure-results` as a stable output directory.

## 10. Suggested Replacement Order

Apply the real system details in this order:

1. Update `.env` and [config/env.ts](./config/env.ts).
2. Update [global-setup.ts](./global-setup.ts) for real authentication.
3. Update page objects in [pages/login.page.ts](./pages/login.page.ts) and [pages/content.page.ts](./pages/content.page.ts).
4. Update API clients in [api-clients/publishing.api-client.ts](./api-clients/publishing.api-client.ts).
5. Replace schemas in [config/schemas.ts](./config/schemas.ts).
6. Update generators and tests.
7. Run `npx tsc --noEmit`.
8. Run `npx playwright test --list`.
9. Run smoke tests.

## 11. What Is Still Placeholder Today

The following items are intentionally scaffold placeholders and should not be treated as final product logic:

- Demo URLs
- Demo login route and storage token name
- Demo endpoints under `/auth/login` and `/contents`
- Demo UI labels and messages
- Demo metadata values such as `News`
- Demo response schema assumptions

Once the real system details are known, update these placeholders before relying on the framework for production automation coverage.