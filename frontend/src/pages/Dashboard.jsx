import { useNavigate } from "react-router-dom";

const LOGOUT_REDIRECT = "/";

export default function Dashboard({ user, setUser }) {
  // Router
  const navigate = useNavigate();
  // Helpers
  const handleLogout = () => {
    setUser(null);
    navigate(LOGOUT_REDIRECT);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}
