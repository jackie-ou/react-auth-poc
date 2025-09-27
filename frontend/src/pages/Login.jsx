import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes"

export default function Login({ user, setUser }) {
  // Router
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state.from.pathname;
  if (user) {
    return <Navigate to={from} replace />
  }

  // Helpers
  const handleLogin = () => {
    // TODO: add user object
    setUser({ name: "User 1" });
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
