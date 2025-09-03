import { Outlet } from "react-router-dom";
import { AuthMap } from "@/components/maps/AuthMap/AuthMap";
import { useIsDesktop } from "@/hooks/useIsDesktop";

import "./AuthLayout.scss";

/**
 * Layout component for authentication pages (login and register).
 * Contains the shared AuthMap component and renders child routes via Outlet.
 * @component
 * @returns The authentication layout with map and outlet for auth forms.
 */
export function AuthLayout() {
  const isDesktop = useIsDesktop();

  return (
    <main className="auth-main">
      {/* Display the authentication map only on desktop */}
      {isDesktop && <AuthMap />}

      <section className="auth-content">
        <Outlet />
      </section>
    </main>
  );
}
