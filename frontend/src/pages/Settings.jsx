import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export default function Settings({ user, setUser }) {
  // Router
  const navigate = useNavigate();
  // Helpers
  const handleLogout = () => {
    setUser(null);
    navigate(ROUTES.HOME);
  };

  return (
    <div className="settings">
      <h1>Settings (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}