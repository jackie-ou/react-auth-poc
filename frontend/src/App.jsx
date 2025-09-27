import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./constants/routes";
import "./styles/App.css";

export default function App() {
  // States
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <nav className="routes">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login setUser={setUser} />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <RequireAuth user={user}>
              <Dashboard user={user} setUser={setUser} />
            </RequireAuth>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
