import { Navigate } from "react-router-dom";

function RequireAuth({ user, children }) { 
  // Unauthenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // Protected page
  return children;
}

export default RequireAuth;
