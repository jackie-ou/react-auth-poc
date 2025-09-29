import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function RequireAuth({ user, children }) {
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
