import { createContext, useContext, useState, useEffect } from "react";
import api from "../lib/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await VerifyUser();
      setLoading(false);
    })();
  }, []);

  const VerifyUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const { data } = await api.get("/auth/verifyUser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.user);
      return data.user
    } catch (error) {
      console.error("Auth verification failed", error);
      localStorage.removeItem("token");
      setUser(null);
      return null
    }
  };

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    // localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, VerifyUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
