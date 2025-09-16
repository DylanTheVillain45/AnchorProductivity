import React, { useState } from 'react'
import api from "../lib/axios.js"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

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
}

export default LoginForm;