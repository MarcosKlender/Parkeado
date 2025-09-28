// src/lib/auth/auto-logout.ts
import { clearToken, getToken } from "./token";
import { getExpFromJwtOrFallback } from "./get-exp";
import { notify } from "@/components/helpers/notify";

let expTimer: number | undefined;
let warnTimer: number | undefined;

type Options = {
  /** 
   * Milliseconds before the actual token expiration when the user should be warned.  
   * Example: `60_000` (warn 1 minute before expiration).  
   * Default: `60_000`.  
   */
  warnBeforeMs?: number;
};

/**
 * Schedules automatic logout and optional pre-expiration warning based on the JWT `exp` claim.  
 *
 * Workflow:
 * 1. Clears any existing expiration/warning timers.
 * 2. Reads the JWT from storage and extracts the expiration time (`exp`).
 * 3. If no expiration is found, the user is logged out immediately for security.
 * 4. If valid, calculates remaining time until expiration (`msLeft`).
 * 5. Schedules a warning (`notify.aboutToExpire`) before expiration if enough time remains.
 * 6. Schedules forced logout (`notify.expired` + token clear + redirect) slightly before expiration (5s margin).
 *
 * @param {Options} opts - Optional configuration for scheduling the warning.
 *
 * @example
 * // Default usage (warn 1 min before expiration, auto-logout on expiry)
 * scheduleAutoLogout();
 *
 * @example
 * // Custom warning: warn 5 minutes before expiration
 * scheduleAutoLogout({ warnBeforeMs: 5 * 60_000 });
 */
export function scheduleAutoLogout(opts: Options = {}) {
  const { warnBeforeMs = 60_000 } = opts;

  // Clear previously scheduled timers (avoid duplicates)
  if (expTimer) window.clearTimeout(expTimer);
  if (warnTimer) window.clearTimeout(warnTimer);

  const token = getToken();
  if (!token) return;

  const exp = getExpFromJwtOrFallback(token); // expiration in UNIX seconds
  if (!exp) {
    // No expiration claim → force logout for security
    clearToken();
    notify.expired();
    if (window.location.pathname !== "/") window.location.replace("/");
    return;
  }

  const msLeft = exp * 1000 - Date.now();

  // Schedule pre-expiration warning
  if (msLeft > warnBeforeMs && warnBeforeMs > 0) {
    warnTimer = window.setTimeout(() => {
      const seconds = Math.max(Math.floor((exp * 1000 - Date.now()) / 1000), 1);
      notify.aboutToExpire(seconds);
    }, msLeft - warnBeforeMs);
  } else if (msLeft > 0 && warnBeforeMs > 0) {
    // If less than threshold remains, warn immediately
    const seconds = Math.max(Math.floor(msLeft / 1000), 1);
    notify.aboutToExpire(seconds);
  }

  // Schedule forced logout (5s safety margin before actual expiration)
  expTimer = window.setTimeout(() => {
    notify.expired();
    clearToken();
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, Math.max(msLeft - 5000, 0));
}
