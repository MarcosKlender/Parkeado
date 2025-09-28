import { Navigate, Outlet } from "react-router-dom";
import { Header } from "@/components/shared/Header/Header";

import "./DashboardLayout.scss";
import { validateJwtClaims } from "@/config/security/jwt-validate";
import { clearToken, getToken } from "@/config/security/token";
import { notify } from "@/components/helpers/notify";

/**
 * Layout component for dashboard pages (home, profile, reservation).
 * Contains the shared Header component and renders child routes via Outlet.
 * @component
 * @returns The dashboard layout with header and outlet for dashboard pages.
 */
export function DashboardLayout() {
  let token = getToken();
  if (!token) {
    clearToken();
    notify.invalidToken(); 
    return <Navigate to="/" replace />;
  }

  const res = validateJwtClaims(token, {
    expectedIss: "https://parkeado.backend.app/",
    expectedAud: "parkeado-app",
    clockSkewSec: 120,
    maxLifetimeSec: 3600,
  });
  if (!res.ok) {
    // Según la razón puedes mostrar un toast distinto
    if (res.reason === "TOKEN_EXPIRED") {
      notify.expired(); //token vencido
    } else {
      notify.invalidToken(); // token inválido por otra razón
      console.log('ingresa')
    }

    //clearToken();
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </>
  );
}
