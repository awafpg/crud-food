"use client";

import NavbarComp from "@/componenets/Navbar";
import { useRouter } from "next/navigation";
import HomePage from "./(main)/(home)/page";
import FooterComp from "@/componenets/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <NavbarComp />
      <HomePage />
      <FooterComp />
    </>
  );
}
