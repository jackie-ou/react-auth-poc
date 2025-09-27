import { useNavigate } from "react-router-dom";

const LOGIN_REDIRECT = "/admin/dashboard";

export default function Login({ setUser }) {
  // Router
  const navigate = useNavigate();
  // Helpers
  const handleLogin = () => {
    // TODO: add user object
    setUser({ name: "User 1" });
    navigate(LOGIN_REDIRECT);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
