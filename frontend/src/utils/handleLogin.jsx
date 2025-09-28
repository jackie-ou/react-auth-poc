import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useHandleLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (userData, from) => {
    login(userData);
    navigate(from, { replace: true });
  };
}