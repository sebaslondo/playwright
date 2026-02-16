import { test as base, expect } from "@playwright/test";
import { JsonPlaceholderClient } from "../api/jsonPlaceholderClient.js";

export const test = base.extend({
  apiClient: async ({ request }, use) => {
    const client = new JsonPlaceholderClient(request, {
      baseURL: process.env.BASE_URL || "https://jsonplaceholder.typicode.com",
      token: "THIS-IS-A-FAKE-TOKEN",
    });
    await use(client);
  },
});

export { expect };
