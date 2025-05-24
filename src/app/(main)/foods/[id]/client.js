"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FoodDetailClient({ foods }) {
  console.log("🚀 ~ FoodDetailClient ~ foods:", foods);
  const food = foods.data;
  console.log("🚀 ~ FoodDetailClient oke ~ food:", food);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: food.name,
    description: food.description,
    imageUrl: food.imageUrl,
    ingredients: food.ingredients,
    price: food.price,
    priceDiscount: food.priceDiscount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${food.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
          },
          body: JSON.stringify({
            ...formData,
            ingredients: formData.ingredients
              .split(",")
              .map((item) => item.trim()),
          }),
        }
      );

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Gagal memperbarui data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      if (res.ok) {
        router.push("/foods");
      } else {
        console.error("Gagal menghapus data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Produk: {food.name}</h1>
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">
        <strong>Deskripsi:</strong> {food.description}
      </p>
      <p className="mb-2">
        <strong>Harga:</strong> Rp {food.price}
      </p>
      <p className="mb-2">
        <strong>Diskon:</strong> Rp {food.priceDiscount}
      </p>
      <p className="mb-4">
        <strong>Bahan:</strong>
        <ul className="list-disc list-inside mt-2 pl-4">
          {food.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </p>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama"
          className="w-full border p-2"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Deskripsi"
          className="w-full border p-2"
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="URL Gambar"
          className="w-full border p-2"
        />
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Bahan-bahan (pisahkan dengan koma)"
          className="w-full border p-2"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Harga"
          className="w-full border p-2"
        />
        <input
          type="number"
          name="priceDiscount"
          value={formData.priceDiscount}
          onChange={handleChange}
          placeholder="Diskon Harga"
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Perbarui
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Hapus
        </button>
      </form>
    </div>
  );
}
