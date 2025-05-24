import { notFound } from "next/navigation";
import FoodDetailClient from "./client";

export default async function FoodDetailPage({ params }) {
  const { id } = await params;
  console.log("🚀 ~ FoodDetailPage ~ id:", id);

  const res = await fetch(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    }
  );
  console.log("🚀 ~ FoodDetailPage ~ res:", res);

  if (!res.ok) {
    notFound();
  }

  const food = await res.json();
  console.log("🚀 ~ FoodDetailPage ~ food:", food);

  return <FoodDetailClient foods={food} />;
}
