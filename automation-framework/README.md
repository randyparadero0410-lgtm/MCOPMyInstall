# Playwright Automation Framework

This project is a scalable Playwright + TypeScript automation framework for a publishing system.

See [IMPLEMENTATION-INSTRUCTIONS.md](./IMPLEMENTATION-INSTRUCTIONS.md) for the exact placeholders to replace when real environment variables, API contracts, and UI details are available.

## Architecture Notes

- UI automation uses Page Object Model classes in `pages/`.
- API automation uses an API client abstraction in `api-clients/`.
- Reusable setup is centralized in `fixtures/base.fixture.ts`.
- Test data is generated in `test-data/` for deterministic, modular test creation.
- Environment values are loaded from `.env` through `config/env.ts`.
- Global authentication state is created in `global-setup.ts` and reused via `storageState`.
- API contract checks use Zod schemas in `config/schemas.ts` and `utils/schema-validator.ts`.

## Folder Structure

automation-framework

- tests/ui
- tests/api
- tests/e2e
- pages
- api-clients
- fixtures
- test-data
- utils
- config
- reports

## Key Features

- Parallel execution (`fullyParallel: true`)
- Retry logic (`retries: 2`)
- Screenshots and traces on failure
- HTML reporting (`reports/html-report`)
- Allure reporting support (`allure-results`)
- Smoke and regression tagging (`@smoke`, `@regression`)

## Setup

1. Install dependencies:
   - `npm install`
2. Install Playwright browsers:
   - `npx playwright install`
3. Copy environment file:
   - `copy .env.example .env`
4. Run tests:
   - `npm test`
   - `npm run test:smoke`
   - `npm run test:regression`
