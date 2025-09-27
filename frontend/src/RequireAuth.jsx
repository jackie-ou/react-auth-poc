import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  // TODO: add auth state
  const user = null;

  // Unauthenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // Protected page
  return children;
}

export default RequireAuth;
