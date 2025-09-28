import { useHandleLogout } from "../utils/handleLogout.jsx"

export default function Settings({ user }) {
  // Context
  const logout = useHandleLogout();

  return (
    <div className="settings">
      <h1>Settings (protected)</h1>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}