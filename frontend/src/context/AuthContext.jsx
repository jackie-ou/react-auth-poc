import { createContext, useContext, useState } from "react";

// Context
const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export const useAuth = () => {
  // Auth state
  const { user, setUser } = useContext(AuthContext);
  // Login
  const login = (userData) => {
    setUser(userData);
  }
  // Logout
  const logout = () => {
    setUser(null);
  }
  return { user, login, logout };
};