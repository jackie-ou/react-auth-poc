import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./constants/routes";
import "./styles/App.css";

export default function App() {
  // States
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <nav className="routes">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.DASHBOARD}>Dashboard (protected)</Link>
        <Link to={ROUTES.SETTINGS}>Settings (protected)</Link>
      </nav>

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login user={user} />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <RequireAuth user={user}>
              <Dashboard user={user} />
            </RequireAuth>
          } />
        <Route
          path={ROUTES.SETTINGS}
          element={
            <RequireAuth user={user}>
              <Settings user={user} />
            </RequireAuth>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
