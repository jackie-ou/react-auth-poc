import { useHandleLogout } from "../utils/handleLogout.jsx";

export default function Dashboard({ user }) {
  // Context
  const logout = useHandleLogout();

  return (
    <div className="dashboard">
      <h1>Dashboard (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Sign Out</button>
    </div >
  );
}
