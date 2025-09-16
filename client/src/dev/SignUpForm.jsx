import React, { useState } from "react";
import api from "../lib/axios.js";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      api.post("/auth/signup", {
        email,
        password,
        role: "user",
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card bg-base-100 w-full max-w-sm shadow-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

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
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
