"use client";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl">Welcome to Formless</h2>
          <Link href="/loginPage">
            <button className="bg-gray-800 m-2 hover:bg-orange-500 hover:text-black text-white font-bold py-2 px-4 rounded">
              Click to Get Started
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
