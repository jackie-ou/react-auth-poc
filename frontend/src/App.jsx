import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

export default function App() {
  // States
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <nav className="routes">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/admin/dashboard"
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
