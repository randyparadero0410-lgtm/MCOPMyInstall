# Implementation Instructions

Use this file when the real publishing system details are available and you need to replace the scaffold placeholders with production-ready values.

## 1. Environment Variables

Update [.env.example](./.env.example) and your local `.env` with the real values:

- `BASE_URL`: Real UI application URL.
- `AUTH_USERNAME`: Real test user name or email.
- `AUTH_PASSWORD`: Real test user password.
- `HEADLESS`: `true` or `false` depending on execution mode.

If additional variables are needed, add them in both places:

- [.env.example](./.env.example)
- [config/env.ts](./config/env.ts)

## 2. Authentication Flow

Define the authentication approach directly in tests and fixtures when the real application details are known.

- Keep tests independent by starting unauthenticated and logging in per test or per describe block when needed.
- If login should happen through the UI, perform authentication through [pages/login.page.ts](./pages/login.page.ts).
- If the application uses cookies or local storage and you choose performance over full isolation, create a dedicated setup for specific suites only.

Use browser storage state only when it makes the suite faster and more stable.

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

## 4. Test Data

Replace sample test data in [test-data/content.generator.ts](./test-data/content.generator.ts) with values that reflect the real system rules:

- Valid categories
- Required metadata fields
- Allowed tags
- Status values
- Content length constraints

If the platform has multiple content types, create separate generators for each UI workflow.

## 5. Test Assertions

Review and replace scaffold assertions in:

- [tests/ui/sample.spec.ts](./tests/ui/sample.spec.ts)
- [tests/e2e/publishing-workflow.spec.ts](./tests/e2e/publishing-workflow.spec.ts)

Update:

- Redirect URLs after login
- Visible success messages
- Workflow state transitions
- Metadata behavior specific to the real publishing system

## 6. Fixtures And Shared Setup

Review [fixtures/base.fixture.ts](./fixtures/base.fixture.ts) when you add more shared components.

Typical additions:

- Authenticated user roles such as author, editor, approver, publisher
- Shared navigation helpers
- Tenant or workspace setup

Only move setup into fixtures when it is reused across multiple test files.

## 7. Reporting And Execution

Review [playwright.config.ts](./playwright.config.ts) for environment-specific execution rules.

Common changes:

- Retry count in CI vs local
- Worker count
- Reporter configuration
- Storage state path
- Browser projects if you want Chromium, Firefox, and WebKit explicitly declared

If your CI pipeline collects Allure artifacts, keep `allure-results` as a stable output directory.

## 8. Suggested Replacement Order

Apply the real system details in this order:

1. Update `.env` and [config/env.ts](./config/env.ts).
2. Update authentication steps in fixtures/tests for real authentication.
3. Update page objects in [pages/login.page.ts](./pages/login.page.ts) and [pages/content.page.ts](./pages/content.page.ts).
4. Update generators and tests.
5. Run `npx tsc --noEmit`.
6. Run `npx playwright test --list`.
7. Run smoke tests.

## 9. What Is Still Placeholder Today

The following items are intentionally scaffold placeholders and should not be treated as final product logic:

- Demo URLs
- Demo login route and publish flow routes
- Demo UI labels and messages
- Demo metadata values such as `News`

Once the real system details are known, update these placeholders before relying on the framework for production automation coverage.