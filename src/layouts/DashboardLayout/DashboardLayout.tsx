import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "@/components/shared/Header/Header";

import "./DashboardLayout.scss";

/**
 * Layout component for dashboard pages (home, profile, reservation).
 * Contains the shared Header component and renders child routes via Outlet.
 * @component
 * @returns The dashboard layout with header and outlet for dashboard pages.
 */
export function DashboardLayout() {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  if (!token) {
    sessionStorage.clear();
    navigate("/");
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
