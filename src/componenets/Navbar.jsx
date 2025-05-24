"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavbarComp = () => {
  const router = useRouter();

  return (
    <header className="bg-green-600 text-white p-4 flex justify-center">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        🍽️ FoodApp
      </h1>
      <div className="flex justify-center items-center">
        <div className="space-x-4">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2  text-green-600 rounded hover:bg-gray-100"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/foods")}
            className="px-4 py-2  text-green-600 rounded hover:bg-gray-100"
          >
            Foods
          </button>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 text-green-600 rounded hover:bg-gray-100"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarComp;
