# JSONPlaceholder API Automation Exercise

## Overview

This project contains automated API tests built using **Playwright (JavaScript)**.

The purpose of this exercise is to validate core API operations against the public JSONPlaceholder API while following clean architecture, maintainability, and senior-level automation best practices.

The automated tests cover:

- Retrieve a random user and validate email
- Fetch posts for a random user and validate ID range (1–100)
- Update the title of a random post
- Create a new post for a given user
- Include an authorization token in every request

---

## Tech Stack

- Node.js (18+ recommended)
- Playwright Test Runner
- JavaScript (ES6+)
- APIRequestContext (Playwright built-in API testing)

---

## Project Structure

.
├── src/
│ ├── api/
│ │ ├── jsonPlaceholderClient.js
│ │ └── validators.js
│ ├── fixtures/
│ │ └── apiFixtures.js
│ └── utils/
│ └── random.js
├── tests/
│ └── api/
│ └── jsonplaceholder.spec.js
├── playwright.config.js
├── package.json
└── README.md

### Structure Explanation

- **api/** → Reusable API client and validation helpers
- **fixtures/** → Centralized Playwright fixtures
- **utils/** → Shared utilities (e.g., random selector)
- **tests/** → Test specifications
- **playwright.config.js** → Global test configuration

This structure promotes scalability and maintainability.

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
npx playwright install
```

## Run Tests

npx playwright test

## View HTML report:

npx playwright show-report
