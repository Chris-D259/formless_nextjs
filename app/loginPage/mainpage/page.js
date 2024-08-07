"use client";
import 'tailwindcss/tailwind.css';
import { useAuth } from "../_utils/auth_context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Users from "./users";
import FormsTable from "./forms";
import Submissions from "./submissions";

export default function Page() {
    const[activeItem, setActiveItem] = useState('Users');
    const { user, logout } = useAuth();
    const router = useRouter();
    const handleItemClick = (item) => {
        setActiveItem(item);
    }
    const logoutCurrentUser = async () => {
        try {
            await logout();
            router.push('/loginPage');
        } catch (error) {
            console.log(error);
        }
    };

useEffect(() => {
   if (!user) {
       router.push('/loginPage');
    }
}, [user, router]);

if (!user) {
     return null;
 }

    return (
        <>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl">Formless</h1>
                <button onClick={logoutCurrentUser} className="bg-gray-800 text-white p-2 rounded-lg hover:bg-orange-500 hover:text-black">Logout</button>
            </header>
            <main className="bg-gray-200 flex justify-start items-start h-screen w-screen">
                <div className=" p-4 ">
                    <h2 className="text-2xl">Welcome to Formless</h2>
                    <ul className="flex border-gray-500 border-spacing-2 border rounded-lg">
                    {['Users', 'Forms', 'Submissions'].map((item) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)}
                className={`p-2 rounded-lg m-2 cursor-pointer hover:bg-orange-500 hover:text-white ${
                  activeItem === item ? 'bg-gray-300 text-black' : ' text-black'
                }`}
              >
                {item}
              </li>
            ))}
                    </ul>
                    {activeItem === 'Users' && <Users />}
                    {activeItem === 'Forms' && <FormsTable />}
                    {activeItem === 'Submissions' && <Submissions />}
                </div>
            </main>
        </>
    );
}
