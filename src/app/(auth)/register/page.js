"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // or 'user' if needed
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://api-bootcamp.do.dibimbing.id/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: JSON.stringify({
            name: fullName,
            email,
            password,
            role,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Register gagal");
      }

      setSuccess("Registrasi berhasil! Silakan login.");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-4"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full border p-2 mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
