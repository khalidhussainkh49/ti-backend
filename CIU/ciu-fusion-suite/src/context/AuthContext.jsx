// src/context/AuthContext.jsx

import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import useSessionTimeout from "../hooks/useSessionTimeout";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch {
      localStorage.removeItem("token");
      return null;
    }
  });

  const login = (token) => {
    localStorage.setItem("token", token);

    try {
      setUser(jwtDecode(token));
    } catch {
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  // Call AFTER logout is declared
  useSessionTimeout(logout);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);