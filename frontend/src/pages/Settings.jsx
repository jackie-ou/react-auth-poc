import { useAuth } from "../context/AuthContext.jsx";
import { useHandleLogout } from "../utils/handleLogout.jsx"

export default function Settings() {
  // Context
  const { user } = useAuth();
  const logout = useHandleLogout();

  return (
    <div className="settings">
      <h1>Settings (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}