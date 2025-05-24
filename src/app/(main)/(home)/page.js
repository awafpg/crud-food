import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
};

export default HomePage;
