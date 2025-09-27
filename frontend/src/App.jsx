import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import './App.css';

function Home() {
  return <h1>Home (public)</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Dashboard() {
  return <h1>Dashboard (protected)</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="routes">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}
