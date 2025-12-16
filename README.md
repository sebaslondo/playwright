# 🎭 Playwright MCP Prompts

This repository provides a structured setup of **Model Control Prompts (MCP)** to guide the team in **writing, maintaining, and standardizing Playwright tests**.

The goal is to ensure **consistency, quality, and efficiency** across all testing workflows by adapting the model’s behavior to different contexts.

---

## 📂 Project Structure

.
├── prompts/
├── instructions/
└── chatmodes/

### 📁 prompts/

Base prompts used to **initialize conversations** with the model and establish project context.

### 📁 instructions/

Global rules and best practices that **always apply** when writing Playwright tests.

### 📁 chatmodes/

Conversation modes that adjust the **tone, depth, and focus** of the model’s responses based on the task.

---

## 📑 Instructions (Global Rules)

The `instructions/` folder defines **mandatory standards** for all Playwright tests, regardless of the active chat mode.

It includes guidelines for:

- **Code quality**

  - Timeout handling
  - Clarity and readability
  - Reusability and consistency

- **Test structure**

  - Imports
  - Code organization
  - Hooks (`beforeEach`, `afterEach`, etc.)
  - Test titles and descriptions

- **File organization**

  - Location
  - Naming conventions
  - Separation of concerns

- **Best practices**
  - Robust selectors
  - Proper assertions
  - Parallel execution
  - Cross-browser testing

> These rules **always apply**, no matter which chat mode is selected.

---

## 💬 Chat Modes

The `chatmodes/` folder defines different conversation modes that adapt how the model responds:

- **QA Mode**  
  Strict, technical, and API-focused guidance.

- **DevOps Mode**  
  CI/CD and pipeline integration–focused answers.

- **Educational Mode**  
  Step-by-step, beginner-friendly explanations.

- **Reporting Mode**  
  Test summaries and result insights.

- **Exploratory Mode**  
  Creative brainstorming for test scenarios.

### 🧭 When to use each mode

| Use case              | Recommended mode |
| --------------------- | ---------------- |
| Writing new tests     | QA Mode          |
| Pipeline integration  | DevOps Mode      |
| Training / onboarding | Educational Mode |
| Sharing results       | Reporting Mode   |
| Expanding coverage    | Exploratory Mode |

---

## 🚀 Usage

1. Load the **initial prompt** to establish context.
2. **Instructions are applied automatically** to enforce Playwright standards.
3. Switch **chat modes** based on your task.

### Examples

- Use **Educational Mode** when training a new QA engineer
- Switch to **QA Mode** when reviewing a flaky test
- Use **Reporting Mode** when preparing a test summary

---

## ✅ Benefits

- Ensures consistency across all Playwright tests
- Adapts tone and depth per use case
- Speeds up onboarding
- Supports both daily testing and long-term quality goals
