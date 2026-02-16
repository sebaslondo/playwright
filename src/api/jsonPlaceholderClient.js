export class JsonPlaceholderClient {
  /**
   * @param {import('@playwright/test').APIRequestContext} request
   * @param {{baseURL: string, token: string}} config
   */
  constructor(request, config) {
    this.request = request;
    this.baseURL = config.baseURL;
    this.headers = {
      // Required by exercise: send token in every request
      Authorization: `Bearer ${config.token}`,
    };
  }

  async getUsers() {
    return this.request.get(`${this.baseURL}/users`, { headers: this.headers });
  }

  async getPostsByUser(userId) {
    return this.request.get(`${this.baseURL}/posts`, {
      headers: this.headers,
      params: { userId: String(userId) },
    });
  }

  async updatePostTitle(postId, title) {
    return this.request.patch(`${this.baseURL}/posts/${postId}`, {
      headers: { ...this.headers, "Content-Type": "application/json" },
      data: { title },
    });
  }

  async createPost({ userId, title, body }) {
    return this.request.post(`${this.baseURL}/posts`, {
      headers: { ...this.headers, "Content-Type": "application/json" },
      data: { userId, title, body },
    });
  }
}
