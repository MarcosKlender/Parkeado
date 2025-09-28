import { jwtDecode } from "jwt-decode";

const FALLBACK_TTL_MS = 3_600_000; // = JWT_EXPIRATION backend (1h)

/**
 * Extracts the expiration timestamp (`exp`) from a JWT token.
 * If the token does not contain `exp`, it will attempt to calculate a fallback
 * using the issued-at (`iat`) field plus a predefined TTL (1 hour).
 * If decoding fails or required fields are missing, it returns `null`.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {number | null} - Expiration time as a UNIX timestamp in seconds, or `null` if unavailable.
 *
 * @example
 * const exp = getExpFromJwtOrFallback(myToken);
 * if (exp && exp * 1000 > Date.now()) {
 *   console.log("Token is still valid");
 * } else {
 *   console.log("Token expired or invalid");
 * }
 */
export function getExpFromJwtOrFallback(token: string): number | null {
  try {
    const { exp, iat } = jwtDecode<{ exp?: number; iat?: number }>(token);

    if (typeof exp === "number") return exp; // UNIX seconds

    // fallback: if no exp, calculate from iat + TTL (in seconds)
    if (typeof iat === "number")
      return iat + Math.floor(FALLBACK_TTL_MS / 1000);

    return null;
  } catch {
    return null;
  }
}
