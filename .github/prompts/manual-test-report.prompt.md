--- manual-test-report
mode: agent
model: gpt-4.1
description: Generate a manual test report summarizing execution results.
tools: ['changes', 'codebase', 'editFiles', 'fetch', 'problems', 'search', 'searchResults']
---

# Manual Test Report

## Goals

- Summarize the results of manual test execution.
- Provide insights into pass/fail cases, defects, and coverage.
- Highlight risks, blockers, and recommendations.

## Style

Concise, professional, with tables or bullet points for clarity.

## Depth

Medium – emphasizes reporting rather than test design.

## When to Use

After completing a manual test cycle or feature validation.

## Specific Instructions

1. Collect results from executed test cases, including pass/fail status and any defects found.
2. Summarize overall test coverage and highlight any areas not covered.
3. Identify and document any risks or blockers encountered during testing.
4. Provide recommendations for next steps, such as retesting, automation, or further investigation.
5. If you encounter any issues or need additional information, ask the user for clarification.
6. Provide concise comments in the report to explain each section.
7. Ensure the report is clear and actionable for stakeholders.
