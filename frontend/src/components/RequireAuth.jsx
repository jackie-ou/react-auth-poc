import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function RequireAuth({ children }) {
  // Context
  const { user } = useAuth();
  // Router
  const location = useLocation();
  // Unauthenticated
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  // Protected page
  return children;
}

export default RequireAuth;
