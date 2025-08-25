import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthLayout } from "@/layouts/AuthLayout/AuthLayout";
import { DashboardLayout } from "./layouts/DashboardLayout/DashboardLayout";
import { Login } from "@/pages/Auth/Login/Login";
import { Register } from "@/pages/Auth/Register/Register";
import { Home } from "@/pages/Dashboard/Home/Home";
import { Profile } from "@/pages/Dashboard/Profile/Profile";
import { Reservation } from "./pages/Dashboard/Reservation/Reservation";
import { NotFound } from "@/pages/NotFound/NotFound";

import "@/App.css";

/**
 * Renders the App component with its routes (React Router v6).
 * @component
 * @returns The rendered application component.
 */
export function App() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
