You are a senior SDET helping design a modern automation framework.

Create a scalable test automation framework using Playwright with TypeScript.

Requirements:

1. The framework must support:
   - UI automation
   - API automation
   - End-to-end workflow tests
   - reusable test utilities
   - environment configuration

2. Use Playwright test runner.

3. Implement best practices:
   - Page Object Model for UI
   - API client abstraction layer
   - fixtures for reusable setup
   - test data generators
   - environment configuration using .env
   - reusable utilities

4. Project structure should look like this:

automation-framework
│
├── tests
│   ├── ui
│   ├── api
│   └── e2e
│
├── pages
│
├── api-clients
│
├── fixtures
│
├── test-data
│
├── utils
│
├── config
│
└── reports

5. Include examples of:

- UI Page Object
- API Client class
- sample UI test
- sample API test
- environment configuration
- base test fixture
- test data generator

6. Use TypeScript best practices.

7. Enable Playwright features:
   - parallel execution
   - screenshots on failure
   - trace viewer
   - HTML report

8. Include comments explaining the architecture.

9. Assume this framework will test a publishing system with:
   - authentication
   - content creation
   - metadata
   - publishing workflow

10. Keep code modular and easy to scale for large test suites.

Also include:

- Playwright global setup
- authentication state reuse
- test tagging (smoke, regression)
- retry logic
- Allure reporting support
- API schema validation