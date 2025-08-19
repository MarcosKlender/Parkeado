import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
