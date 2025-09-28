import { useAuth } from "../context/AuthContext.jsx";
import { useHandleLogout } from "../utils/handleLogout.jsx";

export default function Dashboard() {
  // Context
  const { user } = useAuth();
  const logout = useHandleLogout();

  return (
    <div className="dashboard">
      <h1>Dashboard (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Sign Out</button>
    </div >
  );
}
