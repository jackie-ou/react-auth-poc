import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useHandleLogin } from "../utils/handleLogin";
import { ROUTES } from "../constants/routes";

export default function Login() {
  // Context
  const { user } = useAuth();
  const login = useHandleLogin();
  const userData = { name: "User 1" };
  // Router
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || ROUTES.HOME;
  if (user) {
    return <Navigate to={from} replace />
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={() => login(userData, from)}>Sign In</button>
    </div>
  );
}
