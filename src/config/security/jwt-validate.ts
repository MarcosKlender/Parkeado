import { jwtDecode } from "jwt-decode";

type Claims = {
  sub?: string;
  iss?: string;
  aud?: string | string[];
  iat?: number;
  exp?: number;
};

export type JwtValidationOpts = {
  /** Expected issuer (e.g., "https://parkeado.backend.app/") */
  expectedIss: string;

  /** Expected audience (e.g., "parkeado-app") */
  expectedAud: string;

  /** Allowed clock skew in seconds to tolerate small time differences (default: 120s) */
  clockSkewSec?: number;

  /** Maximum token lifetime in seconds (optional) */
  maxLifetimeSec?: number;
};

/**
 * Validates the claims of a decoded JWT token against provided expectations.
 * 
 * The validation includes:
 * - Structural validity of the token
 * - Required `exp` claim presence and expiration check
 * - Optional `iat` claim not being in the future
 * - Matching `iss` (issuer) with the expected value
 * - Matching `aud` (audience) with the expected value (supports string or array)
 * - Optional maximum lifetime check (`exp - iat <= maxLifetimeSec`)
 *
 * @param {string} token - The JWT token to validate.
 * @param {JwtValidationOpts} opts - Validation options for issuer, audience, and time constraints.
 * @returns 
 * An object containing:
 * - `{ ok: true, claims }` if the token is valid.
 * - `{ ok: false, reason, claims? }` if validation fails, with the specific reason.
 *
 * Possible `reason` values:
 * - `"TOKEN_MALFORMED"`: Token cannot be parsed.
 * - `"EXP_MISSING"`: Missing expiration claim.
 * - `"TOKEN_EXPIRED"`: Expired according to `exp`.
 * - `"IAT_IN_FUTURE"`: Issued-at is in the future.
 * - `"ISS_MISMATCH"`: Issuer does not match.
 * - `"AUD_MISMATCH"`: Audience does not match.
 * - `"LIFETIME_TOO_LONG"`: Lifetime exceeds `maxLifetimeSec`.
 *
 * @example
 * const result = validateJwtClaims(token, {
 *   expectedIss: "https://parkeado.backend.app/",
 *   expectedAud: "parkeado-app",
 *   clockSkewSec: 60,
 *   maxLifetimeSec: 3600
 * });
 *
 * if (result.ok) {
 *   console.log("Valid claims:", result.claims);
 * } else {
 *   console.error("Invalid token:", result.reason);
 * }
 */
export function validateJwtClaims(token: string, opts: JwtValidationOpts) {
  const { expectedIss, expectedAud, clockSkewSec = 120, maxLifetimeSec } = opts;
  let claims: Claims;

  try {
    claims = jwtDecode<Claims>(token);
  } catch {
    return { ok: false, reason: "TOKEN_MALFORMED" as const };
  }

  const now = Math.floor(Date.now() / 1000);

  // exp required and not expired (with skew)
  if (typeof claims.exp !== "number") {
    return { ok: false, reason: "EXP_MISSING" as const, claims };
  }
  if (claims.exp <= now - clockSkewSec) {
    return { ok: false, reason: "TOKEN_EXPIRED" as const, claims };
  }

  // iat must not be in the future (with skew)
  if (typeof claims.iat === "number" && claims.iat > now + clockSkewSec) {
    return { ok: false, reason: "IAT_IN_FUTURE" as const, claims };
  }

  // issuer must match exactly
  if (claims.iss !== expectedIss) {
    return { ok: false, reason: "ISS_MISMATCH" as const, claims };
  }

  // audience must match expected (supports string or array)
  const audOk = Array.isArray(claims.aud)
    ? claims.aud.includes(expectedAud)
    : claims.aud === expectedAud;
  if (!audOk) {
    return { ok: false, reason: "AUD_MISMATCH" as const, claims };
  }

  // maximum token lifetime (if configured)
  if (typeof claims.iat === "number" && typeof claims.exp === "number" && maxLifetimeSec) {
    if (claims.exp - claims.iat > maxLifetimeSec + clockSkewSec) {
      return { ok: false, reason: "LIFETIME_TOO_LONG" as const, claims };
    }
  }

  return { ok: true as const, claims };
}
