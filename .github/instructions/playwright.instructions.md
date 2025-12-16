# Playwright Instructions

## Test Writing Guidelines

### Code Quality Standards

- **Timeouts**: Rely on Playwright’s built-in auto-waiting mechanisms. Avoid hard-coded waits or increasing default timeouts unnecessarily.
- **Clarity**: Use descriptive test and step titles that clearly state the intent. Add comments only to explain complex logic or non-obvious interactions.
- **Reusability**: Prefer writing utility functions or fixtures for repeated actions instead of duplicating code across tests.
- **Consistency**: Follow the same structure and naming conventions throughout the test suite.

### Test Structure

- **Imports**: Always start with `import { test, expect } from '@playwright/test';`.
- **Organization**: Group related tests for a feature under a `test.describe()` block.
- **Hooks**: Use `beforeEach` and `afterEach` for setup and teardown common to all tests in a `describe` block.
- **Titles**: Follow a clear naming convention, such as `Feature - Specific action or scenario`.

### File Organization

- **Location**: Store all test files in the `tests/` directory or a defined subfolder.
- **Naming**: Use kebab-case file names, e.g., `login-flow.spec.ts`.
- **Separation**: Keep page objects, fixtures, and utilities in their dedicated folders.

### Best Practices

- **Selectors**: Use role-based or test-id selectors instead of brittle CSS or XPath when possible.
- **Assertions**: Keep assertions explicit and meaningful, e.g., `await expect(page).toHaveURL(...)`.
- **Parallelism**: Structure tests to run in parallel when appropriate, but avoid hidden dependencies between tests.
- **Cross-Browser**: Ensure coverage for Chromium, Firefox, and WebKit unless project requirements specify otherwise.
