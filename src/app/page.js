"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍽️ FoodApp</h1>
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-white text-green-600 rounded hover:bg-gray-100"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 bg-gradient-to-br from-green-100 to-white px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to FoodApp</h2>
        <p className="text-lg text-gray-700 mb-6">
          Discover and manage your favorite foods with ease. Browse, edit, and
          create your own delicious recipes.
        </p>
        <button
          onClick={() => router.push("/foods")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          View Foods
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} FoodApp by You
      </footer>
    </div>
  );
}
