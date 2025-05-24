import Navbar from "@/componenets/Navbar";
import Link from "next/link";

async function getFoods() {
  const res = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
    method: "GET",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Gagal memuat data makanan:", res.statusText);
    return []; // or return a fallback array
  }

  const result = await res.json();
  return result.data;
}

export default async function FoodsPage() {
  const foods = await getFoods();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Daftar Makanan</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <Link
            key={food.id}
            href={`/foods/${food.id}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={food.imageUrl}
              alt={food.name}
              className="object-cover w-full h-48"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{food.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
