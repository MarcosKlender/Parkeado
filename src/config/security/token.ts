const TOKEN_KEY = "token";

/**
 * Retrieves the JWT token from session storage.
 *
 * @returns {string | null} The stored token, or `null` if not found.
 *
 * @example
 * const token = getToken();
 * if (token) {
 *   console.log("Token available:", token);
 * }
 */
export function getToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}

/**
 * Stores a JWT token in session storage under the predefined key.
 *
 * @param {string} token - The token to store.
 *
 * @example
 * setToken("my.jwt.token");
 */
export function setToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

/**
 * Removes the JWT token from session storage.
 * Additionally, it clears the entire session storage, not just the token entry.
 * 
 *  **Warning**: Calling `sessionStorage.clear()` will remove all session keys,
 * not only the token. Use with caution if other session values are stored.
 *
 * @example
 * clearToken();
 * // Token and all session storage items are now removed
 */
export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.clear();
}
