import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useHandleLogin } from "../utils/handleLogin";

export default function Login({ user }) {
  // Router
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state.from.pathname;
  if (user) {
    return <Navigate to={from} replace />
  }

  // Context
  const login = useHandleLogin();
  const userData = { name: "User 1" };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={() => login(userData, from)}>Sign In</button>
    </div>
  );
}
