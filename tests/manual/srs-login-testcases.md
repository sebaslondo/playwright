# Manual QA – Test Cases (Based on SRS)

## Feature: Authentication (Login / Logout)

---

## TC-M1 — Successful Login (P0)

**Requirement Reference:** 6.1.2, 6.1.7

**Preconditions:**

- User is not logged in.
- User exists in the database.
- User credentials meet username/password rules.

**Steps:**

1. Open the application.
2. Enter valid username.
3. Enter valid password.
4. Click **Login**.

**Expected Results:**

- User is authenticated.
- Login state is stored in the server session.
- Functionality page is displayed.
- No error messages appear.

---

## TC-M2 — Failed Login with Unregistered Credentials (P0 – Negative)

**Requirement Reference:** 6.1.4.1

**Preconditions:**

- User is not registered in the database.

**Steps:**

1. Open the application.
2. Enter invalid username and/or password.
3. Click **Login**.

**Expected Results:**

- User is NOT authenticated.
- Error message is displayed.
- User remains on login page.
- User is prompted to re-enter credentials.

---

## TC-M3 — Logout from Authenticated Session (P0)

**Requirement Reference:** 6.1.3.1, 6.1.8

**Preconditions:**

- User is logged in.

**Steps:**

1. Navigate to any page within the application.
2. Click **Logout**.

**Expected Results:**

- User session is terminated.
- User is redirected or informed they are logged out.
- Access to protected pages requires login again.

---

## TC-M4 — Unauthenticated Access to Protected Page (P0 – Security)

**Requirement Reference:** 6.1.6

**Preconditions:**

- User is not logged in.

**Steps:**

1. Attempt to access a protected page directly via URL.

**Expected Results:**

- User is redirected to login page.
- No protected information is displayed.
- User must provide valid credentials to proceed.

---

## TC-M5 — Session Timeout After 20 Minutes of Inactivity (P1)

**Requirement Reference:** 6.1.9

**Preconditions:**

- User is logged in.

**Steps:**

1. Remain inactive for more than 20 minutes.
2. Attempt to navigate or perform an action.

**Expected Results:**

- Session expires.
- User is required to log in again.
- Clear session expiration message (if defined).

---

## TC-M6 — Remember Me Functionality (P1)

**Requirement Reference:** 6.1.10

**Preconditions:**

- Valid user account exists.

**Steps:**

1. Check the **Remember Me** checkbox.
2. Login with valid credentials.
3. Close the browser.
4. Reopen the browser and revisit the application.

**Expected Results:**

- User remains logged in (if feature is correctly implemented).
- No need to re-enter credentials.

---

# Input Validation Test Cases

---

## TC-M7 — Username Validation (Boundary & Negative)

**Requirement Reference:** 6.2.1

**Rules:**

- Length: 5–10 characters
- Allowed ASCII ranges:
  - 48–57 (0–9)
  - 65–90 (A–Z)
  - 97–122 (a–z)

### Test Variations

| Scenario             | Input                      | Expected Result |
| -------------------- | -------------------------- | --------------- |
| Below minimum length | 4 characters               | Rejected        |
| Minimum length       | 5 valid chars              | Accepted        |
| Maximum length       | 10 valid chars             | Accepted        |
| Above maximum        | 11 characters              | Rejected        |
| Invalid characters   | space, `_`, accented chars | Rejected        |

---

## TC-M8 — Password Validation (Boundary & Negative)

**Requirement Reference:** 6.2.3

**Rules:**

- Exactly 6 characters
- Only lowercase letters (ASCII 97–122)

### Test Variations

| Scenario            | Input     | Expected Result |
| ------------------- | --------- | --------------- |
| 5 characters        | `abcde`   | Rejected        |
| 6 lowercase letters | `abcdef`  | Accepted        |
| Contains uppercase  | `abcDeF`  | Rejected        |
| Contains digits     | `abc123`  | Rejected        |
| 7 characters        | `abcdefg` | Rejected        |

---

## TC-M9 — Robustness: Invalid Input Handling (P0)

**Requirement Reference:** 6.3.1

**Preconditions:**

- Application is accessible.

**Steps:**

1. Enter invalid or malformed inputs in username/password.
2. Submit the form.

**Expected Results:**

- Application does not crash.
- No server errors are exposed.
- No data corruption occurs.
- Proper validation message is displayed.

---

# Prioritization Summary

| Priority | Area                                                  |
| -------- | ----------------------------------------------------- |
| P0       | Login, Logout, Security Access, Validation Core Rules |
| P1       | Session Timeout, Remember Me                          |
| P2       | UI Messaging Refinements                              |
