import { test, expect } from "../../src/fixtures/apiFixtures.js";
import { pickRandom } from "../../src/utils/random.js";
import { isIntBetween, isValidEmail } from "../../src/api/validators.js";

test.describe("JSONPlaceholder API - Exercise", () => {
  test("Get random user and print email", async ({ apiClient }) => {
    const res = await apiClient.getUsers();
    expect(res.ok()).toBeTruthy();

    const users = await res.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);

    const user = pickRandom(users);
    expect(Number.isInteger(user.id)).toBeTruthy();
    expect(isValidEmail(user.email)).toBeTruthy();

    console.log(`Random user: id=${user.id}, email=${user.email}`);
  });

  test("Fetch posts for random user, validate IDs 1..100, print title+id", async ({
    apiClient,
  }) => {
    const usersRes = await apiClient.getUsers();
    expect(usersRes.ok()).toBeTruthy();
    const users = await usersRes.json();

    const user = pickRandom(users);
    const postsRes = await apiClient.getPostsByUser(user.id);
    expect(postsRes.ok()).toBeTruthy();

    const posts = await postsRes.json();
    expect(Array.isArray(posts)).toBeTruthy();

    for (const post of posts) {
      expect(isIntBetween(post.id, 1, 100)).toBeTruthy();
      console.log(`Post: id=${post.id}, title="${post.title}"`);
    }

    // If you want a stricter check: if posts must exist for this exercise
    // expect(posts.length).toBeGreaterThan(0);
  });

  test("Update title for random post from user posts, print id+title", async ({
    apiClient,
  }) => {
    const usersRes = await apiClient.getUsers();
    expect(usersRes.ok()).toBeTruthy();
    const users = await usersRes.json();
    const user = pickRandom(users);

    const postsRes = await apiClient.getPostsByUser(user.id);
    expect(postsRes.ok()).toBeTruthy();
    const posts = await postsRes.json();

    // Edge handling: if a user has no posts (unlikely here), fail with clear reason
    expect(posts.length).toBeGreaterThan(0);

    const randomPost = pickRandom(posts);
    const newTitle = `Updated Title ${Date.now()}`;

    const patchRes = await apiClient.updatePostTitle(randomPost.id, newTitle);

    // JSONPlaceholder typically returns 200 on PATCH
    expect(patchRes.status()).toBe(200);

    const updated = await patchRes.json();
    expect(updated.id).toBe(randomPost.id);
    expect(updated.title).toBe(newTitle);

    console.log(`Updated post: id=${updated.id}, title="${updated.title}"`);
  });

  test("Create post with same userId, verify response", async ({
    apiClient,
  }) => {
    const usersRes = await apiClient.getUsers();
    expect(usersRes.ok()).toBeTruthy();
    const users = await usersRes.json();
    const user = pickRandom(users);

    const payload = {
      userId: user.id,
      title: `New Post ${Date.now()}`,
      body: "This is a test body",
    };

    const createRes = await apiClient.createPost(payload);

    // JSONPlaceholder commonly returns 201 for create
    expect([200, 201]).toContain(createRes.status());

    const created = await createRes.json();
    expect(created.userId).toBe(payload.userId);
    expect(created.title).toBe(payload.title);
    expect(created.body).toBe(payload.body);

    // JSONPlaceholder often returns id=101 for new posts
    expect(created.id).toBeDefined();

    console.log(`Created post: id=${created.id}, title="${created.title}"`);
  });
});
