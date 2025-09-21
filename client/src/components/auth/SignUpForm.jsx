import React, { useEffect, useState } from "react";
import api from "../../lib/axios.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const { login, logout } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");

  const navigate = useNavigate;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      logout();
    } else {
      handleSuccess();
    }
  }, []);

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== comfirmPassword) {
      return toast.error("Passwords need to match")
    }

    try {
      const { data } = api.post("/auth/signup", {
        email,
        password,
        role: "user",
      });

      login(data.token, data.user);
      handleSuccess();
    } catch (error) {
      logout();
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 w-2/3 max-w-sm flex flex-col p-6 shadow-xl rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full mb-3"
        value={comfirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
      />

      <button type="submit" className="btn btn-primary w-full">
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
