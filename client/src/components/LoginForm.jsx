import React, { useEffect, useState } from "react";
import api from "../lib/axios.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const { login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      handleSuccess();
    } else {
      logout()
    }
  }, []);

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      login(data.token, data.user)
      handleSuccess();
    } catch (error) {
      logout()
      console.log("Login Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 w-full max-w-sm shadow-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Log In</h2>

      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn btn-primary w-full">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
