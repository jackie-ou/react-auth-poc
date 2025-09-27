import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import './App.css';

function Home() {
  return <h1>Home (public)</h1>;
}

function Login({ setUser }) {
  // States
  const navigate = useNavigate();
  // Helper
  const handleLogin = () => {
    // TODO: add user object
    setUser({ name: "User 1" });
    navigate("/admin/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

function Dashboard({ user, setUser }) {
  // Helper
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

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
      </Routes>
    </BrowserRouter>
  );
}
